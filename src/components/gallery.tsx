import React from "react";
import prewed1 from "../assets/images/prewed1.jpg";
import prewed2 from "../assets/images/prewed2.jpeg";
import prewed3 from "../assets/images/prewed3.jpeg";
import prewed4 from "../assets/images/prewed4.jpeg";

const Gallery: React.FC = () => {
	return (
		<div className="px-4 overflow-hidden">
			<div className="bg-primary px-4 py-5 rounded-xl shadow-lg text-center">
				<h1 className="text-xl md:text-2xl font-bold mb-4 bg-white text-primary w-full text-center py-2 rounded-xl shadow-lg" data-aos-duration="1500" data-aos-delay="500" data-aos="zoom-in-down">
					Our Gallery
				</h1>
                <div className="grid grid-cols-2 gap-3 w-full justify-between mt-3">
                    <div className="w-full overflow-hidden h-full rounded-xl group" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-right">
                        <img src={prewed1} alt="" className="w-full transition-transform duration-500 ease-in-out h-auto object-cover group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                    <div className="w-full overflow-hidden h-full rounded-xl group" data-aos-duration="1500" data-aos-delay="700" data-aos="fade-left">
                        <img src={prewed2} alt="" className="w-full transition-transform duration-500 ease-in-out h-auto object-cover group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                    <div className="w-full overflow-hidden h-full rounded-xl group" data-aos-duration="1500" data-aos-delay="900" data-aos="fade-right">
                        <img src={prewed3} alt="" className="w-full transition-transform duration-500 ease-in-out h-auto object-cover group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                    <div className="w-full overflow-hidden h-full rounded-xl group" data-aos-duration="1500" data-aos-delay="1100" data-aos="fade-left">
                        <img src={prewed4} alt="" className="w-full transition-transform duration-500 ease-in-out h-auto object-cover group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Gallery;
