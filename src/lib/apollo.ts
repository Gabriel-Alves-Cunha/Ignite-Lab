import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
	},
	uri: import.meta.env.VITE_APP_URL,
	cache: new InMemoryCache(),
});
