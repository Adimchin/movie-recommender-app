import { tmdbApi } from "../api/tmdbApi";

// Auth headers configuration
const getHeaders = () => ({
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkYjM2OGUwM2ZlYTM0Njk1YTQxMWU0NzA5OWM0YyIsIm5iZiI6MTc3MTYyNTMwMy4wNTYsInN1YiI6IjY5OThkYjU3ZmRhMGUwMmQ5MjMwMmIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gw1JSu0um9o3T-FVkM9o_tLGtxCcl8PGiqwYCX8I7O8",
});

/**
 * Fetch popular movies
 */
export const fetchPopularMovies = async () => {
  const response = await tmdbApi.get(
    "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc",
    { headers: getHeaders() },
  );
  return response.data;
};

/**
 * Fetch popular TV series
 */
export const fetchPopularTvSeries = async () => {
  const response = await tmdbApi.get(
    "/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
    { headers: getHeaders() },
  );
  return response.data;
};

/**
 * Fetch action movies
 */
export const fetchActionMovies = async () => {
  const response = await tmdbApi.get(
    "/discover/movie?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
    { headers: getHeaders() },
  );
  return response.data;
};

/**
 * Fetch movie details by ID
 */
export const fetchMovieDetails = async (movieId: string | null) => {
  if (!movieId) throw new Error("Movie ID is required");

  const response = await tmdbApi.get(`/movie/${movieId}`, {
    headers: getHeaders(),
  });
  return response.data;
};

/**
 * Fetch genre list for movies
 */
export const fetchMovieGenres = async () => {
  const response = await tmdbApi.get(`/genre/movie/list`, {
    headers: getHeaders(),
  });
  return response.data;
};

/**
 * Fetch movies by category URL
 */
export const fetchMoviesByCategory = async (categoryUrl: string) => {
  const response = await tmdbApi.get(categoryUrl, {
    headers: getHeaders(),
  });
  return response.data;
};

/**
 *
 * Fetch movie keywords
 */

export const fetchKeywords = async (movieId: number) => {
  const res = await tmdbApi.get(`/movie/${movieId}/keywords` , {
    headers: getHeaders()
  });

  return res.data;
};
