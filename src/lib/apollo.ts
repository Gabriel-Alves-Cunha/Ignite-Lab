import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api-sa-east-1.graphcms.com/v2/cl4o405y80ddd01xrgqta4369/master",
	cache: new InMemoryCache(),
})
