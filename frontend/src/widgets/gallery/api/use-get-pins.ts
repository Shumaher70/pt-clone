import axios from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { IPin } from '../../../components/types';

const getPins = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/pins`
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data as typeof response.data;
    }
  } catch (error) {
    console.error('Error fetching pins:', error);
  }
};

export const useGetPins = (): UseQueryResult<IPin[], Error> => {
  return useQuery<IPin[], Error>({
    queryKey: ['pins'],
    queryFn: getPins,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
