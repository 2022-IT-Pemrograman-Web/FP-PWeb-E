<!-- eslint-disable -->
<template>
	<div class="s-campaignDetail">
		<h3 class="col" style="margin-bottom: 30px">Detail Campaign</h3>
		<CCard style="margin-bottom: 100px; padding: 30px 30px">
			<!-- <CCardHeader> SELEBGRAM </CCardHeader> -->
			<CCardBody>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Title</p>
						<p>{{ campaign.title }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Description</p>
						<p>{{ campaign.description }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Start Date</p>
						<p>{{ campaign.start_date }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">End Date</p>
						<p>{{ campaign.end_date }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Price</p>
						<p>{{ campaign.price }}</p>
					</div>
				</div>

				<div class="row d-flex justify-content-center mt-3">
					<div class="d-flex justify-content-end">
						<button @click="applyCampaign" class="btn btn-success ps-5 pe-5" style="padding: 5px 20px 5px 20px; color: white">Apply</button>
					</div>
				</div>
			</CCardBody>
		</CCard>
	</div>
</template>
<!-- eslint-disable -->
<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	name: "InfluencerCampaignDetail",
	setup() {
		const { getAccessTokenSilently, user } = useAuth0();
		return {
			user,
			getAccessTokenSilently,
		};
	},
	data() {
		return {
			campaign: {},
		};
	},
	methods: {
		async getCampaignDetail() {
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
		async applyCampaign() {
			const token = await this.getAccessTokenSilently();
			const data = {
				influencerId: this.user.sub.slice(6),
				campaignId: this.$route.params.cid,
				status: "OFFERING",
			};
			const response = await fetch("http://localhost:5000/offer", {
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
	created() {
		this.getCampaignDetail();
	},
};
</script>
