import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className = "", ...props }, ref) => {
    return (
      <div
        className={`min-w-0 flex items-center gap-3 px-5 py-3
      rounded-full
      bg-foreground
      border border-white/10
      text-neutral-900
      text-sm
      placeholder:text-neutral-700
      ${className}`}
      >
        {icon && <span className="text-neutral-700">{icon}</span>}

        <input
          ref={ref}
          className="bg-transparent outline-none border-none focus:outline-none focus:ring-0 w-full text-neutral-900  placeholder-neutral-500"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
