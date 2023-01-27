import { useMutation } from '@tanstack/react-query';
import { postMessage } from '../services/postMessage';
import { TCreateMessage } from '../interfaces';

export const useCreateMessageMutation = () => {
  // Queries
  return useMutation({
    mutationFn: (message: TCreateMessage) => postMessage(message),
  });
};
