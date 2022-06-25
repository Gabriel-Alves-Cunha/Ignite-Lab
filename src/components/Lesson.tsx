import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { isPast, format } from "date-fns";
import classnames from "classnames";
import ptBr from "date-fns/locale/pt-BR";

export function Lesson({ availableAt, slug, title, type }: Props) {
	const { slug: urlSlug } = useParams<{ slug: string }>();
	const isActiveLesson = urlSlug === slug;

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

			<div
				className={classnames(
					"rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
					{
						"bg-green-500": isActiveLesson,
					}
				)}
			>
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span
							className={classnames(
								"flex items-center gap-2 text-sm font-medium",
								{
									"text-blue-500 ": !isActiveLesson,
									"text-white": isActiveLesson,
								}
							)}
						>
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
							<Lock size={20} />
							Em breve
						</span>
					)}

					<span
						className={classnames(
							"text-xs rounded px-2 py-[0.125rem] text-white border font-bold",
							{
								"border-green-300": !isActiveLesson,
								"border-white": isActiveLesson,
							}
						)}
					>
						{type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
					</span>
				</header>

				<strong
					className={classnames(" mt-5 block", {
						"text-gray-200": !isActiveLesson,
						"text-white": isActiveLesson,
					})}
				>
					{title}
				</strong>
			</div>
		</Link>
	);
}

type Props = {
	type: "live" | "class";
	availableAt: Date;
	title: string;
	slug: string;
};
