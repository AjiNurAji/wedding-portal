import React, { useEffect, useRef } from "react";
import song1 from "../assets/song/Nothing-Gonna-Cahnge-Saxofone.mp3";

const Song: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.play();
    }, [])

    return (
        <div className="sr-only">
            <audio autoPlay loop ref={audioRef}>
                <source src={song1} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default Song;