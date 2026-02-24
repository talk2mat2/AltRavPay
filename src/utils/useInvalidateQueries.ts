import { useQueryClient, type QueryKey } from '@tanstack/react-query';

export function useInvalidateQueries() {
  const queryClient = useQueryClient();

  return (keys: QueryKey[]) => {
    keys.forEach((key) => {
      queryClient.invalidateQueries({ queryKey: key });
    });
  };
}
