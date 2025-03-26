import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

interface IGetPins {
  pageParam: number;
  search: string | null;
}

const getPins = async ({ pageParam, search }: IGetPins) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_ENDPOINT
      }/pins?cursor=${pageParam}&search=${search}`
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data as typeof response.data;
    }
  } catch (error) {
    console.error('Error fetching pins:', error);
  }
};

export const useGetPins = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search');

  return useInfiniteQuery({
    queryKey: ['pins', search],
    queryFn: ({ pageParam = 0 }) => getPins({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
