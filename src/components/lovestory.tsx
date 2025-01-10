import Heart from "./svg/heart";
import React from "react";
import Ring from "./svg/ring";
import Married from "./svg/merried";

const LoveStory: React.FC = () => {
	return (
		<div className="px-4 overflow-hidden">
			<div className="bg-primary shadow-lg px-4 rounded-xl py-3">
				<h1 className="text-xl md:text-2xl font-bold mb-4 bg-white text-primary w-full text-center py-2 rounded-xl shadow-lg" data-aos-duration="1500" data-aos-delay="500" data-aos="zoom-in-down">
					Love Story
				</h1>
				<div className="px-4 mt-10">
					<ol className="grid grid-cols-1 md:grid-cols-2">
						<li className="relative border-s md:border-s-0 border-e-0 md:border-e border-white">
							<span className="absolute flex items-center justify-center w-6 h-6 text-primary bg-white rounded-full max-md:-start-3 -end-3 ring-8 ring-white ring-opacity-50" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1500">
								<Heart className="w-3 h-3" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500" />
							</span>
							<div className="ms-8 md:me-8 pb-4">
								<h3 className="mb-1 text-lg font-semibold text-white text-start md:text-end" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
									Awal Bertemu
								</h3>
								<time className="block mb-2 text-sm text-white leading-none font-medium text-start md:text-end" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
									Agustus 2018
								</time>
								<p className="text-sm md:text-base font-normal text-start text-white text-opacity-70 md:text-end" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Officiis sequi provident
									possimus? Esse, unde ipsam. Doloribus eaque
									molestias itaque soluta, repellendus
									voluptates minus aliquam commodi?
								</p>
							</div>
						</li>
                        <li></li>
                        <li className="relative border-e border-white"></li>
						<li className="relative md:border-none border-s border-white">
							<span className="absolute flex items-center justify-center w-6 h-6 text-primary bg-white rounded-full -start-3 ring-8 ring-white ring-opacity-50" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="600">
								<Ring className="w-3 h-3 fill-current" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1500" />
							</span>
							<div className="ms-8 pb-4">
								<h3 className="mb-1 text-lg font-semibold text-white text-start"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
									Acara Lamaran
								</h3>
								<time className="block mb-2 text-sm text-white leading-none font-medium text-start"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
									Juli 2020
								</time>
								<p className="text-sm md:text-base font-normal text-start text-white text-opacity-70"  data-aos="fade-left" data-aos-delay="600" data-aos-duration="1500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Officiis sequi provident
									possimus? Esse, unde ipsam. Doloribus eaque
									molestias itaque soluta, repellendus
									voluptates minus aliquam commodi?
								</p>
							</div>
						</li>
                        <li className="relative border-s md:border-s-0 border-e-0 md:border-e border-white">
							<span className="absolute flex items-center justify-center w-6 h-6 text-primary bg-white rounded-full max-md:-start-3 -end-3 ring-8 ring-white ring-opacity-50" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1500">
								<Married className="w-3 h-3" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500" />
							</span>
							<div className="ms-8 md:me-8 pb-4">
								<h3 className="mb-1 text-lg font-semibold text-white text-start md:text-end"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
									Resepsi
								</h3>
								<time className="block mb-2 text-sm text-white leading-none font-medium text-start md:text-end"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
									Juli 2028
								</time>
								<p className="text-sm md:text-base font-normal text-start text-white text-opacity-70 md:text-end"  data-aos="fade-right" data-aos-delay="600" data-aos-duration="1500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Officiis sequi provident
									possimus? Esse, unde ipsam. Doloribus eaque
									molestias itaque soluta, repellendus
									voluptates minus aliquam commodi?
								</p>
							</div>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default LoveStory;
