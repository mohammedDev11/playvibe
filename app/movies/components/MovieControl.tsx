import { MOVIE_FILTERS } from "@/data/Movies";
import DropDown from "../../common/DropDown";

const MovieControl = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      {MOVIE_FILTERS.map(({ id, label, options }) => (
        <DropDown key={id} label={label} list={options} />
      ))}
    </div>
  );
};

export default MovieControl;
