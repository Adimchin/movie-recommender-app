import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../service/tmdb";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import MovieDetails from "./MovieDetails";
import { useSearchParams } from "react-router";

function MovieDetailsPage() {
  const [movie, setMovie] = useState<any>(null);

  const [searchParam] = useSearchParams();

  const movieId = searchParam.get("movieId");

  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetchMovieDetails(movieId);
      setMovie(res);
    };

    getMovieData();
  }, [movieId]);

  return (
    <div className="bg-slate-950">
      {/*Header*/}
      <Header />

      {/*Hero Section*/}
      <HeroSection movie={movie} />

      {/*MovieDetails*/}
      <MovieDetails movie={movie} />

      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default MovieDetailsPage;
