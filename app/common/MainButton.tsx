// import React from "react";

// type MainButtonProps = {
//   label: string;
//   onClick?: () => void;
//   className?: string;
//   type?: "button" | "submit" | "reset";
// };

// const MainButton = ({
//   label,
//   onClick,
//   className = "",
//   type = "button",
// }: MainButtonProps) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`
//       inline-flex items-center justify-center
//       whitespace-nowrap
//       rounded-2xl
//       bg-primary text-white
//       font-bold
//       transition-all duration-200
//       hover:bg-primary-light
//       hover:-translate-y-0.5
//       active:bg-primary-dark
//       ${className}
//     `}
//     >
//       {label}
//     </button>
//   );
// };

// export default MainButton;

//=============New==============
import React from "react";

type MainButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const MainButton = ({
  label,
  onClick,
  className = "",
  type = "button",
  icon,
  iconPosition = "left",
}: MainButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        whitespace-nowrap
        rounded-2xl
        bg-primary text-white
        font-bold
        transition-all duration-200
        hover:bg-primary-light
        hover:-translate-y-0.5
        active:bg-primary-dark
        cursor-pointer
        ${className}
      `}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      <span>{label}</span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
};

export default MainButton;
