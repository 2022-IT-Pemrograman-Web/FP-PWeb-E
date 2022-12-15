<template>
	<div class="home">
		<nav class="navbar navbar-expand-lg fixed-top" style="background-color: #e5b323">
			<div class="container container-fluid">
				<a class="navbar-brand fw-bold" href="#">ENDORSIN</a>
				<div class="d-flex justify-content-between">
					<button class="btn btn-outline-secondary mx-4" @click="login">Login</button>
					<button class="btn btn-primary" @click="login">Register</button>
				</div>
			</div>
		</nav>
		<div class="row1" style="background-color: #e5b323; padding: 100px 0 100px 0">
			<div class="container">
				<div class="row">
					<div class="col m-5 d-flex flex-column justify-content-arround align-items-start">
						<p class="text-start mt-5" style="font: bold 46px poppins, sans-serif">PROMOSIKAN UMKM ANDA BERSAMA KAMI</p>
						<br />
						<p class="text-start" style="font: 24px montserrat, sans-serif">Temukan ribuan influencer untuk mempromosikan produk anda dengan mudah dan instan</p>
						<a class="btn btn-primary fw-bold" href="">DAFTAR SEKARANG</a>
					</div>
					<div class="col">
						<img alt="dashboard1" src="../assets/dashboard1.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="row2 pt-5 pb-5" style="background-color: #f0f0f0">
			<div class="container">
				<div class="col">
					<div class="row d-flex justify-content-center">
						<p class="col-sm-5" style="font: bold 36px poppins, sans-serif">3 Langkah Mudah Untuk Mempromosikan UMKM Anda</p>
					</div>
					<div class="row">
						<div class="col text-start m-5 p-4" style="background-color: #fff; border-radius: 10px; box-shadow: 0 8px 24px #c3c3c3">
							<img src="../assets/campaign.png" alt="" height="85" />
							<p class="mt-3" style="font: bold 24px poppins, sans-serif">Buat Campaign</p>
							<p>Mulai buat campaign baru untuk menjelaskan bisnis umkm Anda dan sesuaikan budget promosi sesuain keinginan Anda.</p>
						</div>
						<div class="col text-start m-5 p-4" style="background-color: #fff; border-radius: 10px; box-shadow: 0 8px 24px #c3c3c3">
							<img src="../assets/influencer.png" alt="" height="85" />
							<p class="mt-3" style="font: bold 24px poppins, sans-serif">Pilih Influencer</p>
							<p>Pilih influencer berdasarkan &nbsp; rekomendasi terbaik dari kami. Komunikasikan langsung brief bisnis UMKM Anda.</p>
						</div>
						<div class="col text-start m-5 p-4" style="background-color: #fff; border-radius: 10px; box-shadow: 0 8px 24px #c3c3c3">
							<img src="../assets/hasil.png" alt="" height="85" />
							<p class="mt-3" style="font: bold 24px poppins, sans-serif">Pantau Hasil</p>
							<p>Lihat bagaimana influencer mempromosikan bisnis Anda dan lihat performa awareness yang bisa Anda dapatkan melalui dashboard.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row3 pt-5 pb-5" style="background-color: #fff">
			<div class="container">
				<div class="col">
					<div class="row d-flex justify-content-center">
						<p class="col-sm-5" style="font: bold 36px poppins, sans-serif">Alasan Mengapa Anda Harus Memilih Kami</p>
					</div>
					<div class="row">
						<div class="col text-start m-5">
							<p class="mt-4">Beragam fitur menarik dan kemudahan kami sediakan dalam bagi Anda untuk mengembagkan bisnis UMKM ke tingkat yang lebih tinggi.</p>
							<div class="row mb-4 d-flex align-items-center">
								<div class="col-sm-1"><img src="../assets/badge1.png" alt="" /></div>
								<div class="col">Atur budget dan waktu promosi sesuai keinginan Anda</div>
							</div>
							<div class="row mb-4 d-flex align-items-center">
								<div class="col-sm-1"><img src="../assets/badge1.png" alt="" /></div>
								<div class="col">Kami berikan rekomendasi influencer terbaik yang cocok dengan preferensi Anda</div>
							</div>
							<div class="row mb-4 d-flex align-items-center">
								<div class="col-sm-1"><img src="../assets/badge1.png" alt="" /></div>
								<div class="col">Pantau keberhasilan promosi Anda secara realtime</div>
							</div>
							<div class="row">
								<div class="col-sm-1 d-flex align-items-center"><img src="../assets/badge1.png" alt="" /></div>
								<div class="col">Komunikasikan langsung pekerjaan yang Anda butuhkan dengan influencer.</div>
							</div>
						</div>
						<div class="col">
							<img src="../assets/dashboard2.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row4 pt-5 pb-5" style="background-color: #f0f0f0">
			<div class="container">
				<div class="col">
					<div class="row d-flex justify-content-center">
						<p class="col-sm-5" style="font: bold 36px poppins, sans-serif">Bagaimana Pengalaman Mereka?</p>
					</div>
					<div class="row">
						<div class="col text-center m-5 p-5" style="background-color: #fff; border-radius: 10px; box-shadow: 0 8px 24px #c3c3c3">
							<p style="font-style: italic">“ Endorsin berhasil mempertemukan saya dengan influencer yang tepat. Saya berhasil meningkatkan popularitas bisnis UMKM sekaligus omzet hingga 20%. Terima kasih Endorsin. “</p>
							<div class="row d-flex align-items-center">
								<div class="col">
									<img src="../assets/man.png" alt="" height="75" />
								</div>
								<div class="col">
									<p class="row fw-bold mt-3">Nadeo Argawinata</p>
									<p class="row">Pemilik Toko Baju</p>
								</div>
							</div>
						</div>
						<div class="col text-center m-5 p-5" style="background-color: #fff; border-radius: 10px; box-shadow: 0 8px 24px #c3c3c3">
							<p style="font-style: italic">“ Endorsin berhasil mempertemukan saya dengan influencer yang tepat. Saya berhasil meningkatkan popularitas bisnis UMKM sekaligus omzet hingga 20%. Terima kasih Endorsin. “</p>
							<div class="row d-flex align-items-center">
								<div class="col">
									<img src="../assets/man.png" alt="" height="75" />
								</div>
								<div class="col">
									<p class="row fw-bold mt-3">Nadeo Argawinata</p>
									<p class="row">Pemilik Toko Baju</p>
								</div>
							</div>
						</div>
						<div class="col text-center m-5 p-5" style="background-color: #fff; border-radius: 10px; box-shadow: 0 8px 24px #c3c3c3">
							<p style="font-style: italic">“ Endorsin berhasil mempertemukan saya dengan influencer yang tepat. Saya berhasil meningkatkan popularitas bisnis UMKM sekaligus omzet hingga 20%. Terima kasih Endorsin. “</p>
							<div class="row d-flex align-items-center">
								<div class="col">
									<img src="../assets/man.png" alt="" height="75" />
								</div>
								<div class="col">
									<p class="row fw-bold mt-3">Nadeo Argawinata</p>
									<p class="row">Pemilik Toko Baju</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row4 pt-3" style="background-color: #fff">
			<div class="row d-flex justify-content-center">
				<p style="font: poppins, sans-serif">Endorsin Indonesia. All Right Reseved 2022</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
	setup() {
		const { loginWithRedirect } = useAuth0();
		return {
			login: () => {
				loginWithRedirect({
					redirect_uri: "http://localhost:8080/dashboard",
				});
			},
		};
	},
};
</script>
