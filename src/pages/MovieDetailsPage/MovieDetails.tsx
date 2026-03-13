import { MoveRight } from "lucide-react";
import { fetchKeywords } from "../../service/tmdb";
import { useEffect, useState } from "react";

type MovieDetailsProp = {
  movie: any;
};

function MovieDetails({ movie }: MovieDetailsProp) {
  const [keywords, setKeywords] = useState<any>(null);

  useEffect(() => {
    console.log(movie);
    if (!movie) return;
    const getKeywords = async () => {
      const keywords = await fetchKeywords(movie?.id);
      setKeywords(keywords);
    };
    getKeywords();
  }, [movie]);

  console.log(keywords);

  return (
    <div className="mt-8 mx-5 md:flex md:flex-col md:items-center">
      <div className="md:max-w-185 lg:max-w-300 lg:grid lg:grid-cols-[0.3fr_1fr] lg:gap-6">
        <div className="space-y-5 mb-10">
          <div className="flex flex-col sm:items-center">
            <div className="aspect-4/5 sm:w-[70%] md:w-[50%] lg:w-full">
              <img
                src={`https://image.tmdb.org/t/p/w500//${movie?.poster_path}}.jpg`}
                alt="Movie Image"
                className="h-full w-full object-cover lg:rounded"
              />
            </div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800/60 rounded p-5 space-y-5">
            <div className="flex flex-col gap-1 text-white">
              <span className="text-slate-600 text-[14px] font-bold tracking-wide">
                STATUS
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {movie?.status}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white text-[14px]">
              <span className="text-slate-600 font-bold tracking-wide">
                ORIGINAL LANGUAGE
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {movie?.original_language}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white text-[14px]">
              <span className="text-slate-600 font-bold tracking-wide">
                BUDGET
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {`${movie?.budget}$`}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white text-[14px]">
              <span className="text-slate-600 font-bold tracking-wide">
                REVENUE
              </span>
              <span className="tracking-wide font-semibold text-[17px]">
                {`${movie?.revenue}$`}
              </span>
            </div>
            <div className="border-slate-800/30 border-[0.1px] mx-1"></div>
            <div className="space-y-4 text-white text-[14px]">
              <div>
                <span className="text-slate-600 font-bold tracking-wide">
                  KEYWORDS
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {/*loop keywords*/}
                {keywords?.keywords.map((keyword: any) => {
                  return (
                    <span 
                    className="tracking-wide font-semibold text-sm text-slate-400 bg-slate-800/70 border-slate-800/30 border-[0.1px] px-3 py-1 rounded-full shrink-0"
                    key={crypto.randomUUID()}
                    >
                      {keyword.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="text-white text-2xl font-bold">Overview</div>
            <div className="text-slate-400 text-lg tracking-wide font-semibold italic ">
              {movie?.tagline ? `"${movie?.tagline}"` : ""}
            </div>
            <div className="text-lg text-slate-300 font-semibold mb-10">
              {movie?.overview}
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/*loop producers*/}
              <div className="grow flex flex-col gap-1">
                <span className="text-white font-semibold text-lg">James</span>
                <span className="text-slate-500 text-[16px]">Director</span>
              </div>
              <div className="grow flex flex-col gap-1">
                <span className="text-white font-semibold text-lg">James</span>
                <span className="text-slate-500 text-[16px]">Director</span>
              </div>
              <div className="grow flex flex-col gap-1">
                <span className="text-white font-semibold text-lg">James</span>
                <span className="text-slate-500 text-[16px]">Director</span>
              </div>
            </div>
          </div>
          <div className="text-white text-2xl font-bold space-y-6 mt-15">
            <div>Top Billed Casts</div>
            <div
              className="overflow-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/*loop casts*/}
              <div className="flex gap-3 w-min">
                <div className="flexshrink-0 space-y-5">
                  <div className="w-40 h-40">
                    <img
                      src="https://image.tmdb.org/t/p/w500//buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg"
                      alt="cast"
                      className="w-full h-full object-cover object-center rounded-full border-2 border-slate-400/40"
                    />
                  </div>
                  <div className="font-semibold text-lg text-center">
                    <div>Johnathan</div>
                    <div className="text-sm text-slate-500/50">John Doe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-slate-800/20 mt-12"></div>
          <div className="text-white text-2xl font-bold space-y-6 mt-13 mb-10">
            <div>Recommended Movies</div>
            <div
              className="overflow-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/*loop movies*/}
              <div className="flex gap-3">
                <div className="w-45 h-60 shrink-0 group relative sm:w-55 sm:h-70 md:w-65 md:h-80">
                  <img
                    src="https://image.tmdb.org/t/p/w500//buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg"
                    alt=""
                    className="rounded  w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-60% from-black/20 to-80% to-black/80 items-end transition-all duration-500 ease-in-out flex opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-3 pb-5 pl-5 cursor-pointer">
                      <div className="text-white text-sm font-semibold">
                        See More
                      </div>
                      <div className="text-white">
                        <MoveRight size={15} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
