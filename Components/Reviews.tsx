"use client";

import { REVIEWS } from "@/constants";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const ReviewCard = ({
  nameKey,
  commentKey,
  rating = 5,
  customerKey,
}: {
  nameKey: string;
  commentKey: string;
  customerKey: string;
  rating?: number;
}) => {
  const t = useTranslations("reviews");
  const locale = useLocale();

  return (
    <div className="md:h-[355px] mx-auto md:px-12 px-2 relative">
      <div className="relative bg-white shadow-[4px_11px_35px_rgba(0,0,0,0.07)] h-[calc(100% - 100px)] z-30">
        <div className="flex items-center flex-col md:flex-row h-auto p-4">
          <div className="md:w-1/3 w-full h-full">
            <Image
              src="/reviews/test.png"
              alt=""
              width={80}
              height={80}
              className="object-cover rounded-[16px] w-full h-full scale-x-[-1]"
            />
          </div>
          <div
            className={`md:px-8 px-0 md:w-1/3 w-full mt-2 md:mt-0 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t(nameKey)}
            </h3>
            <p className="text-sm text-orange-500 mb-4">{t(customerKey)}</p>

            <p className="text-gray-600 leading-relaxed text-base">
              {t(commentKey)}
            </p>

            <div className="flex gap-1 mt-6">
              {[...Array(rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/reviews/star.svg"
                  alt="star"
                  width={15}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const t = useTranslations("reviews");
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });
  

  return (
    <section className="py-20 px-6 lg:px-20 relative">
      <div className="relative mb-15 flex flex-col gap-5">
        <h2 className="font-[IBMSansArabicSemiBold] text-[#202020] text-[45px] md:text-[67px] !leading-[88px]">
          {t("title")}
        </h2>
        <h2 className="font-[IBMSansArabicRegular] text-[#525252] text-[16px] !leading-[30px] w-full lg:w-[50%]">
          {t("description")}
        </h2>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {REVIEWS.map((review, idx) => (
          <div key={review.id} className={`keen-slider__slide z-30`}>
            <ReviewCard
              nameKey={review.nameKey}
              commentKey={review.commentKey}
              customerKey={review.customerKey}
              rating={review.rating}
            />
          </div>
        ))}
      </div>

      {/* corn image */}
      <div
        className={`absolute z-10 ${
          locale === "ar" ? "left-24 top-70" : "right-24 scale-x-[-1] top-77"
        }`}
      >
        <Image
          src={"/guide/corn.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[60px]`}
          priority
          draggable={false}
        />
      </div>
      {/* x image */}
      <div
        className={`absolute top-50 z-40 ${
          locale === "ar" ? "left-130" : "right-150 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/x.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[25px] h-auto`}
          priority
          draggable={false}
        />
      </div>
      {/* x2 image */}
      <div
        className={`absolute bottom-10 z-40 ${
          locale === "ar" ? "right-50" : "left-50 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/x.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[30px] h-auto`}
          priority
          draggable={false}
        />
      </div>

      <div className="flex justify-center gap-2">
        {REVIEWS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider?.current?.moveToIdx(idx, true)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentSlide === idx ? "bg-[#FFB636] w-4" : "bg-[#525252]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
