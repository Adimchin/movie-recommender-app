import { fetchKeywords } from "../../../service/tmdb";
import { fetchMovieCrew_CastData } from "../../../service/tmdb";
import { useEffect, useState } from "react";
import SideDetails from "./SideDetails";
import OverView from "./Overview";
import Casts from "./Casts";
import MoreMovies from "./MoreMovies";

type MovieDetailsProp = {
  movie: any;
};

function MovieDetails({ movie }: MovieDetailsProp) {
  const [keywords, setKeywords] = useState<any>(null);
  const [crew_castData, setCrew_castData] = useState<any>(null);

  useEffect(() => {
    console.log(movie);
    if (!movie) return;
    const fetchDatas = async () => {
      const [keywords, crew_castData] = await Promise.all([
        fetchKeywords(movie?.id),
        fetchMovieCrew_CastData(movie?.id),
      ]);
      setKeywords(keywords);
      setCrew_castData(crew_castData);
    };
    fetchDatas();
  }, [movie]);

  const filteredCrew_castData = crew_castData?.crew.filter(
    (crew: any, index: number) => {
      return index <= 6;
    },
  );

  console.log(filteredCrew_castData);

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
       {/**side details */}
        <SideDetails 
        movie={movie}
        keywords={keywords}
        />
        </div>
        <div>
          {/*Overview */}
          <OverView 
          movie={movie}
          crew_castData={crew_castData}
          />
          {/**Casts */}
          <Casts 
          filteredCrew_castData={filteredCrew_castData}
          />
          <div className="border border-slate-800/20 mt-12"></div>
          <div className="text-white text-2xl font-bold space-y-6 mt-13 mb-10">
            <div>More Movies</div>
            {/**More Movies */}
            <MoreMovies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
