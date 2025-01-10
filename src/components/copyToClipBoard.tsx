import React, { useState } from "react";

interface CopyToClipboardProps {
	value: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ value }) => {
	const [copySuccess, setCopySuccess] = useState("");

	const handleCopyClick = async () => {
		const textToCopy = value;

		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopySuccess("Berhasil disalin!");
		} catch (err) {
			setCopySuccess("Gagal menyalin.");
		}
	};

	return (
		<div>
			<button
				onClick={handleCopyClick}
				className="text-xs cursor-pointer text-black"
			>
				{copySuccess || "Salin"}
			</button>
		</div>
	);
};

export default CopyToClipboard;
