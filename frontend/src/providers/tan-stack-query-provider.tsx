import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ITanStackQueryProviderProps {
  children: React.ReactNode;
}
export const TanStackQueryProvider = ({
  children,
}: ITanStackQueryProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
