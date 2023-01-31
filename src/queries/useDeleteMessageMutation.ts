import { useMutation } from '@tanstack/react-query';
import { deleteMessage } from '../services/deleteMessage';

export const useDeleteMessageMutation = () => {
  // Queries
  return useMutation({
    mutationFn: deleteMessage,
  });
};
