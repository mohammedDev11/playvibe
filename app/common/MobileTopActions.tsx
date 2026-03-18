// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import {
//   HiBars3,
//   HiMagnifyingGlass,
//   HiArrowRightOnRectangle,
//   HiBell,
// } from "react-icons/hi2";

// import Modal from "./Modal";
// import Input from "./Input";
// import Login from "./Login";
// import TopSheet from "./TopSheet";
// import type { TopNavItem } from "./TopNavbar"; // ✅ use your exported type

// type ModalType = "search" | "login" | null;

// type MobileTopActionsProps = {
//   list: TopNavItem[];
// };

// export default function MobileTopActions({ list }: MobileTopActionsProps) {
//   const pathname = usePathname();
//   const [sheetOpen, setSheetOpen] = useState(false);
//   const [openModal, setOpenModal] = useState<ModalType>(null);

//   const closeModal = () => setOpenModal(null);

//   const isActive = (href: string) => {
//     // only works for real routes; for #anchors, we just return false
//     if (href.startsWith("#")) return false;
//     if (href === "/") return pathname === "/";
//     return pathname.startsWith(href);
//   };

//   return (
//     <div className="md:hidden flex items-center gap-2">
//       {/* Toggle Sheet */}
//       <button
//         type="button"
//         aria-label="Open menu"
//         onClick={() => setSheetOpen(true)}
//         className="p-2 rounded-xl hover:bg-white/10 transition"
//       >
//         <HiBars3 size={24} />
//       </button>

//       {/* Search */}
//       <button
//         type="button"
//         aria-label="Search"
//         onClick={() => setOpenModal("search")}
//         className="p-2 rounded-xl hover:bg-white/10 transition"
//       >
//         <HiMagnifyingGlass size={24} />
//       </button>

//       {/* Login */}
//       <button
//         type="button"
//         aria-label="Login"
//         onClick={() => setOpenModal("login")}
//         className="p-2 rounded-xl hover:bg-white/10 transition"
//       >
//         <HiArrowRightOnRectangle size={24} />
//       </button>

//       {/* Top Sheet menu */}
//       <TopSheet
//         open={sheetOpen}
//         onClose={() => setSheetOpen(false)}
//         title="Menu"
//       >
//         <div className="flex flex-col gap-3">
//           {/* ✅ Nav list */}
//           <div className="grid gap-2">
//             {list.map((item) => {
//               const active = isActive(item.href);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSheetOpen(false)}
//                   className={`
//                     rounded-2xl border px-4 py-3 transition
//                     ${
//                       active
//                         ? "border-white/20 bg-white/10 text-foreground"
//                         : "border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 hover:text-foreground"
//                     }
//                   `}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Notifications inside sheet */}
//           <button
//             className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
//             onClick={() => {
//               setSheetOpen(false);
//               // later: open notifications modal/page
//             }}
//           >
//             <HiBell size={20} className="text-primary" />
//             <span className="text-foreground">Notifications</span>
//           </button>
//         </div>
//       </TopSheet>

//       {/* Search/Login Modal */}
//       <Modal
//         open={openModal !== null}
//         onClose={closeModal}
//         title={
//           openModal === "search"
//             ? "Search"
//             : openModal === "login"
//             ? "Login"
//             : undefined
//         }
//       >
//         {openModal === "search" && (
//           <Input
//             autoFocus
//             icon={<HiMagnifyingGlass size={22} />}
//             placeholder="Type here..."
//             className="w-full"
//           />
//         )}

//         {openModal === "login" && <Login />}
//       </Modal>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HiBars3,
  HiMagnifyingGlass,
  HiArrowRightOnRectangle,
  HiBell,
} from "react-icons/hi2";

import Modal from "./Modal";
import Input from "./Input";
import Login from "./Login";
import TopSheet from "./TopSheet";
import type { TopNavItem } from "./TopNavbar";

type MobileTopActionsProps = {
  list: TopNavItem[];
};

export default function MobileTopActions({ list }: MobileTopActionsProps) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex items-center gap-2 md:hidden">
      {/* Toggle Sheet */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setSheetOpen(true)}
        className="rounded-xl p-2 transition hover:bg-white/10"
      >
        <HiBars3 size={24} />
      </button>

      {/* Search */}
      <button
        type="button"
        aria-label="Search"
        onClick={() => setSearchOpen(true)}
        className="rounded-xl p-2 transition hover:bg-white/10"
      >
        <HiMagnifyingGlass size={24} />
      </button>

      {/* Login */}
      <button
        type="button"
        aria-label="Login"
        onClick={() => setLoginOpen(true)}
        className="rounded-xl p-2 transition hover:bg-white/10"
      >
        <HiArrowRightOnRectangle size={24} />
      </button>

      {/* Menu Sheet */}
      <TopSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="Menu"
      >
        <div className="flex flex-col gap-3">
          <div className="grid gap-2">
            {list.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSheetOpen(false)}
                  className={`
                    rounded-2xl border px-4 py-3 transition
                    ${
                      active
                        ? "border-white/20 bg-white/10 text-foreground"
                        : "border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 hover:text-foreground"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
            onClick={() => {
              setSheetOpen(false);
            }}
          >
            <HiBell size={20} className="text-primary" />
            <span className="text-foreground">Notifications</span>
          </button>
        </div>
      </TopSheet>

      {/* Search Sheet */}
      <TopSheet
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        title="Search"
      >
        <Input
          autoFocus
          icon={<HiMagnifyingGlass size={22} />}
          placeholder="Type here..."
          className="w-full"
        />
      </TopSheet>

      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} title="Login">
        <Login />
      </Modal>
    </div>
  );
}
