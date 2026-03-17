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
      bg-primary/15
      border border-white/10
      text-foreground
      text-sm
      placeholder:text-muted
      ${className}`}
      >
        {icon && <span className="text-gray-400">{icon}</span>}

        <input
          ref={ref}
          className="bg-transparent outline-none border-none focus:outline-none focus:ring-0 w-full text-white placeholder-gray-400"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
