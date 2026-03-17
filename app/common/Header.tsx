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
          <p className="text-foreground/80">logo</p>
          <MobileTopActions list={list} />
        </div>
      </div>
    </header>
  );
};

export default Header;
