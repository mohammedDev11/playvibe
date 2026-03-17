import React, { forwardRef } from "react";

type FloatingInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  wrapperClassName?: string;
  label: string; // make label required (better API)
};

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    { icon, label, id, className = "", wrapperClassName = "", ...props },
    ref
  ) => {
    if (!id) {
      console.warn("FloatingInput requires an id for proper label behavior.");
    }

    return (
      <div
        className={`relative min-w-0 w-full flex items-center gap-3 px-5 py-3
        rounded-full border border-white/30 text-sm
        transition-all duration-200
        focus-within:border-white bg-black
        ${wrapperClassName}`}
      >
        {icon && <span className="text-gray-400">{icon}</span>}

        {/* Input */}
        <input
          ref={ref}
          id={id}
          placeholder=" "
          className={`peer bg-transparent w-full text-white placeholder-transparent
            outline-none border-none focus:outline-none focus:ring-0
            ${className}`}
          {...props}
        />

        {/* Floating Label */}
        <label
          htmlFor={id}
          className="
            absolute left-14
            top-1/2 -translate-y-1/2
            text-sm text-white/50
            bg-black px-1
            pointer-events-none
            transition-all duration-200 ease-out

            peer-focus:top-0
            peer-focus:-translate-y-1/2
            peer-focus:text-xs
            peer-focus:text-white

            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:-translate-y-1/2
            peer-not-placeholder-shown:text-xs
          "
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;
