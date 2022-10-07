import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateSubscriberMutation } from "../graphql/generated";
import { client } from "../lib/apollo";
import { Logo } from "../components/Logo";

export function Subscribe() {
	const [createSubscriber, { loading }] = useCreateSubscriberMutation();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();

	async function handleSubscribe(e: FormEvent) {
		e.preventDefault();

		console.log("Creating with", { name, email, client });

		await createSubscriber({
			onError: err => console.error(err),
			onCompleted(data) {
				console.log({ data });
			},
			variables: {
				email,
				name,
			},
		});

		navigate("/event");
	}

	return (
		<div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
			<div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
				<div className="max-w-[640px]">
					<Logo />

					<h1 className="mt-8 text-[2.5rem] leading-tight">
						Construa uma{" "}
						<strong className="text-blue-500">aplicação completa</strong>, do
						zero, com
						<strong className="text-blue-500"> React</strong>
					</h1>

					<p className="mt-4 text-gray-200 leading-relaxed">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						nam illum distinctio ad laboriosam doloremque quia magni assumenda
						nesciunt commodi deserunt adipisci.
					</p>
				</div>

				<div className="p-8 bg-gray-700 border border-gray-500 rounded">
					<strong className="text-2xl mb-6 block">
						Inscreva-se gratuitamente
					</strong>

					<form
						className="flex flex-col gap-2 w-full"
						onSubmit={handleSubscribe}
					>
						<input
							className="bg-gray-900 rounded px-5 h-14"
							onChange={e => setName(e.target.value)}
							placeholder="Seu nome completo"
							type="text"
						/>

						<input
							className="bg-gray-900 rounded px-5 h-14"
							onChange={e => setEmail(e.target.value)}
							placeholder="Digite seu email"
							type="email"
						/>

						<button
							className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
							disabled={loading}
							type="submit"
						>
							Garantir minha vaga
						</button>
					</form>
				</div>
			</div>

			<img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
		</div>
	);
}
