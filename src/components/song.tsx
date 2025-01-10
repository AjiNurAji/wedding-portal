import React from "react";
import song1 from "../assets/song/Nothing-Gonna-Cahnge-Saxofone.mp3";

const Song: React.FC = () => {
	return (
		<div
			className="sr-only"
		>
			<audio autoPlay loop id="song">
				<source src={song1} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default Song;
