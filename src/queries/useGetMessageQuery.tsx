import { useQuery } from '@tanstack/react-query';
import { getMessage } from '../services/getMessage';

type TGetMessageQuery = {
  id: string,
  onSuccess: () => void,
}

export const useGetMessageQuery = ({
  id, onSuccess
}: TGetMessageQuery) => {
  // Queries
  return useQuery({
    queryKey: [id],
    queryFn: () => getMessage(id),
    retry: 2,
    refetchOnWindowFocus: false,
    onSuccess
  });
};
