import React from "react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4">
        {title}
      </h2>

      {description && (
        <p className=" text-muted text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
