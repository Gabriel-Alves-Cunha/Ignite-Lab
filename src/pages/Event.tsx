import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { useParams } from "react-router-dom";

export function Event() {
	const { slug } = useParams<Params>();

	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<main className="flex flex-1">
				{slug ? <Video slug={slug} /> : <div className="flex-1" />}
				<Sidebar />
			</main>
		</div>
	);
}

type Params = {
	slug: string;
};
