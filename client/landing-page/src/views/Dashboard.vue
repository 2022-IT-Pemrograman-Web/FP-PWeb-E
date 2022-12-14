<!-- eslint-disable -->
<template>
	<div class="dashboard">
		<CCard style="margin-top:20%">
			<CCardHeader>Menu</CCardHeader>
			<CCardBody>
				<CRow>
					<div class="col m-3" style="border-radius: 10px; border: 1px solid #d9d9d9">
						<router-link class="p-4 nav-link d-flex justify-content-center" to="dashboard/selebgram/campaign">
							<h4>
								<CIcon icon="cil-puzzle" width="30px" />
								Campaign
							</h4>
						</router-link>
					</div>
					<div class="col m-3" style="border-radius: 10px; border: 1px solid #d9d9d9">
						<router-link class="p-4 nav-link d-flex justify-content-center" to="dashboard/selebgram/channel">
							<h4>
								<CIcon icon="cil-puzzle" width="30px" />
								Channel
							</h4>
						</router-link>
					</div>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	setup() {
		const { user } = useAuth0();
		return {
			user,
		};
	},
	// name: 'Dashboard',
};
</script>
