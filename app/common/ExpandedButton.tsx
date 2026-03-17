// import React from "react";
// import type { IconType } from "react-icons";

// type ExpandedButtonProps = {
//   id: string;
//   label: string;
//   icon: IconType;
//   color: string; // hover background color
//   onClick?: () => void;
// };

// const ExpandedButton: React.FC<ExpandedButtonProps> = ({
//   label,
//   icon: Icon,
//   color,
//   onClick,
// }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       style={
//         {
//           "--hover-color": color,
//         } as React.CSSProperties
//       }
//       className="
//         group flex items-center overflow-hidden rounded-xl
//         bg-neutral-800 text-white
//         transition-all duration-700 hover:scale-105
//         hover:bg-[var(--hover-color)] p-2
//       "
//     >
//       {/* Icon container */}
//       <div className="flex h-10 w-10 items-center justify-center">
//         <Icon size={25} />
//       </div>

//       {/* Expanding label */}
//       <span
//         className="
//         max-w-0 overflow-hidden whitespace-nowrap text-sm
//         transition-all duration-700
//         group-hover:max-w-[140px]
//         group-hover:pr-4
//       "
//       >
//         {label}
//       </span>
//     </button>
//   );
// };

// export default ExpandedButton;

import React from "react";
import type { IconType } from "react-icons";

type ExpandedButtonProps = {
  id: string;
  label: string;
  icon: IconType;
  className?: string;
  onClick?: () => void;
};

const ExpandedButton: React.FC<ExpandedButtonProps> = ({
  label,
  icon: Icon,
  className = "",
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
      group flex items-center overflow-hidden rounded-xl
      bg-neutral-800 text-white
      transition-all duration-700 hover:scale-105 p-2
      ${className}
    `}
    >
      <div className="flex h-10 w-10 items-center justify-center">
        <Icon size={25} />
      </div>

      <span
        className="
          max-w-0 overflow-hidden whitespace-nowrap text-sm
          transition-all duration-700
          group-hover:max-w-[140px]
          group-hover:pr-4
        "
      >
        {label}
      </span>
    </button>
  );
};

export default ExpandedButton;
