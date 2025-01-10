import { Instagram } from "lucide-react";
import prewed3 from "../assets/images/prewed3.jpeg";
import React from "react";

const Wedding: React.FC = () => {
	return (
		<div className="px-4 overflow-hidden">
			<div className="bg-white border-2 border-primary shadow-lg px-4 rounded-xl py-5">
				<p className="text-sm md:text-lg text-center text-primary mb-3" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
					Maha suci Allah yang telah menciptakan mahluk-Nya
					berpasang-pasangan. Ya Allah rahmatilah pernikahan kami
				</p>
				<div className="flex justify-center items-center md:flex-row flex-col gap-6">
					<div className="flex flex-col md:gap-5 md:flex-row md:text-start justify-center items-center text-center">
						<div className="w-40 h-40 overflow-hidden rounded-full md:rounded-3xl shadow-lg border-white border-4" data-aos="fade-right" data-aos-delay="20" data-aos-duration="2000">
							<img
								src={prewed3}
								alt="https://id.pinterest.com/pin/1090645234757420964/"
								className="object-cover w-full h-full scale-[3] translate-x-10"
								
							/>
						</div>
						<div>
							<h3 className="font-tangerine text-5xl md:mt-0 mt-4 text-primary font-bold" data-aos="fade-up" data-aos-delay="40" data-aos-duration="700">
								Putra
							</h3>
							<p className="text-xs" data-aos="fade-up" data-aos-delay="60" data-aos-duration="700">
								Putra ke - 4 dari Bapak Lorem & Ibu Ipsum
							</p>
                            <a
								href="https://instagram.com/ajnrji_"
								target="_blank"
								className="inline-block mt-3 text-primary transition-transform duration-500 hover:scale-90"
							>
								<Instagram />
							</a>
						</div>
					</div>
                    <div className="text-6xl font-tangerine text-primary" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                        &
                    </div>
					<div className="flex flex-col md:gap-5 md:flex-row-reverse md:text-end justify-center items-center text-center">
						<div className="w-40 h-40 overflow-hidden rounded-full md:rounded-3xl shadow-lg border-white border-4" data-aos="fade-left" data-aos-delay="20" data-aos-duration="2000">
							<img
								src={prewed3}
								alt="https://id.pinterest.com/pin/1090645234757420964/"
								className="object-cover w-full h-full scale-[3] -translate-x-14 -translate-y-5"
								
							/>
						</div>
						<div>
							<h3 className="font-tangerine text-5xl md:mt-0 mt-4 text-primary font-bold" data-aos="fade-up" data-aos-delay="40" data-aos-duration="700">
								Putri
							</h3>
							<p className="text-xs" data-aos="fade-up" data-aos-delay="60" data-aos-duration="700">
								Putri ke - 3 dari Bapak Lorem & Ibu Ipsum
							</p>
							<a
								href="https://instagram.com/ajnrji_"
								target="_blank"
								className="inline-block mt-3 text-primary transition-transform duration-500 hover:scale-90"
							>
								<Instagram />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wedding;
