import { MoveRight } from "lucide-react";
function MoreMovies() {
  return (
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
              <div className="text-white text-sm font-semibold">See More</div>
              <div className="text-white">
                <MoveRight size={15} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreMovies;
