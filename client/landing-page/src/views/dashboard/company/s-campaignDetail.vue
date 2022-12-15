<!-- eslint-disable -->
<template>
	<div class="s-campaignDetail">
		<h3 class="col" style="margin-bottom: 30px">Detail Campaign</h3>
		<CCard style="margin-bottom: 100px; padding: 30px 30px">
			<!-- <CCardHeader> SELEBGRAM </CCardHeader> -->
			<CCardBody>
				<form @submit.prevent="handleSubmit" method="post" style="padding: 30px 30px">
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="exampleFormControlInput1" class="form-label ps-1">Title</label>
							<input type="text" v-model="campaign.title" class="form-control" id="exampleFormControlInput1" placeholder="endorsin" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="exampleFormControlInput1" class="form-label ps-1">Description</label>
							<textarea v-model="campaign.description" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deskripsi channel"></textarea>
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="exampleFormControlInput1" class="form-label ps-1">Start Date</label>
							<input v-model="campaign.start_date" type="date" class="form-control" id="exampleFormControlInput1" placeholder="10/11/2022" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="exampleFormControlInput1" class="form-label ps-1">End Date</label>
							<input type="date" v-model="campaign.end_date" class="form-control" id="exampleFormControlInput1" placeholder="10/11/2022" />
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="mb-3 text-start">
							<label for="exampleFormControlInput1" class="form-label ps-1">Price</label>
							<input type="number" v-model="campaign.price" class="form-control" id="exampleFormControlInput1" placeholder="3000000" />
						</div>
					</div>
					<!-- <div class="row d-flex justify-content-center">
                        <div class="mb-3 text-start">
                            <label for="exampleFormControlInput1" class="form-label ps-1">User ID</label>
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
						<div class="d-flex justify-content-end gap-2">
							<button class="btn btn-success ps-5 pe-5" style="padding: 5px 20px 5px 20px; color: white" type="submit">Perbarui</button>
							<button class="btn btn-danger ps-5 pe-5" @click="deleteCampaign" style="padding: 5px 20px 5px 20px; color: white">Hapus</button>
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
	name: "CampaignCompanyAdd",
	setup() {
		const { getAccessTokenSilently, user } = useAuth0();
		return {
			user,
			getAccessTokenSilently,
		};
	},
	data() {
		return {
			campaign: {
				id: "",
				title: "",
				description: "",
				start_date: null,
				end_date: null,
				price: null,
				userId: "",
			},
		};
	},
	methods: {
		async handleSubmit() {
			const token = await this.getAccessTokenSilently();
			this.campaign.userId = this.user.sub.slice(6);
			const data = this.campaign;
			data.start_date = new Date(this.campaign.start_date);
			data.end_date = new Date(this.campaign.end_date);

			const response = await fetch(`http://localhost:5000/campaign`, {
				method: "PUT",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			console.log(result);
			this.getCampaign();
		},
		async getCampaign() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/campaign?id=${this.$route.params.cid}`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			const result = await response.json();
			const { id, title, description, start_date, end_date, price, userId } = result.data;
			this.campaign = {
				id: id,
				title: title,
				description: description,
				start_date: new Date(start_date).toISOString().split("T")[0],
				end_date: new Date(end_date).toISOString().split("T")[0],
				price,
				userId,
			};
			console.log(this.campaign);
		},
		async deleteCampaign() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/campaign?id=${this.campaign.id}`, {
				method: "DELETE",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			console.log(result);
			this.$router.replace("/dashboard/campaign/company");
		},
	},
	created() {
		this.getCampaign();
	},
};
</script>
