import { useNavigate } from "react-router";

export function useToPath(){
  const navigate = useNavigate();
  return (id: string) => {navigate(`/movie-details?movieId=${id}`)};
};