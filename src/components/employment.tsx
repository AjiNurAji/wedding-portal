import { useParams } from "react-router-dom";
import prewed1 from "../assets/images/prewed1.jpg";
import React, { useEffect, useState } from "react";
import { MailOpen } from "lucide-react";

interface EmploymentProps {
	setHide: any;
	targetDate: Date;
}

const Employment: React.FC<EmploymentProps> = ({ setHide, targetDate }) => {
	const params = useParams();
	const [name, setName] = useState<string>("tamu undangan");
	const date = new Date(targetDate);

	useEffect(() => {
		if (params.to) {
			const nameParams = params.to.split("-").join(" ");
			setName(nameParams);
		}
	}, [params]);

	const handlerClick = (e: any) => {
		e.preventDefault();
		setHide(true)
	};

	const formattedDate = date.toLocaleDateString("id-ID", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div className="min-h-screen w-full overflow-hidden relative">
			<div className="w-full h-full">
				<img
					src={prewed1}
					alt="https://id.pinterest.com/pin/70437488568797/"
					className="w-auto h-full sm:w-full object-cover absolute top-0 left-0 z-[5]"
				/>
				<div className="w-full h-full block absolute z-10 bg-gradient-to-b from-black-transparent from-65% to-primary"></div>
			</div>
			<div className="absolute left-0 right-0 z-30 w-full h-full px-5 pt-16 pb-10 text-center flex flex-col justify-between items-center">
				<div className="text-center text-white">
					<p className="text-sm md:text-base">The wedding of</p>
					<h1 className="text-6xl font-bold font-tangerine">Putra & Putri</h1>
					<span className="text-sm md:text-base">| {formattedDate} |</span>
				</div>
				<div className="text-center text-white">
					<p className="text-sm md:text-base">Kepada Bapak/Ibu/Saudara/i</p>
					<h2 className="text-3xl font-semibold my-1 capitalize">
						{name}
					</h2>
					<p className="text-sm md:text-base">
						Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk
						Berhadir Di Acara Pernikahan Kami.
					</p>
					<button
						className="rounded-full bg-white text-primary px-5 py-2 mt-5"
						onClick={handlerClick}
					>
						<span className="flex items-center justify-center gap-2 font-medium text-xs md:text-sm">
							<MailOpen className="w-4 h-auto" /> Buka Undangan
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Employment;
