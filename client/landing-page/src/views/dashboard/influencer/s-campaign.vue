<!-- eslint-disable -->
<template>
	<div class="s-campaign">
		<h3 style="margin-bottom: 30px">List Campaign</h3>
		<div v-if="campaigns.total !== 0" class="row">
			<div class="col col-sm-4 p-5" v-for="item in campaigns.data">
				<CCard>
					<CCardBody>
						<CCardTitle>{{ item.title }}</CCardTitle>
						<CCardText>{{ item.description }}</CCardText>
						<p>{{ new Date(item.start_date).toLocaleDateString() }} - {{ new Date(item.end_date).toLocaleDateString() }}</p>
						<p>Rp.{{ item.price }},00</p>
						<hr />
						<div class="d-flex justify-content-end">
							<router-link :to="'/dashboard/campaign/influencer/detail/' + item.id" class="text-end btn btn-outline-secondary ps-5 pe-5">Lihat Detail</router-link>
						</div>
					</CCardBody>
				</CCard>
			</div>
		</div>
		<div v-else>Tidak ada campaign</div>
	</div>
</template>
<!-- eslint-disable -->
<script>
import VueImg from "@/assets/images/campaign1.jpeg";
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	name: "InfluencerCampaign",
	data() {
		return {
			campaigns: {},
		};
	},
	setup() {
		const { getAccessTokenSilently } = useAuth0();
		return {
			VueImg,

			getAccessTokenSilently,
		};
	},
	methods: {
		async getAllCampaign() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch("http://localhost:5000/public/campaign", {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});

			const result = await response.json();
			this.campaigns = result;
		},
	},
	created() {
		this.getAllCampaign();
	},
};
</script>
