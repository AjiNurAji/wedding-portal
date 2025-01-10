import React from "react";
import CopyToClipboard from "./copyToClipBoard";

interface PropsUnicode {
	code: string;
    setCode: any
}

const UniKode: React.FC<PropsUnicode> = ({ code, setCode }) => (
	<div className="h-screen w-full px-3 py-5 overflow-hidden top-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50 fixed">
        <button onClick={() => setCode("")} className="absolute top-1 right-1 bg-red-700 text-white rounded-sm px-2 py-1 text-sm">
            Close
        </button>
		<div className="h-auto bg-white text-center shadow-lg border-2 border-primary w-full flex justify-center items-center rounded-xl">
			<div className="p-5">
				<h1 className="font-tangerine text-4xl">P & P</h1>
				<p className="text-sm md:text-base text-primary">
					Berikut unikode anda silahkan screenshoot atau salin untuk
					ditunjukan ke penjaga.
				</p>
				<div className="bg-secondary my-3 rounded-md w-full text-black font-bold text-center py-2 px-4">
					{code}
				</div>
				<CopyToClipboard value={code} />
			</div>
		</div>
	</div>
);

export default UniKode;
