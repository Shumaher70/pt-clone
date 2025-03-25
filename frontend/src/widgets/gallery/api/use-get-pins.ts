import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

interface IGetPins {
  pageParam: number;
}

const getPins = async ({ pageParam }: IGetPins) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data as typeof response.data;
    }
  } catch (error) {
    console.error('Error fetching pins:', error);
  }
};

export const useGetPins = () => {
  return useInfiniteQuery({
    queryKey: ['pins'],
    queryFn: getPins,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
