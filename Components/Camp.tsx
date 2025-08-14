"use client";

import { PEOPLE_URL } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-[40px]`}
      style={{ backgroundImage }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#585858] p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} priority />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-[700] text-white">{title}</h4>
            <p className="text-[14px] font-[400] text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                priority
              />
            ))}
          </span>
          <p className="text-[16px] font-[700] md:text-[20px] text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const t = useTranslations("camp");
  const locale = useLocale();

  return (
    <section className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] flex flex-col lg:mb-10 py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[400px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[640px]">
        <CampSite
          backgroundImage="url('/img-1.webp')"
          title={t("putukTrunoCamp")}
          subtitle={t("prigenPasuruan")}
          peopleJoined={t("peopleJoined")}
        />
        <CampSite
          backgroundImage="url('/img-2.webp')"
          title={t("mountainViewCamp")}
          subtitle={t("somewhereWilderness")}
          peopleJoined={t("peopleJoined")}
        />
      </div>

      <div
        className={`flex items-center  ${
          locale === "ar" ? "justify-start" : "justify-end"
        } mt-10 px-6 lg:-mt-35 lg:mr-6`}
      >
        <div className="bg-[#585858] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-[24px] font-[400] md:text-[32px] 2xl:regular-64 capitalize text-white">
            <strong>{t("feelingLostTitle")}</strong>
          </h2>
          <p className="text-[14px] font-[400] xl:text-[16px] mt-5 text-white">
            {t("feelingLostDescription")}
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            priority
            className={`absolute ${
              locale === "ar"
                ? "-left-6 xl:-left-8 2xl:left-0"
                : "-right-6 xl:-right-8 2xl:right-0"
            } bottom-4 w-[140px] lg:bottom-10  xl:w-[186px] `}
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
