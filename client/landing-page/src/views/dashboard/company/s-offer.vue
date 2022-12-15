<!-- eslint-disable -->
<template>
	<div class="s-campaign">
		<div class="row">
			<h3 class="col" style="margin-bottom: 30px">Offer</h3>
		</div>
		<div v-if="offers.total !== 0" class="row">
			<div class="col col-sm-4 p-5" v-for="item in offers.data">
				<CCard>
					<CCardBody>
						<CCardTitle>{{ item.campaign.title }}</CCardTitle>
						<CCardText>{{ item.campaign.description }}</CCardText>
						<p>{{ new Date(item.campaign.start_date).toLocaleDateString() }} - {{ new Date(item.campaign.end_date).toLocaleDateString() }}</p>
						<p>Rp.{{ item.campaign.price }},00</p>
						<p>Status : {{ item.status }}</p>
						<hr />
						<div class="d-flex justify-content-end">
							<router-link :to="'/dashboard/offer/company/detail/' + item.id" class="text-end btn btn-outline-secondary ps-5 pe-5">Lihat Detail</router-link>
						</div>
					</CCardBody>
				</CCard>
			</div>
		</div>
		<div v-else>Tidak ada penawaran</div>
	</div>
</template>
<!-- eslint-disable -->
<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	name: "OfferCompany",
	setup() {
		const { user, getAccessTokenSilently } = useAuth0();
		return {
			user,
			getAccessTokenSilently,
		};
	},
	data() {
		return {
			offers: {},
		};
	},
	methods: {
		async getAllOffer() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/offer?type=company&userId=${this.user.sub.slice(6)}`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});

			const result = await response.json();
			this.offers = result;
			console.log(this.offers);
		},
	},
	created() {
		this.getAllOffer();
	},
};
</script>
