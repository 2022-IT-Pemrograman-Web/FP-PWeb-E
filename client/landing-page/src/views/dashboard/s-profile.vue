<!-- eslint-disable -->
<template>
	<div class="s-profile">
		<h3 class="col" style="margin-bottom: 20px">Your Profile</h3>
		<CCard style="margin-bottom: 20px">
			<CCardHeader>SELEBGRAM</CCardHeader>
			<CCardBody>
				<form @submit.prevent="updateUserProfile" style="padding: 30px 30px">
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="IdSeleb" class="form-label ps-1">Id</label>
							<input type="text" class="form-control" id="IdSeleb" :placeholder="profile.id" disabled />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="nameSeleb" class="form-label ps-1">Full Name</label>
							<input type="text" class="form-control" id="nameSeleb" v-model="profile.full_name" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="emailSeleb" class="form-label ps-1">Email</label>
							<input type="email" class="form-control" id="emailSeleb" :placeholder="profile.email" disabled />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="companySeleb" class="form-label ps-1">Company Name</label>
							<input type="text" class="form-control" id="companySeleb" v-model="profile.company" />
						</div>
					</div>

					<div class="row d-flex justify-content-center mt-3">
						<div class="d-flex justify-content-end">
							<button class="btn btn-success ps-5 pe-5" style="padding: 5px 20px 5px 20px; color: white" type="submit" :disabled="isLoading">{{ isLoading ? "Loading" : "Perbarui" }}</button>
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
			profile: {},
			isLoading: false,
		};
	},
	setup() {
		const { user, getAccessTokenSilently } = useAuth0();
		return { user, getAccessTokenSilently };
	},
	methods: {
		async getUserProfile() {
			this.isLoading = true;
			const userId = this.user.sub;
			const token = process.env.VUE_APP_API_MANAGEMENT;
			const response = await fetch(`https://dev-5pvvajiehcpn55g6.us.auth0.com/api/v2/users/${userId}`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			this.profile = {
				id: result.user_id,
				email: result.email,
				company: result.user_metadata.company,
				full_name: result.user_metadata.full_name,
			};
			this.isLoading = false;
		},
		async updateUserProfile() {
			this.isLoading = true;
			const userId = this.user.sub;
			const token = process.env.VUE_APP_API_MANAGEMENT;
			const data = {
				user_metadata: {
					company: this.profile.company,
					full_name: this.profile.full_name,
				},
			};
			const response = await fetch(`https://dev-5pvvajiehcpn55g6.us.auth0.com/api/v2/users/${userId}`, {
				method: "PATCH",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			console.log(result);
			this.getUserProfile();
			this.isLoading = false;
		},
	},

	created() {
		this.getUserProfile();
	},
};
// https://dev-5pvvajiehcpn55g6.us.auth0.com/api/v2/users/4454tttt4tedxwqdw3434
</script>
