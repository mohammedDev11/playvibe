// import { MOVIE_FILTERS } from "@/data/Movies";
// import DropDown from "../../common/DropDown";

// const MovieControl = () => {
//   return (
//     <div className="flex items-center justify-center gap-3">
//       {MOVIE_FILTERS.map(({ id, label, options }) => (
//         <DropDown key={id} label={label} list={options} />
//       ))}
//     </div>
//   );
// };

// export default MovieControl;

import { MOVIE_FILTERS } from "@/data/Movies";
import DropDown from "../../common/DropDown";

const MovieControl = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {MOVIE_FILTERS.map(({ id, label, options }) => (
        <div key={id} className="max-w-full">
          <DropDown label={label} list={options} />
        </div>
      ))}
    </div>
  );
};

export default MovieControl;
