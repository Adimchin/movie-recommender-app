import { useToPath } from "../../../../custom-hooks/navigations";
import { MoveRight } from "lucide-react";

type ActionMoviesImgs = {
  actionMovies: [];
  currentMargin: number;
};

function ActionMoviesImgs({
  actionMovies,
  currentMargin,
}: ActionMoviesImgs) {

  const handleMovieClick= useToPath();
  
  const mainActionMovies = actionMovies?.filter((actionMovie:any , index: number) => {
    if(index === 6) return false;
    if(index <= 7) return true;
  });


  return (
    <div
      className="flex gap-4 transition-all duration-1000"
      style={{ marginLeft: `-${currentMargin}%` }}
    >
      {mainActionMovies?.map((actionMovie: any) => {

        return (
          <div 
          className="w-45 h-60 shrink-0 relative group transition-transform duration-500 ease-in-out hover:scale-105 md:h-70 md:w-55"
          key={crypto.randomUUID()}
          onClick={() => {
            handleMovieClick(actionMovie.id)
          }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${actionMovie.poster_path}`}
              className="w-full h-full rounded object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-60% from-black/20 to-80% to-black/80 items-end transition-all duration-500 ease-in-out flex opacity-0 group-hover:opacity-100">
              <div className="flex items-center gap-3 pb-5 pl-5 cursor-pointer">
                <div className="text-white text-sm font-semibold">See More</div>
                <div className="text-white">
                  <MoveRight size={15} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActionMoviesImgs;
