import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchRandomImg = () => {
  return api.get(`/random`);
};

export const useRandomImgQuery = () => {
  return useQuery({
    queryKey: ["randomImg"],
    queryFn: fetchRandomImg,
    select: (data) => data.data.urls,
  });
};
