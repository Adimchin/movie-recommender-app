import { useSearchParams } from "react-router";
import { TrendingUp } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SeeMoreMovies from "./SeeMoreMovies";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const categoryObj: Record<string, string[]> = {
  popular: [`https://api.themoviedb.org/3/movie/popular`, "Popular Movies"],
  "tv-series": [`https://api.themoviedb.org/3/discover/tv`, "Tv Series"],
  action: [
    "https://api.themoviedb.org/3/discover/movie?with_genres=28&page=2",
    "Action",
  ],
};

function SeeMorePage() {
  const [filterSelect , setFilterSelect] = useState('');

  const [searchParams , setSearchParam] = useSearchParams();

  const category = searchParams.get("category");

  const handleFilterChange = (e: any) => {
    setSearchParam({category: e.target.value});
    setFilterSelect(e.target.value);
  }

  return (
    <>
      <div className="bg-slate-950 text-2xl text-white pt-25 pb-10">
        {/*Header*/}
        <Header />

        {/*Category*/}
        <div className="mx-5 space-y-4 sm:mx-8">
          <div className="flex gap-3 items-center text-rose-500/90">
            <TrendingUp size={18} className="mt-1" />
            <span className="text-[15px] font-semibold tracking-wide">
              EXPLORING CATEGORIES
            </span>
          </div>
          <div className="font-bold text-4xl  text-transparent bg-clip-text bg-linear-to-r from-30% from-rose-500/90 to-70% to-yellow-500 sm:text-5xl">
            {categoryObj[category!][1]}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="text-[16px] text-gray-400 grow w-max">
              Discover movies handpicked for your entertainment
            </span>
            <div className="flex items-center rounded-full relative z-10 w-max">
              <select 
              className="text-white/80 text-sm font-semibold bg-white/8  pl-4 pr-15 py-3 rounded-full w-max appearance-none cursor-pointer focus:outline-0"
              value={filterSelect}
              onChange={handleFilterChange}
              >
                <option value="popular" className="text-black">
                  Popular
                </option>
                <option value="tv-series" className="text-black">
                  Tv Series
                </option>
                <option value="action" className="text-black">
                  Action
                </option>
              </select>
              <div className="absolute right-3 pointer-events-none">
              <ChevronDown 
              size={15}
              strokeWidth={3}
              />
              </div>
            </div>
          </div>

          {/*Movies*/}
          <div
            className="grid grid-cols-2 gap-3 mt-10 sm:grid-cols-3 lg:grid-cols-5"
            key={crypto.randomUUID()}
          >
            <SeeMoreMovies category={category} catergoryObj={categoryObj} />
          </div>
        </div>
      </div>

      {/*Footer*/}
      <Footer />
    </>
  );
}

export default SeeMorePage;