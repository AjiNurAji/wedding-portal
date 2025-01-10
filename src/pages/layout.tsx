import React, { useState } from "react";
import Employment from "../components/employment";
import Arrum from "../components/arrum";
import Wedding from "../components/wedding";
import Roundown from "../components/roundown";
import Countdown from "../components/countdown";
import LoveStory from "../components/lovestory";
import Gift from "../components/gift";
import Gallery from "../components/gallery";
import RSVP from "../components/rsvp";
import AOS from "aos";
import "aos/dist/aos.css"
import Song from "../components/song";

const Layout: React.FC = () => {
	const [hide, setHide] = useState<boolean>(false);
	const targetDate = new Date('2028-07-08T08:00:00');
	AOS.init()

	return (
		<div className="bg-secondary py-5 max-sm:mb-4">

			<Song />
			
			<div className={`absolute left-0  transition-all duration-1000 ease-in-out h-screen w-full ${hide ? "-top-[200%]" : "top-0"}`}>
				<Employment targetDate={targetDate} setHide={setHide} />
			</div>

			{hide && (
				<div className="container mx-auto">
					<Arrum />
					<Countdown targetDate={targetDate} />
					<Wedding />
					<Roundown targetDate={targetDate} />
					<LoveStory />
					<Gift bri="4123455678" dana="08123456789" />
					<Gallery />
					<RSVP />
				</div>
			)}
		</div>
	);
};

export default Layout;
