import React from "react";

type SecondButtonProps = {
  label?: string; // optional now
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const SecondButton = ({
  label,
  onClick,
  className = "",
  type = "button",
  icon,
  iconPosition = "left",
}: SecondButtonProps) => {
  const isIconOnly = icon && !label;

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={isIconOnly ? "icon-button" : label}
      className={`
        inline-flex items-center justify-center gap-2
        whitespace-nowrap
        rounded-2xl
         text-white
        font-bold
        transition-all duration-200
        hover:-translate-y-0.5
        active:bg-primary-dark
        cursor-pointer
        ${isIconOnly ? "h-10 w-10 p-0" : "px-4 py-2"}
        ${className}
      `}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      {label && <span>{label}</span>}

      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
};

export default SecondButton;
