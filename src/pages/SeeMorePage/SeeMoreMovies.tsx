import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMoviesByCategory } from "../../service/tmdb";

type SeeMoreMoviesProp = {
  category: string | null;
  catergoryObj: Record<string , string[]>
};


function SeeMoreMovies({ category, catergoryObj }: SeeMoreMoviesProp) {
  const [seeMoreMovies, setSeeMoreMovies] = useState<any>(null);

  useEffect(() => {
    const fetchCategoryMovies = async () => {
      if (category) {
        const res = await fetchMoviesByCategory(
          catergoryObj[category][0]
        );
        setSeeMoreMovies(res);
      }
    };

    fetchCategoryMovies();
  }, [category, catergoryObj]);

  return seeMoreMovies?.results.map((seeMoreMovie: any) => {
    return (
      <div 
      className="aspect-2/3 relative group/see-more cursor-pointer"
      key={crypto.randomUUID()}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${seeMoreMovie.poster_path}`}
          className="w-full h-full aspect-4/3 object-cover rounded-md"
        />
        <div className="absolute inset-0 items-end transition-all duration-400 ease-in-out bg-linear-to-b from-60% from-black/20 to-80% to-black/80 flex opacity-0 group-hover/see-more:opacity-100 ">
          <div className="flex items-center gap-3 pb-5 pl-5 cursor-pointer">
            <div className="text-white text-sm font-semibold">See More</div>
            <div className="text-white">
              <MoveRight size={15} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default SeeMoreMovies;
