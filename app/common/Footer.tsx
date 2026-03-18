// "use client";

// import React from "react";
// import { FooterContent } from "@/data/Index";
// import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
// import { BsTwitterX } from "react-icons/bs";

// const Footer = () => {
//   const content = FooterContent;

//   return (
//     <footer className="relative mt-32 flex flex-col gap-6  p-2 text-foreground">
//       {/* Top */}
//       <div>
//         {/* Top subtle gradient line */}
//         <div
//           className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent
//       mb-4 "
//         />
//         <div className="flex flex-col gap-6">
//           <div className="flex items-center gap-14 w-full">
//             <h1 className="text-3xl">{content.brand.name}</h1>
//             <div className="flex items-center gap-5 text-muted">
//               <span className="w-0.5 h-5 bg-muted" />
//               <p>{content.brand.tagline}</p>
//             </div>
//           </div>
//           <p className="text-muted">{content.description}</p>
//           <div className="flex items-center gap-3">
//             {content.SocialLinks.map((social) => {
//               const Icon = social.icon;

//               return (
//                 <a
//                   key={social.id}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center overflow-hidden rounded-xl bg-neutral-800 text-white transition-all duration-1000 hover:scale-105"
//                   style={{}}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.backgroundColor = social.color)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.backgroundColor = "")
//                   }
//                 >
//                   {/* Icon container (fixed square) */}
//                   <div className="flex h-10 w-10 items-center justify-center">
//                     <Icon size={18} />
//                   </div>

//                   {/* Hidden label */}
//                   <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-4">
//                     {social.label}
//                   </span>
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* bottom */}
//       <div>
//         {/* Top subtle gradient line */}
//         <div
//           className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent
//       mb-4 "
//         />
//         <div className="flex items-center justify-between">
//           {content.sections.map((section, i) => (
//             <div className="" key={i}>
//               <h3 className="text-2xl mb-4">{section.title}</h3>
//               <div className="text-sm text-muted flex flex-col gap-4">
//                 {section.links.map((link, k) => (
//                   <a
//                     href={link.href}
//                     key={k}
//                     className="hover:text-foreground hover:-translate-y-0.5 cursor-pointer  transition-all duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* copyright */}
//       <div className="mt-10 border-t border-white/10 pt-6">
//         <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted md:flex-row">
//           <span>© 2026 {content.brand.name}. All rights reserved.</span>

//           <span>
//             PlayVibe is a product of{" "}
//             <span className="text-foreground">{content.brand.name}</span>.
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import { FooterContent } from "@/data/Index";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const content = FooterContent;

  return (
    <footer className="relative mt-32 flex flex-col gap-6 p-2 text-foreground">
      {/* Top */}
      <div>
        {/* Top subtle gradient line */}
        <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="flex flex-col gap-6">
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8 lg:gap-14">
            <h1 className="text-3xl">{content.brand.name}</h1>

            <div className="flex flex-wrap items-center gap-3 text-muted sm:gap-5">
              <span className="hidden h-5 w-0.5 bg-muted sm:block" />
              <p>{content.brand.tagline}</p>
            </div>
          </div>

          <p className="text-muted">{content.description}</p>

          <div className="flex flex-wrap items-center gap-3">
            {content.SocialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center overflow-hidden rounded-xl bg-neutral-800 text-white transition-all duration-1000 hover:scale-105"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = social.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "")
                  }
                >
                  {/* Icon container (fixed square) */}
                  <div className="flex h-10 w-10 items-center justify-center">
                    <Icon size={18} />
                  </div>

                  {/* Hidden label */}
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-4">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div>
        {/* Top subtle gradient line */}
        <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h3 className="mb-4 text-2xl">{section.title}</h3>
              <div className="flex flex-col gap-4 text-sm text-muted">
                {section.links.map((link, k) => (
                  <a
                    href={link.href}
                    key={k}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* copyright */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-muted md:flex-row md:text-left">
          <span>© 2026 {content.brand.name}. All rights reserved.</span>

          <span>
            PlayVibe is a product of{" "}
            <span className="text-foreground">{content.brand.name}</span>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
