import React, { ChangeEvent, useState } from "react";
import UniKode from "./popup";

interface RsvpProps {
	name: string;
	attending: "yes" | "no" | "maybe";
	message: string;
	guest: number;
}

const RSVP: React.FC = () => {
	const [data, setData] = useState<RsvpProps>({
		name: "",
		attending: "yes",
		message: "",
		guest: 0,
	});
	const [code, setCode] = useState<string>("");
	const handleValue = (
		e: ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		let randomInt = "";
		const number = "0123456789";

		for (let i = 0; i < 4; i++) {
			const randomIndex = Math.floor(Math.random() * number.length);
			randomInt += number[randomIndex];
		}

		const code = `PNP-${randomInt}`;

		setCode(code);

		const statusHadir =
			data.attending === "yes"
				? "Hadir"
				: data.attending === "maybe"
					? "Mungkin"
					: "Tidak Hadir";

		try {
			await fetch("https://sheetdb.io/api/v1/97s99fr6jvsvl", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					data: [
						{
							timestamp: "DATETIME",
							Kode: code,
							Nama: data.name,
							Kehadiran: statusHadir,
							"Jumlah Tamu": data.guest,
							Pesan: data.message,
						},
					],
				}),
			});

			setData({
				name: "",
				guest: 0,
				message: "",
				attending: "yes"
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="px-4 pb-5 overflow-hidden mt-4">
			<div className="bg-white border-2 border-primary shadow-lg px-4 rounded-xl py-3">
				<h1 className="text-xl md:text-2xl font-bold mb-4 bg-primary text-white w-full text-center py-2 rounded-xl shadow-lg" data-aos-duration="1500" data-aos-delay="500" data-aos="zoom-in-down">
					Doa & Ucapan
				</h1>
				{code && <UniKode code={code} setCode={setCode} />}
				<p className="text-sm md:text-lg text-center text-primary my-3" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
					"Semoga dengan pernikahan ini Allah SWT menyempurnakan
					kebahagiaan kalian dan menjadikan penyatuan kalian sebagai
					ibadah kepada-Nya"
				</p>
				<form onSubmit={onSubmit}>
					<div className="w-full" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
						<label
							htmlFor="name"
							className="font-medium text-sm md:text-base mb-2 inline-block text-primary"
						>
							Nama Lengkap
						</label>
						<input
							type="text"
							id="name"
							required
							value={data.name}
							onChange={(e) => handleValue(e)}
							name="name"
							className="bg-primary text-sm md:text-base text-black outline-none shadow-none rounded-xl w-full font-medium bg-opacity-10 focus:bg-opacity-20 border-2 border-primary px-3 py-2"
							placeholder="Isikan nama anda"
						/>
					</div>
					<div className="w-full mt-4" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
						<label
							htmlFor="attending"
							className="font-medium text-sm md:text-base mb-2 inline-block text-primary"
						>
							Apakah Anda akan hadir?
						</label>
						<select
							name="attending"
							id="attending"
							required
							value={data.attending}
							defaultValue={data.attending}
							onChange={(e) => handleValue(e)}
							className="bg-primary text-sm md:text-base text-black outline-none shadow-none rounded-xl w-full font-medium bg-opacity-10 focus:bg-opacity-20 border-2 border-primary px-3 py-2"
						>
							<option disabled>Konfirmasi Kehadiran</option>
							<option value="yes">Hadir</option>
							<option value="no">Tidak Hadir</option>
							<option value="maybe">Mungkin</option>
						</select>
					</div>
					{data.attending === "yes" && (
						<div className="w-full mt-4" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
							<label
								htmlFor="guest"
								className="font-medium text-sm md:text-base mb-2 inline-block text-primary"
							>
								Jumlah Tamu (Termasuk anda)
							</label>
							<input
								type="text"
								id="guest"
								required
								value={data.guest}
								onChange={(e) => handleValue(e)}
								name="guest"
								className="bg-primary text-sm md:text-base text-black outline-none shadow-none rounded-xl w-full font-medium bg-opacity-10 focus:bg-opacity-20 border-2 border-primary px-3 py-2"
								placeholder="Isikan jumlah tamu yang akan datang"
							/>
						</div>
					)}
					<div className="w-full mt-4" data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
						<label
							htmlFor="message"
							className="font-medium text-sm md:text-base mb-2 inline-block text-primary"
						>
							Pesan
						</label>
						<textarea
							name="message"
							id="message"
							onChange={(e) => handleValue(e)}
							required
							rows={5}
							value={data.message}
							placeholder="Isikan pesan anda"
							className="bg-primary resize-none text-sm md:text-base text-black outline-none shadow-none rounded-xl w-full font-medium bg-opacity-10 focus:bg-opacity-20 border-2 border-primary px-3 py-2"
						></textarea>
					</div>
					<div className="flex justify-end items-center">
						<button
							className="rounded-lg w-fit bg-primary text-white px-5 py-2 mt-2"
							type="submit"
						>
							Kirim
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RSVP;
