// import React from "react";
// import Input from "./Input";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import TopRightButtons from "./TopRightButtons";

// const ControlGroup = () => {
//   return (
//     <div className="hidden md:flex items-center justify-between gap-4">
//       <Input
//         icon={<HiMagnifyingGlass size={22} />}
//         placeholder="Type here..."
//       />
//       <TopRightButtons />
//     </div>
//   );
// };

// export default ControlGroup;

import React from "react";
import Input from "./Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import TopRightButtons from "./TopRightButtons";

const ControlGroup = () => {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <Input
        icon={<HiMagnifyingGlass size={22} />}
        placeholder="Type here..."
      />
      <TopRightButtons />
    </div>
  );
};

export default ControlGroup;
