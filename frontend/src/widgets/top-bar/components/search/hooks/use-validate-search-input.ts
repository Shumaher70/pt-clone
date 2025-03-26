import { z } from 'zod';

import { useNavigate } from 'react-router';

const searchSchema = z.object({
  search: z.string(),
});

export const useValidateSearchInput = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchQuery = (e.currentTarget.elements[0] as HTMLInputElement).value;

    const result = searchSchema.safeParse({ search: searchQuery });

    if (!result.success) {
      return;
    }

    navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
  };

  return {
    handleSubmit,
  };
};
