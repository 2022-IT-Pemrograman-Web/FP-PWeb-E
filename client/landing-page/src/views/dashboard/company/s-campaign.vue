<!-- eslint-disable -->
<template>
	<div class="s-campaign">
		<div class="row">
			<h3 class="col" style="margin-bottom: 30px">Campaign</h3>
			<div class="col d-flex justify-content-end" style="margin-bottom: 30px">
				<router-link to="/dashboard/campaign/company/add" class="text-end btn btn-success">+ Tambah Campaign</router-link>
			</div>
		</div>
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
							<router-link :to="'/dashboard/campaign/company/detail/' + item.id" class="text-end btn btn-outline-secondary ps-5 pe-5">Lihat Detail</router-link>
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
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	name: "CampaignCompany",
	setup() {
		const { user, getAccessTokenSilently } = useAuth0();
		return {
			user,
			getAccessTokenSilently,
		};
	},
	data() {
		return {
			campaigns: {},
		};
	},
	methods: {
		async getAllCampaigns() {
			const token = await this.getAccessTokenSilently();
			const response = await fetch(`http://localhost:5000/campaign?userId=${this.user.sub.slice(6)}`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});

			const result = await response.json();
			this.campaigns = result;
			console.log(this.campaigns);
		},
	},
	created() {
		this.getAllCampaigns();
	},
};
</script>
