import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border cursor-pointer ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} className="w-7 h-auto" priority />}
      <span className="whitespace-nowrap cursor-pointer">
        {title}
      </span>
    </button>
  );
};

export default Button;
