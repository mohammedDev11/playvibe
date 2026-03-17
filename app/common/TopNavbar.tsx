// "use client";

// import Link from "next/link";
// import MainButton from "./MainButton";

// export type TopNavItem = {
//   label: string;
//   href: string;
// };

// type TopNavbarProps = {
//   items: TopNavItem[];
//   ctaLabel?: string;
//   ctaHref?: string;
//   className?: string;
// };

// const TopNavbar = ({
//   items,
//   ctaLabel = "Free Trial",
//   ctaHref = "/subscriptions",
//   className = "",
// }: TopNavbarProps) => {
//   return (
//     <nav
//       className={`
//     flex items-center
//     rounded-full
//     border border-white/20
//     bg-black/40
//     backdrop-blur-xl
//     px-5 py-3
//     ${className}
//   `}
//     >
//       <div className="flex items-center gap-6 flex-wrap justify-center">
//         {items.map((section) => (
//           <a
//             href={section.href}
//             key={section.href}
//             className="cursor-pointer text-sm text-foreground/80 hover:text-foreground transition"
//           >
//             {section.label}
//           </a>
//         ))}

//         <Link href={ctaHref}>
//           <MainButton
//             label={ctaLabel}
//             className="py-2 px-5 text-sm whitespace-nowrap"
//           />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default TopNavbar;

"use client";

import Link from "next/link";
import MainButton from "./MainButton";

export type TopNavItem = {
  label: string;
  href: string;
};

type TopNavbarProps = {
  items: TopNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const TopNavbar = ({
  items,
  ctaLabel = "Free Trial",
  ctaHref = "/subscriptions",
  className = "",
}: TopNavbarProps) => {
  return (
    <nav
      className={`
        items-center rounded-full border border-white/20
        bg-black/40 px-5 py-3 backdrop-blur-xl
        ${className}
      `}
    >
      <div className="flex items-center gap-6 whitespace-nowrap">
        {items.map((section) => (
          <Link
            href={section.href}
            key={section.href}
            className="text-sm text-foreground/80 transition hover:text-foreground"
          >
            {section.label}
          </Link>
        ))}

        <Link href={ctaHref}>
          <MainButton
            label={ctaLabel}
            className="whitespace-nowrap px-5 py-2 text-sm"
          />
        </Link>
      </div>
    </nav>
  );
};

export default TopNavbar;
