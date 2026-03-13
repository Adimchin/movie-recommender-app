import { useEffect, useState } from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import { fetchPopularMovies, fetchPopularTvSeries, fetchActionMovies } from "./service/tmdb";
import HomePage from "./pages/HomePage/HomePage";
import PopularMovies from "./pages/HomePage/Movies/Popular movies/PopularMovies"; 
import TvSeries from "./pages/HomePage/Movies/TvSeries/TvSeries";
import ActionMovies from "./pages/HomePage/Movies/ActionMovies/ActionMovies";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import SeeMorePage from "./pages/SeeMorePage/SeeMorePage";
function App() {
  const [popular_TvSeries, setPopular_TvSeries] = useState<any>(null);
  const [OnAir_TvSeries, setOnairTvSeries] = useState<any>(null);
  const [actionMovies, setActionMovies] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popular, onAir, action] = await Promise.all([
          fetchPopularMovies(),
          fetchPopularTvSeries(),
          fetchActionMovies(),
        ]);

        setPopular_TvSeries(popular);
        setOnairTvSeries(onAir);

        const actionMoviesFiltered = action.results.filter((movie: any) =>
          movie.genre_ids.some((genreId: number) => genreId === 18)
        );
        setActionMovies(actionMoviesFiltered);
      } catch (err) {
        console.log(err instanceof Error ? 'err' : "Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            popular_TvSeries={popular_TvSeries}
            OnAir_TvSeries={OnAir_TvSeries}
            actionMovies={actionMovies}
          />
        }
      />
      <Route path="/popular-movies" element={<PopularMovies popular_TvSeries={popular_TvSeries} />} />
      <Route path="/tv-series" element={<TvSeries OnAir_TvSeries={OnAir_TvSeries} />} />
      <Route path="/action-movies" element={<ActionMovies actionMovies={actionMovies} />} />
      <Route path="/movie-details" element={<MovieDetailsPage />} />
      <Route path="/see-more" element={<SeeMorePage />} />

    </Routes>
  );
}

export default App;
