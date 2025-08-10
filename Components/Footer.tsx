import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mb-24">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} className="w-20 h-auto" />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.id} id={columns.id}>
                <span className="text-[14px] font-[400] flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </span>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title} id={1}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="text-[14px] font-[600] whitespace-nowrap text-[#021639]">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} id={2}>
                <span className="text-[14px] font-[400] flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} className="w-7 h-auto" />
                    </Link>
                  ))}
                </span>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-[#A2A2A2]" />
        <p className="text-[14px] font-[400] w-full text-center text-[#7B7B7B]">2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  id: number
}

const FooterColumn = ({ title, children, id }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5" key={id}>
      <h4 className="text-[18px] font-[700] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer