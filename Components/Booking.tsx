"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Booking: React.FC = () => {
  const t = useTranslations("booking");
  const locale = useLocale();

  interface BookingItem {
    label: string;
    base: boolean;
    key: string;
  }

  const Bookings: BookingItem[] = [
    { label: "01", base: true, key: "1" },
    { label: "02", base: false, key: "2" },
    { label: "03", base: false, key: "3" },
  ];

  return (
    <section className="mx-auto w-full py-20 relative bg-[#F9F9F9]">
      <div className="flex w-full h-[100%] flex-col justify-between gap-25">
        <div className="flex flex-col items-center gap-8 px-6 lg:px-20 3xl:px-0 md:z-0 z-10">
          <h2 className="font-[IBMSansArabicSemiBold] text-[#202020] text-[45px] md:text-[67px] !leading-[88px]">
            {t("title")}{" "}
          </h2>
          <h2 className="font-[IBMSansArabicSemiRegular] text-[#525252] text-[20px] !leading-[24px]">
            {t("description")}
          </h2>
        </div>

        <div className="w-full flex justify-center gap-8 flex-wrap p-4 px-6 lg:px-20 3xl:px-0">
          {Bookings.map((book: BookingItem, index: number) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }}>
              <div className="md:w-[388px] w-[300px] h-[220px] md:py-0 py-5 shadow-[4px_11px_35px_rgba(0,0,0,0.07)] rounded-[16px] px-5 flex flex-col items-start justify-center gap-4 bg-white">
                {/* label */}
                <span
                  className={`font-[IBMSansArabicSemiBold] text-[50px] !leading-[56px] mb-2 ${
                    book.base ? "text-[#FFB636]" : "text-[#E2E2E2]"
                  }`}
                >
                  {book.label}
                </span>
                {/* title */}
                <h3 className="font-[IBMSansArabicSemiBold] text-[28px] !leading-[32px]">
                  {t(`${book.key}.title`)}
                </h3>
                {/* description */}
                <p className="font-[IBMSansArabicRegular] text-[16px] !leading-[24px] text-[#525252]">
                  {t(`${book.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        

        {/* corn image */}
        <div
          className={`absolute md:top-60 top-90 md:z-10 z-0 ${
            locale === "ar" ? "right-0" : "left-0 scale-x-[-1]"
          }`}
        >
          <Image
            src={"/services/corn.svg"}
            alt="hero"
            width={600}
            height={600}
            className={`w-[55px] h-auto`}
            priority
            draggable={false}
          />
        </div>
        {/* x 2 image */}
        <div
          className={`absolute bottom-30 z-10 ${
            locale === "ar" ? "left-15" : "right-53 scale-x-[-1]"
          }`}
        >
          <Image
            src={"/services/x.svg"}
            alt="hero"
            width={600}
            height={600}
            className={`w-[25px] h-auto`}
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
