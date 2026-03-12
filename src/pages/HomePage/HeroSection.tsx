import { Info, Play } from "lucide-react";

type HeroSectionProp = {
  popular_TvSeries: any;
};

function HeroSecion({ popular_TvSeries }: HeroSectionProp) {
  const heroSectionDetails = popular_TvSeries?.results[0];

  return (
    heroSectionDetails && (
      <section
        className={`space-y-3 bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${heroSectionDetails.backdrop_path})`,
        }}
      >
        <div className="bg-gray-900/60 p-7 pb-13 pt-18 inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent">
          <div className="text-white font-bold text-5xl mt-12 sm:text-7xl">
            {heroSectionDetails.title}
          </div>
          <div className="text-white/80 text-3xl mt-9 font-light sm:text-5xl">
            ODYSSEY
          </div>
          <div className="font-semibold mt-6 text-white/80 flex items-center gap-3.5 text-sm ">
            <div className="text-green-400">98% Match</div>
            <div>{heroSectionDetails.release_date}</div>
            <div className="border-[0.1px] border-white/50 px-2">
              4K Ultra HD
            </div>
            <div>2h 45M</div>
          </div>
          <div className="font-semibold text-[15px] text-white/90 mt-5 line-clamp-3 max-w-137.5 sm:text-[16px]">
            {heroSectionDetails.overview}
          </div>
          <div className="mt-14 flex items-center gap-3">
            <button className="text-black bg-white px-7 py-2 flex items-center gap-2 rounded cursor-pointer hover:bg-white/70">
              <Play size={17} strokeWidth={2} />
              <span className="font-semibold">Play</span>
            </button>
            <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded flex items-center gap-2 cursor-pointer hover:bg-gray-700">
              <Info size={18} strokeWidth={2} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default HeroSecion;
