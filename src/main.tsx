import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { client } from "./lib/apollo";
import { App } from "./App";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</StrictMode>
);
