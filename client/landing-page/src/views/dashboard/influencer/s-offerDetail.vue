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
						<p>{{ offer.title }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Description</p>
						<p>{{ offer.description }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Start Date</p>
						<p>{{ offer.start_date }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">End Date</p>
						<p>{{ offer.end_date }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Price</p>
						<p>{{ offer.price }}</p>
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="mb-3 text-start">
						<p class="my-0">Status</p>
						<p>{{ offer.status }}</p>
					</div>
				</div>

				<div class="row d-flex justify-content-center mt-3">
					<div class="d-flex justify-content-end">
						<button @click="undoOffer" class="btn btn-danger ps-5 pe-5" style="padding: 5px 20px 5px 20px; color: white">Batalkan Offer</button>
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
			offer: {},
		};
	},
	methods: {
		async getOfferDetail() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/offer?id=${this.$route.params.id}`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			const result = await response.json();
			console.log(result);
			const { campaign, offer } = result.data;
			this.offer = {
				id: offer.id,
				title: campaign.title,
				description: campaign.description,
				start_date: new Date(campaign.start_date).toISOString().split("T")[0],
				end_date: new Date(campaign.end_date).toISOString().split("T")[0],
				price: campaign.price,
				status: offer.status,
			};
		},
		async undoOffer() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/offer?id=${this.$route.params.id}`, {
				method: "DELETE",
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			console.log(result);
			this.$router.replace("/dashboard/offer/influencer");
		},
	},
	created() {
		this.getOfferDetail();
	},
};
</script>
