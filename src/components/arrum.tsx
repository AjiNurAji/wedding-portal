import React from "react";

const Arrum: React.FC = () => {
	return (
		<div className="px-4 mb-4 overflow-hidden">
			<div className="bg-primary px-4 py-5 rounded-xl shadow-lg text-center" data-aos-delay="900" data-aos="fade-up" data-aos-duration="2000">
				<h1 className="text-white text-5xl font-tangerine">P&P</h1>
				<p className="text-center text-white text-sm md:text-lg">
					“Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
					menciptakan pasangan-pasangan untukmu dari (jenis) dirimu
					sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan
					di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada
					yang demikian itu benar-benar terdapat tanda-tanda
					(kebesaran Allah) bagi kaum yang berpikir.”
				</p>
				<div className="flex mt-3 bg-black bg-opacity-15 rounded-lg justify-center items-center w-full gap-2">
					<span className="block h-[2px] relative rounded-full w-10 bg-white bg-opacity-50 before:content-normal before:w-3 before:h-3 before:bg-primary before:border before:border-white before:border-opacity-50 before:right-0 before:top-0 before:absolute before:rounded-full before:-translate-y-1/2"></span>
					<p className="text-white text-sm md:text-base font-medium italic">
						Q.S Ar-Rum ayat 21
					</p>
					<span className="block h-[2px] relative rounded-full w-10 bg-white bg-opacity-50 before:content-normal before:w-3 before:h-3 before:bg-primary before:border before:border-white before:border-opacity-50 before:left-0 before:top-0 before:absolute before:rounded-full before:-translate-y-1/2"></span>
				</div>
			</div>
		</div>
	);
};

export default Arrum;
