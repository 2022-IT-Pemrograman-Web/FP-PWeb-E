<!-- eslint-disable -->
<template>
	<div class="s-channelForm">
		<h3 class="col" style="margin-bottom: 30px">Channel Form</h3>
		<CCard style="margin-bottom: 100px">
			<!-- <CCardHeader> SELEBGRAM </CCardHeader> -->
			<CCardBody>
				<form @submit.prevent="updateChannel" style="padding: 30px 30px">
					<div class="mb-3 row">
						<label for="role" class="d-flex justify-content-start">Type Sosmed</label>
					</div>
					<div class="mb-3 row d-flex justify-content-center">
						<div class="col">
							<select v-model="channel.type" class="form-select" name="type">
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
							<input type="text" class="form-control" id="username" placeholder="endorsin_indonesia" v-model="channel.username" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="follower" class="form-label ps-1">Follower</label>
							<input type="number" class="form-control" id="followers" v-model="channel.followers" placeholder="1.5 k" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="link_sosmed" class="form-label ps-1">Link Sosmed</label>
							<input type="text" class="form-control" id="link_sosmed" v-model="channel.url" placeholder="instagram.com/endorsin_indonesia" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="price" class="form-label ps-1">Price</label>
							<input type="number" class="form-control" v-model="channel.price" id="price" placeholder="3000000" />
						</div>
					</div>

					<div class="row d-flex justify-content-center mt-3">
						<div class="d-flex justify-content-end gap-2">
							<button class="btn btn-success ps-5 pe-5" style="padding: 5px 20px 5px 20px; color: white" type="submit">Perbarui</button>
							<button class="btn btn-danger ps-5 pe-5" @click="deleteChannel" style="padding: 5px 20px 5px 20px; color: white">Hapus</button>
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
			channel: {
				id: "",
				userId: "",
				type: "",
				username: "",
				followers: null,
				url: "",
				price: null,
			},
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
		async getChannel() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/channel?id=${this.user.sub.slice(6)}&cid=${this.$route.params.cid}`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			const result = await response.json();
			this.channel = result.data;
			console.log(this.channel);
		},
		async updateChannel() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch("http://localhost:5000/channel", {
				method: "PUT",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(this.channel),
			});
			const result = await response.json();
			console.log(result);
			this.getChannel();
		},
		async deleteChannel() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/channel?cid=${this.channel.id}`, {
				method: "DELETE",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			console.log(result);
			this.$router.replace("/dashboard/channel");
		},
	},
	created() {
		this.getChannel();
	},
};
</script>
