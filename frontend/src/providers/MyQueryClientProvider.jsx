import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

export default function MyQueryClientProvider({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
