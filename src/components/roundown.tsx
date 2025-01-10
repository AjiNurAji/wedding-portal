import { MapPin } from "lucide-react";
import React from "react";
import Ring from "./svg/ring";
interface RoundownProps {
	targetDate: Date;
}

const Roundown: React.FC<RoundownProps> = ({ targetDate }) => {
	const date = new Date(targetDate);

	const formattedDate = date.toLocaleDateString("id-ID", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedTime = date.toLocaleTimeString("id-ID", {
		hour: "numeric",
		minute: "numeric",
	});

	return (
		<div className="px-4 overflow-hidden my-4">
			<div className="bg-white border-2 border-primary shadow-lg px-4 rounded-xl py-3">
				<p className="text-sm md:text-lg text-center text-primary my-3" data-aos-duration="700" data-aos-delay="500" data-aos="fade-up">
					Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud
					menyelenggarakan Pernikahan putra-putri kami yang Insya
					Allah akan diselenggarakan pada :
				</p>
				<div className="flex flex-col md:flex-row gap-0 md:gap-5 justify-center items-center">
					<div className="text-center py-5 flex flex-col gap-3 justify-center items-center">
						<h2 className="font-tangerine font-bold text-5xl text-primary" data-aos-duration="700" data-aos-delay="500" data-aos="fade-up">
							Akad
						</h2>
						<div>
							<p className="text-xs md:text-sm" data-aos-duration="700" data-aos-delay="500" data-aos="fade-up">
								{formattedDate}
							</p>
							<p className="text-xs md:text-sm" data-aos-duration="700" data-aos-delay="700" data-aos="fade-up">
								Pukul: {formattedTime} s/d Selesai
							</p>
							<p className="text-xs md:text-sm" data-aos-duration="700" data-aos-delay="900" data-aos="fade-up">
								Hotel Lorem Ipsum
							</p>
						</div>
						<a
							href="https://google.com/maps"
                            target="_blank"
							data-aos-duration="700" data-aos-delay="1000" data-aos="fade-up"
							className="flex justify-center items-center text-white bg-primary px-3 py-1 text-xs font-medium rounded-full w-fit gap-1"
						>
							<MapPin size={15} /> Lokasi
						</a>
					</div>
                    <div className="text-primary" data-aos-duration="200" data-aos-delay="500" data-aos="fade-in">
                        <Ring className="fill-primary w-20 h-auto" />
                    </div>
					<div className="text-center py-5 flex flex-col gap-3 justify-center items-center">
						<h2 className="font-tangerine font-bold text-5xl text-primary" data-aos-duration="700" data-aos-delay="500" data-aos="fade-up">
							Resepsi
						</h2>
						<div>
							<p className="text-xs md:text-sm" data-aos-duration="700" data-aos-delay="500" data-aos="fade-up">
								{formattedDate}
							</p>
							<p className="text-xs md:text-sm" data-aos-duration="700" data-aos-delay="700" data-aos="fade-up">
								Pukul: {formattedTime} s/d Selesai
							</p>
							<p className="text-xs md:text-sm" data-aos-duration="700" data-aos-delay="900" data-aos="fade-up">
								Hotel Lorem Ipsum
							</p>
						</div>
						<a
							href="https://google.com/maps"
                            target="_blank"
							data-aos-duration="700" data-aos-delay="1000" data-aos="fade-up"
							className="flex justify-center items-center text-white bg-primary px-3 py-1 text-xs font-medium rounded-full w-fit gap-1"
						>
							<MapPin size={15} /> Lokasi
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roundown;
