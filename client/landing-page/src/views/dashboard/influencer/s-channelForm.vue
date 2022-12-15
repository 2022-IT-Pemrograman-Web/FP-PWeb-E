<!-- eslint-disable -->
<template>
	<div class="s-channelForm">
		<h3 class="col" style="margin-bottom: 30px">Channel Form</h3>
		<CCard style="margin-bottom: 100px">
			<!-- <CCardHeader> SELEBGRAM </CCardHeader> -->
			<CCardBody>
				<form @submit.prevent="handleSubmit" method="post" style="padding: 30px 30px">
					<div class="mb-3 row">
						<label for="role" class="d-flex justify-content-start">Type Sosmed</label>
					</div>
					<div class="mb-3 row d-flex justify-content-center">
						<div class="col">
							<select required v-model="type" class="form-select" aria-label="Tipe channel">
								<option value="" disabled selected>Pilih Type</option>
								<option value="Instagram">Instagram</option>
								<option value="Tiktok">Tiktok</option>
								<option value="Twitter">Twitter</option>
								<option value="Youtube">Youtube</option>
							</select>
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="username" class="form-label ps-1">Username</label>
							<input v-model="username" required type="text" class="form-control" id="username" placeholder="endorsin_indonesia" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="follower" class="form-label ps-1">Follower</label>
							<input v-model="followers" required type="number" class="form-control" id="follower" placeholder="1.5 k" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="link_sosmed" class="form-label ps-1">Link Sosmed</label>
							<input required v-model="url" type="text" class="form-control" id="link_sosmed" placeholder="instagram.com/endorsin_indonesia" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="price" class="form-label ps-1">Price</label>
							<input v-model="price" required type="number" class="form-control" id="price" placeholder="3000000" />
						</div>
					</div>
					<!-- <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">Profile ID</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="U-0238384">
                        </div>
                    </div> -->
					<!-- <div class="row d-flex justify-content-center">
                        <div class="mb-3 d-flex justify-content-start">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                &nbsp;Saya menyetujui  <a href="">Syarat & Ketentuan</a> yang berlaku
                            </label>
                        </div>
                    </div> -->

					<div class="row d-flex justify-content-center mt-3">
						<div class="d-flex justify-content-end">
							<button class="btn btn-success ps-5 pe-5" style="padding: 5px 20px 5px 20px; color: white" type="submit">Kirim</button>
						</div>
					</div>
				</form>
			</CCardBody>
		</CCard>
	</div>
</template>
<!-- eslint-disable -->
<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	data() {
		return {
			type: "",
			username: "",
			followers: null,
			url: "",
			price: null,
		};
	},
	setup() {
		const { user, getAccessTokenSilently } = useAuth0();
		return {
			user,
			getAccessTokenSilently,
		};
	},
	methods: {
		async handleSubmit() {
			console.log(this.type, this.username, this.followers, this.url, this.price);
			const token = await this.getAccessTokenSilently();
			const data = {
				type: this.type,
				username: this.username,
				followers: this.followers,
				url: this.url,
				price: this.price,
				userId: this.user.sub.slice(6),
			};
			const response = await fetch("http://localhost:5000/channel", {
				method: "POST",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			console.log(result);
		},
	},
};
</script>
