import React, { useEffect, useState } from "react";

interface CountdownProps {
	targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState<number>(
		targetDate.getTime() - Date.now()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(targetDate.getTime() - Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);

	const calculateTimeLeft = () => {
		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	};

	const { days, hours, minutes, seconds } = calculateTimeLeft();

	const iso = targetDate
		.toISOString()
		.split("-")
		.join("")
		.split(":")
		.join("")
		.split(".")
		.join("");

	return (
		<div className="flex flex-col w-full items-center justify-center py-5 px-4 overflow-hidden">
			<h1 className="text-xl md:text-2xl font-bold mb-4 bg-primary text-white w-full text-center py-2 rounded-xl shadow-lg" data-aos-duration="2000" data-aos-delay="500" data-aos="zoom-in-down">
				Save The Date
			</h1>
			<div className="grid grid-cols-4 gap-2 w-full justify-between">
				<div className="text-center w-full bg-white px-2 py-3 rounded-lg border-2 border-primary shadow-md" data-aos-duration="1500" data-aos-delay="1000" data-aos="zoom-in">
					<h4 className="text-2xl md:text-4xl font-bold" translate="no">{days}</h4>
					<div className="text-xs md:text-sm text-primary">Hari</div>
				</div>
				<div className="text-center w-full bg-white px-2 py-3 rounded-lg border-2 border-primary shadow-md" data-aos-duration="1500" data-aos-delay="1000" data-aos="zoom-in">
					<h4 className="text-2xl md:text-4xl font-bold" translate="no">{hours}</h4>
					<div className="text-xs md:text-sm text-primary">Jam</div>
				</div>
				<div className="text-center w-full bg-white px-2 py-3 rounded-lg border-2 border-primary shadow-md" data-aos-duration="1500" data-aos-delay="1000" data-aos="zoom-in">
					<h4 className="text-2xl md:text-4xl font-bold" translate="no">{minutes}</h4>
					<div className="text-xs md:text-sm text-primary">Menit</div>
				</div>
				<div className="text-center w-full bg-white px-2 py-3 rounded-lg border-2 border-primary shadow-md" data-aos-duration="1500" data-aos-delay="1000" data-aos="zoom-in">
					<h4 className="text-2xl md:text-4xl font-bold" translate="no">{seconds}</h4>
					<div className="text-xs md:text-sm text-primary">Detik</div>
				</div>
			</div>
			<div className="text-center mt-5 flex justify-center gap-3 items-center">
				<span className="block h-[2px] relative rounded-full w-20 bg-white bg-opacity-50 before:content-normal before:w-3 before:h-3 before:bg-primary before:border before:shadow-md before:border-white before:border-opacity-50 before:right-0 before:top-0 before:absolute before:rounded-full before:-translate-y-1/2" data-aos-duration="1500" data-aos-delay="1000" data-aos="fade-right"></span>
				<a
					target="_blank"
					data-aos-duration="1500" data-aos-delay="1000" data-aos="zoom-in-up"
					className="inline-block shadow-lg text-xs md:text-sm border-2 hover:scale-95 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out border-primary font-medium rounded-full bg-white text-primary px-3 md:px-5 py-2"
					href={`https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Jhon%20&%20Doe&dates=${iso}/${iso}&details=Ditunggu%20yaa&location=Lokasi%20Acara`}
				>
					Simpan Tanggal
				</a>
				<span className="block h-[2px] relative rounded-full w-20 bg-white bg-opacity-50 before:content-normal before:w-3 before:h-3 before:bg-primary before:border before:shadow-md before:border-white before:border-opacity-50 before:left-0 before:top-0 before:absolute before:rounded-full before:-translate-y-1/2" data-aos-duration="1500" data-aos-delay="1000" data-aos="fade-left"></span>
			</div>
		</div>
	);
};

export default Countdown;
