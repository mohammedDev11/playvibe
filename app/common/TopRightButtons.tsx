// "use client";
// import { useState } from "react";
// import { HiArrowRightOnRectangle, HiBell, HiCog6Tooth } from "react-icons/hi2";

// import Modal from "./Modal";
// import Login from "./Login";
// import Setting from "./Setting";
// import Notifications from "./Notifications";

// type ModalType = "login" | "settings" | "notifications" | null;

// const TopRightButtons = () => {
//   const [openModal, setOpenModal] = useState<ModalType>(null);

//   const close = () => setOpenModal(null);
//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         {/* Login */}
//         <button
//           type="button"
//           aria-label="Login"
//           onClick={() => setOpenModal("login")}
//           className="p-2 cursor-pointer hover:-translate-y-0.5 hover:scale-125 hover:text-primary transition-all duration-300"
//         >
//           <HiArrowRightOnRectangle size={22} />
//         </button>

//         {/* Setting */}
//         <button
//           type="button"
//           aria-label="Settings"
//           onClick={() => setOpenModal("settings")}
//           className="p-2 cursor-pointer hover:-translate-y-0.5 hover:scale-125 hover:text-primary transition-all duration-300"
//         >
//           <HiCog6Tooth size={22} />
//         </button>

//         {/* Notifications */}
//         <button
//           type="button"
//           aria-label="Messages"
//           onClick={() => setOpenModal("notifications")}
//           className="p-2 cursor-pointer hover:-translate-y-0.5 hover:scale-125 hover:text-primary transition-all duration-300"
//         >
//           <HiBell size={22} />
//         </button>
//       </div>
//       {/* Modal */}
//       <Modal
//         open={openModal !== null}
//         onClose={close}
//         title={
//           openModal === "login"
//             ? "Welcome to PlayVibe"
//             : openModal === "settings"
//             ? "Settings"
//             : openModal === "notifications"
//             ? "Notifications"
//             : undefined
//         }
//       >
//         {openModal === "login" && <Login />}
//         {openModal === "settings" && <Setting />}
//         {openModal === "notifications" && <Notifications />}
//       </Modal>
//     </div>
//   );
// };

// export default TopRightButtons;

"use client";

import { useState } from "react";
import { HiArrowRightOnRectangle, HiBell, HiCog6Tooth } from "react-icons/hi2";

import Modal from "./Modal";
import Login from "./Login";
import Setting from "./Setting";
import Notifications from "./Notifications";

type ModalType = "login" | "settings" | "notifications" | null;

const TopRightButtons = () => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const close = () => setOpenModal(null);

  return (
    <div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Login"
          onClick={() => setOpenModal("login")}
          className="cursor-pointer p-2 transition-all duration-300 hover:-translate-y-0.5 hover:scale-125 hover:text-primary"
        >
          <HiArrowRightOnRectangle size={22} />
        </button>

        <button
          type="button"
          aria-label="Settings"
          onClick={() => setOpenModal("settings")}
          className="cursor-pointer p-2 transition-all duration-300 hover:-translate-y-0.5 hover:scale-125 hover:text-primary"
        >
          <HiCog6Tooth size={22} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          onClick={() => setOpenModal("notifications")}
          className="cursor-pointer p-2 transition-all duration-300 hover:-translate-y-0.5 hover:scale-125 hover:text-primary"
        >
          <HiBell size={22} />
        </button>
      </div>

      <Modal
        open={openModal !== null}
        onClose={close}
        title={
          openModal === "login"
            ? "Welcome to PlayVibe"
            : openModal === "settings"
            ? "Settings"
            : openModal === "notifications"
            ? "Notifications"
            : undefined
        }
      >
        {openModal === "login" && <Login />}
        {openModal === "settings" && <Setting />}
        {openModal === "notifications" && <Notifications />}
      </Modal>
    </div>
  );
};

export default TopRightButtons;
