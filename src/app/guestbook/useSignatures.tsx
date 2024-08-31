"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./guestActions";

export const useSignatures = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["result"],
    queryFn: () => fetchPosts(),
  });
  return { data, isLoading, error, refetch };
};