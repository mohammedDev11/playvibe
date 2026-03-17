// "use client";

// import { MAIN_ITEMS } from "@/data/Index";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { HiPlay } from "react-icons/hi2";

// export default function LeftNavbar() {
//   const pathname = usePathname();

//   const isActive = (href: string) => {
//     if (href === "/") return pathname === "/";
//     return pathname.startsWith(href);
//   };

//   return (
//     <>
//       {/* ✅ Desktop / md+ sidebar */}
//       <aside
//         className="
//           hidden md:block
//           group sticky top-0 h-screen
//           w-[96px] lg:w-[105px] md:hover:w-[260px]
//           overflow-hidden
//           border-r border-white/10
//           bg-neutral-950
//           px-4 py-6
//           transition-all duration-300 ease-in-out
//         "
//       >
//         <div className="flex h-full flex-col">
//           {/* Logo */}
//           <Link href="/" className="mb-8 flex items-center gap-3 px-2">
//             <div
//               className="
//                 shrink-0 flex h-12 w-12 items-center justify-center
//                 rounded-2xl
//                 bg-gradient-to-br from-primary-light to-primary
//                 shadow-lg
//               "
//             >
//               <HiPlay size={20} className="text-foreground" />
//             </div>

//             <span
//               className="
//                 whitespace-nowrap text-xl font-semibold
//                 opacity-0 group-hover:opacity-100
//                 transition-opacity duration-300
//                 text-foreground
//               "
//             >
//               Play<span className="text-primary">Vibe</span>
//             </span>
//           </Link>

//           {/* Navigation */}
//           <div className="flex-1 overflow-y-auto pr-1">
//             <nav className="space-y-3">
//               {MAIN_ITEMS.map((item) => {
//                 const active = isActive(item.href);
//                 const Icon = item.icon;

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`
//                       flex items-center gap-4 rounded-2xl px-3 py-3 text-sm transition
//                       ${
//                         active
//                           ? "group-hover:bg-white/10 text-foreground"
//                           : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
//                       }
//                     `}
//                   >
//                     <div
//                       className={`
//                         shrink-0 flex-none
//                         h-11 w-11 min-h-11 min-w-11
//                         grid place-items-center rounded-2xl
//                         transition
//                         ${
//                           active
//                             ? "bg-foreground text-primary"
//                             : "bg-white/5 text-foreground/70 group-hover:text-primary"
//                         }
//                       `}
//                     >
//                       <Icon size={20} />
//                     </div>

//                     <span
//                       className="
//                         whitespace-nowrap text-lg
//                         opacity-0 group-hover:opacity-100
//                         transition-opacity duration-200
//                       "
//                     >
//                       {item.label}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         </div>
//       </aside>

//       {/* ✅ Mobile bottom navbar */}
//       <nav
//         className="
//           md:hidden
//           fixed bottom-0 left-0 right-0 z-40
//           border-t border-white/10
//           bg-neutral-950/90 backdrop-blur-xl
//           px-3 py-2
//         "
//       >
//         <div className="mx-auto flex max-w-[520px] items-center justify-between gap-2">
//           {MAIN_ITEMS.slice(0, 5).map((item) => {
//             const active = isActive(item.href);
//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`
//                   flex flex-1 items-center justify-center
//                   rounded-2xl py-3 transition
//                   ${active ? "bg-white/10" : "hover:bg-white/5"}
//                 `}
//                 aria-label={item.label}
//               >
//                 <Icon size={22} className={active ? "text-primary" : ""} />
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";

import { MAIN_ITEMS } from "@/data/Index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiPlay } from "react-icons/hi2";

export default function LeftNavbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop / md+ sidebar */}
      <aside
        className="
          hidden md:block
          group
          sticky top-0 h-screen shrink-0
          w-[96px] lg:w-[105px] hover:w-[260px]
          overflow-hidden
          border-r border-white/10
          bg-neutral-950
          px-4 py-6
          transition-[width] duration-300 ease-in-out
        "
      >
        <div className="flex h-full flex-col">
          {/* Logo */}

          <Link href="/" className="mb-8 flex items-center gap-3 px-2 group">
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

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto pr-1">
            <nav className="space-y-3">
              {MAIN_ITEMS.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-4 rounded-2xl px-3 py-3 text-sm transition
                      ${
                        active
                          ? "text-foreground bg-white/10"
                          : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                      }
                    `}
                  >
                    <div
                      className={`
                        grid h-11 w-11 min-h-11 min-w-11 shrink-0 place-items-center rounded-2xl transition
                        ${
                          active
                            ? "bg-foreground text-primary"
                            : "bg-white/5 text-foreground/70 group-hover:text-primary"
                        }
                      `}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      className="
                        whitespace-nowrap text-lg
                        opacity-0 transition-opacity duration-200 group-hover:opacity-100
                      "
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* Mobile bottom navbar */}
      <nav
        className="
          md:hidden
          fixed bottom-0 left-0 right-0 z-40
          border-t border-white/10
          bg-neutral-950/90
          px-3 py-2
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex max-w-[520px] items-center justify-between gap-2">
          {MAIN_ITEMS.slice(0, 5).map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-1 items-center justify-center rounded-2xl py-3 transition
                  ${active ? "bg-white/10" : "hover:bg-white/5"}
                `}
                aria-label={item.label}
              >
                <Icon size={22} className={active ? "text-primary" : ""} />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
