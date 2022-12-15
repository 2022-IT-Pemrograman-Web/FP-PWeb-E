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
						<CCardTitle>{{ item.title }}</CCardTitle>
						<CCardText>{{ item.description }}</CCardText>
						<p>{{ new Date(item.start_date).toLocaleDateString() }} - {{ new Date(item.end_date).toLocaleDateString() }}</p>
						<p>Rp.{{ item.price }},00</p>
						<p>Status : {{ item.offer.status }}</p>
						<hr />
						<div class="d-flex justify-content-end">
							<router-link :to="'/dashboard/offer/influencer/detail/' + item.offer.id" class="text-end btn btn-outline-secondary ps-5 pe-5">Lihat Detail</router-link>
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
	name: "OfferInfluencer",
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
			const response = await fetch(`http://localhost:5000/offer?type=influencer&userId=${this.user.sub.slice(6)}`, {
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
