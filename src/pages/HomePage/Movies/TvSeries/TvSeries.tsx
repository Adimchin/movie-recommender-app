import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import TvSeriesImgs from "./TvSeriesImgs";

function TvSeries({ OnAir_TvSeries }: { OnAir_TvSeries: any }) {
  const [currentMargin, setCurrentMargin] = useState<number>(0);

  const handleLeftScroll = () => {
    if (currentMargin < 100) {
      setCurrentMargin((prev) => prev + 50);
    }
  };

  const handleRightScroll = () => {
    if (currentMargin > 0) {
      setCurrentMargin((prev) => prev - 50);
    }
  };

  return (
    <section className="mt-7 p-5 md:pl-13 relative group/slide-arrows group/see-more">
      <div className="flex">
        <div className="text-white font-bold text-lg mb-3 grow md:text-2xl">
          Tv Series
        </div>
        <div className="text-white/50 cursor-pointer flex gap-1 items-center relative z-1 transition-all duration-300 ease-in-out opacity-0 -translate-x-10 group-hover/see-more:opacity-100 group-hover/see-more:translate-0">
          <Link to={"/see-more?category=tv-series"} className="flex gap-1">
            <div className="text-sm font-semibold">SEE MORE</div>
            <ArrowRight size={17} strokeWidth={2} />
          </Link>
        </div>
      </div>
      <div
        className={`overflow-x-scroll overflow-y-visible py-5 flex gap-18`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="flex gap-4 transition-all duration-1000"
          style={{ marginLeft: `-${currentMargin}%` }}
        >
          <TvSeriesImgs
            OnAir_TvSeries={OnAir_TvSeries}
            currentMargin={currentMargin}
            handleLeftScroll={handleLeftScroll}
            handleRightScroll={handleRightScroll}
          />
        </div>
      </div>

      <div className="hidden md:block">
        <div
          className={`absolute top-8 bottom-0 right-9 hidden items-center ${currentMargin < 100 && "group-hover/slide-arrows:flex"}`}
        >
          <button
            className={`bg-black/55 text-white p-5 rounded-full focus:outline-none hover:bg-black/70`}
            onClick={handleLeftScroll}
          >
            <ChevronRight size={22} />
          </button>
        </div>
        <div
          className={`absolute top-8 bottom-0 left-15 hidden items-center ${currentMargin > 0 && "group-hover/slide-arrows:flex"}`}
        >
          <button
            className={`bg-black/55 text-white p-5 rounded-full focus:outline-none hover:bg-black/70`}
            onClick={handleRightScroll}
          >
            <ChevronLeft size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TvSeries;
