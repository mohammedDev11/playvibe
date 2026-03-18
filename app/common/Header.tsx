// import React from "react";
// import TopNavbar, { type TopNavItem } from "./TopNavbar";
// import ControlGroup from "./ControlGroup";
// import MobileTopActions from "./MobileTopActions";

// type HeaderProps = {
//   list: TopNavItem[];
// };
// const Header = ({ list }: HeaderProps) => {
//   return (
//     <header className="flex items-center justify-between gap-4">
//       {/* LEFT (Desktop) */}
//       <TopNavbar items={list} className="hidden md:flex" />

//       {/* RIGHT (Desktop) */}
//       <ControlGroup />

//       {/* Mobile */}
//       <div className="md:hidden flex w-full items-center justify-between">
//         <p className="text-foreground/80">logo</p>
//         <MobileTopActions list={list} />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import TopNavbar, { type TopNavItem } from "./TopNavbar";
import ControlGroup from "./ControlGroup";
import MobileTopActions from "./MobileTopActions";
import Link from "next/link";

type HeaderProps = {
  list: TopNavItem[];
};

const Header = ({ list }: HeaderProps) => {
  return (
    <header
      className="
        sticky top-0 z-30
        border-b border-white/10
        bg-neutral-950/80
        px-4 py-5
        backdrop-blur-xl
        sm:px-6 sm:py-6
        lg:px-10 lg:py-6
      "
    >
      <div className="flex items-center justify-between gap-4">
        <TopNavbar items={list} className="hidden md:flex" />
        <ControlGroup />

        <div className="flex w-full items-center justify-between md:hidden">
          {/* <p className="text-foreground/80">logo</p> */}
          {/* Logo */}

          <Link href="/" className=" flex items-center gap-3 px-2 group">
            <img
              src="/favicon.ico"
              alt="PlayVibe Logo"
              className="h-12 w-12 ml-0.5 object-contain"
            />

            <span
              className="
      whitespace-nowrap text-xl font-semibold text-foreground
      opacity-0 transition-opacity duration-300 group-hover:opacity-100
    "
            >
              Play<span className="text-primary">Vibe</span>
            </span>
          </Link>
          <MobileTopActions list={list} />
        </div>
      </div>
    </header>
  );
};

export default Header;
