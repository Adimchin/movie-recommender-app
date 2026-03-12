import HeroSecion from "./HeroSection";
import PopularMovies from "./Movies/Popular movies/PopularMovies";
import TvSeries from "./Movies/TvSeries/TvSeries";
import ActionMovies from "./Movies/ActionMovies/ActionMovies";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type popular_TvSeriesProp = {
  popular_TvSeries: any;
  OnAir_TvSeries: any;
  actionMovies: [],
}

function HomePage({ popular_TvSeries, OnAir_TvSeries, actionMovies }: popular_TvSeriesProp) {
  return (
    <div className="bg-gray-950">
      {/*Header*/}
      <Header />

      {/*Hero Section*/}
      <HeroSecion
        popular_TvSeries={popular_TvSeries}
      />

      {/*Popular Movies*/}
      <PopularMovies popular_TvSeries={popular_TvSeries} />

      {/*Tv series*/}
      <TvSeries OnAir_TvSeries={OnAir_TvSeries} />

      {/*Action Movies*/}
      <ActionMovies actionMovies={actionMovies} />

      <Footer />
    </div>
  );
}

export default HomePage;
