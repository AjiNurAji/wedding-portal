import React from "react";
import Dana from "./svg/dana";
import BRI from "./svg/bri";
import CopyToClipboard from "./copyToClipBoard";

interface GiftProps {
	bri: string;
	dana: string;
}

const Gift: React.FC<GiftProps> = ({ bri, dana }) => {
	return (
		<div className="flex flex-col w-full items-center justify-center py-5 px-4 overflow-hidden">
			<div className="bg-white border-2 border-primary shadow-lg px-4 rounded-xl py-3">
				<h1 className="text-xl md:text-2xl font-bold mb-4 bg-primary text-white w-full text-center py-2 rounded-xl shadow-lg" data-aos-duration="1500" data-aos-delay="500" data-aos="zoom-in-down">
					Wedding Gift
				</h1>
				<p className="text-sm md:text-lg text-center text-primary mb-3" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
					Doa Restu Anda merupakan karunia yang sangat berarti bagi
					kami. Dan jika memberi adalah ungkapan tanda kasih Anda,
					Anda dapat memberi kado secara cashless.
				</p>
				<div className="grid grid-cols-2 gap-3 w-full justify-between">
					<div className="text-center gap-2 flex flex-col justify-center items-center w-full bg-white px-2 py-3 rounded-lg border-2 border-primary shadow-md" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-right">
						<div className="w-fit">
							<BRI className="w-auto h-6 md:h-10" />
						</div>
						<div className="text-sm text-primary">
							{bri}
							<CopyToClipboard value={bri} />
						</div>
					</div>
					<div className="text-center gap-2 flex flex-col justify-center items-center w-full bg-white px-2 py-3 rounded-lg border-2 border-primary shadow-md" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-left">
						<div className="w-fit">
							<Dana className="w-auto h-6 md:h-10" />
						</div>
						<div className="text-sm text-primary">
							{dana}
							<CopyToClipboard value={dana} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gift;
