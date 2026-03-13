import { Star, Play, BookmarkPlus, Share2 } from "lucide-react";

type HeroSectionProp = {
  movie: any
}

function HeroSection({movie}: HeroSectionProp) {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original//${movie?.backdrop_path}.jpg)`,
      }}
      className="h-screen bg-no-repeat bg-cover bg-center"
    >
      <div className="pb-10 bg-linear-to-b from-transparent via-slate-950/30 to-slate-950 h-full flex items-end">
        <div className="pl-8 space-y-7">
          <div className="flex gap-5 text-sm">
            <button className="text-blue-700 font-semibold bg-blue-900/50 border border-blue-700/60 rounded px-4 py-1">
              {movie?.genres.map((genre: any , index:number) => {
                if(index < movie?.genres.length - 1){
                  return `${genre.name} | `
                } else{
                  return genre.name
                }
              })}
            </button>
            <button className="text-amber-400/80 font-semibold bg-amber-400/20 border border-amber-400/60 rounded px-4 py-1 flex gap-1 items-center">
              <Star size={13} strokeWidth={3} />
              <span>
                {movie && `${movie?.vote_average.toFixed(1)}/10`}
              </span>
            </button>
          </div>
          <div className="space-y-5">
            <div className="text-white font-bold text-5xl tracking-tight sm:text-7xl md:text-8xl">
              {movie?.title}
            </div>
            <div className="space-x-4 font-semibold text-white/60">
              <span>2014</span>
              <span>2h 14m</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap items-center">
            <button className="px-5 py-3 bg-blue-700 text-white font-semibold text-lg rounded flex items-center gap-2">
              <Play size={17} strokeWidth={3} />
              <span>Play Trailer</span>
            </button>
            <button className="px-5 py-3 bg-gray-800/70 text-white font-semibold text-lg rounded flex items-center gap-2">
              <BookmarkPlus size={23} strokeWidth={2} />
              <span>Watch List</span>
            </button>
             <button className="px-4 py-4 bg-gray-800/70 text-white font-semibold text-lg rounded">
              <Share2 
              size={17}
              strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
