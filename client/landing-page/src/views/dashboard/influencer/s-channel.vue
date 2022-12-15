<!-- eslint-disable -->
<template>
	<div class="s-channel">
		<div class="row">
			<h3 class="col" style="margin-bottom: 30px">Channel</h3>
			<div class="col d-flex justify-content-end" style="margin-bottom: 30px">
				<router-link to="/dashboard/channel/form" class="text-end btn btn-success">+ Tambah Channel</router-link>
			</div>
		</div>
		<CCard v-if="channels.total != 0" class="mb-4">
			<!-- <CCardHeader> Display headings </CCardHeader> -->
			<CCardBody>
				<div class="bd-example bd-example-type">
					<CTable>
						<CTableBody>
							<CTableRow v-for="item in channels.data">
								<CTableDataCell>
									<router-link :to="'/dashboard/channel/form_update/' + item.id" class="p-4 nav-link d-flex justify-content-start">
										<div class="row">
											<CIcon class="col ps-4 pe-4" icon="cil-puzzle" width="30px" style="background-color: #f0f0f0; border-radius: 5px" />
											<div class="col ms-5 p-auto">
												<h4 class="row">{{ item.type }}</h4>
												<p class="row text-nowrap">Rp. {{ item.price }}</p>
											</div>
										</div>
									</router-link>
								</CTableDataCell>
							</CTableRow>
						</CTableBody>
					</CTable>
				</div>
			</CCardBody>
		</CCard>
		<div v-else>Tidak ada channel yang ditambahkan</div>
	</div>
</template>
<!-- eslint-disable -->
<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from "vue";
export default {
	setup() {
		const { getAccessTokenSilently, user } = useAuth0();
		const channels = ref({});
		return {
			channels,
			getChannels: async () => {
				const token = await getAccessTokenSilently();
				const response = await fetch(`http://localhost:5000/channel?id=${user.value.sub.slice(6)}`, {
					method: "GET",
					headers: {
						Authorization: "Bearer " + token,
					},
				});
				const result = await response.json();
				channels.value = result;
			},
		};
	},
	created() {
		this.getChannels();
	},
};
</script>
