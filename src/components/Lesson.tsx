import type { LessonType } from "./Sidebar";

import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

export function Lesson({ availableAt, slug, title, type }: Props) {
	const isLessonAvailable = isPast(availableAt);
	const availableDateFormat = format(
		availableAt,
		"EEEE' • 'd' de 'MMMM' • 'k':'mm'h'",
		{ locale: ptBr }
	);

	return (
		<Link to={`/event/lesson/${slug}`} className="group">
			<span className="text-gray-300">{availableDateFormat}</span>
			{/* <span className="text-gray-300">Terça • 22 de junho • 19:00h</span> */}

			<div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
							<Lock size={20} />
							Em breve
						</span>
					)}

					<span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
						{type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
					</span>
				</header>

				<strong className="text-gray-2 mt-5 block">{title}</strong>
			</div>
		</Link>
	);
}

type Props = {
	availableAt: Date;
	type: LessonType;
	title: string;
	slug: string;
};
