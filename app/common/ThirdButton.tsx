import React from "react";

type ThirdButtonProps = {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const ThirdButton = ({
  onClick,
  className = "",
  type = "button",
  label,
  icon,
  children,
}: ThirdButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        whitespace-nowrap
        rounded-2xl
        font-semibold
        transition-all duration-200
        hover:-translate-y-0.5
        hover:bg-neutral-700
        cursor-pointer
        bg-neutral-800 text-white
        px-5 py-3
        ${className}
      `}
    >
      {icon}
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};

export default ThirdButton;
