import { useQuery } from '@tanstack/react-query';
import { getMessage } from '../services/getMessage';

export const useGetMessageQuery = (id: string) => {
  // Queries
  return useQuery({
    queryKey: [id],
    queryFn: () => getMessage(id),
    refetchOnWindowFocus: false,
  });
};
