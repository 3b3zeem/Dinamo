"use client";

import { REVIEWS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

type ReviewsProps = {
  limit?: number;
};

const ReviewCard = ({
  nameKey,
  rating,
  commentKey,
  avatar,
}: {
  nameKey: string;
  rating: number;
  commentKey: string;
  avatar: string;
}) => {
  const t = useTranslations("reviews");
  return (
    <div className="p-6 rounded-xl text-white shadow border border-gray-200/10 flex flex-col gap-6">
      <div className="flex items-start justify-start flex-col gap-3">
        <div className="flex items-center gap-4">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full object-cover"
            priority
          />
          <div>
            <h4 className="text-[18px] font-[700] leading-tight text-black">{t(nameKey)}</h4>
          </div>
        </div>
        <div className="flex gap-1">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-xl">
                <Image
                  src="/star.svg"
                  key={i}
                  alt="star"
                  width={24}
                  height={24}
                  priority
                />
              </span>
            ))}
        </div>
      </div>
      <p className="text-[14px] font-[400] leading-relaxed text-gray-500">
        {t(commentKey)}
      </p>
    </div>
  );
};

const Reviews = ({ limit = REVIEWS.length }: ReviewsProps) => {
  const t = useTranslations("reviews");
  const locale = useLocale();

  return (
    <section className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] flex flex-col pb-20 px-6 lg:px-20">
      <div className="relative mb-10">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          priority
          className={`absolute top-[-30px] w-10 lg:w-[50px] ${
            locale === "ar" ? "right-[-5px]" : "left-[-5px]"
          }`}
        />
        <h2 className="text-[40px] font-[700] lg:text-[64px]">{t("title")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REVIEWS.slice(0, limit).map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      {limit < REVIEWS.length && (
        <div className="flex justify-center mt-10">
          <Link
            href={`/reviews`}
            className="border-[#FFC107] bg-[#FFC107] text-[#212121] font-[600] px-8 py-3 hover:bg-[#FFC101] hover:text-white transition-all rounded-full"
          >
            {t("viewAll")}
          </Link>
        </div>
      )}
    </section>
  );
};

export default Reviews;
