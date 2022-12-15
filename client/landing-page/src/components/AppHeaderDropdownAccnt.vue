<!-- eslint-disable -->
<template>
	<CDropdown variant="nav-item">
		<CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
			<CAvatar :src="avatar" size="md" />
		</CDropdownToggle>
		<CDropdownMenu class="pt-0">
			<!-- <div class="avatar avatar-lg mg-r-auto mg-l-auto"> -->
			<CDropdownItem>
				<div class="p-4 d-flex justify-content-center">
					<img src="../assets/images/avatars/2.jpg" onerror="" class="rounded-circle" alt="" />
				</div>
			</CDropdownItem>
			<CDropdownItem>
				<h5 class="text-center">{{ profile.full_name ? profile.full_name : profile.email }}</h5>
				<p class="text-center">{{ profile.role }}</p>
				<router-link class="d-flex btn btn-outline-secondary" to="/dashboard/profile">
					<p class="d-flex m-auto">Kelola Akun</p>
				</router-link>
			</CDropdownItem>
			<hr />
			<CDropdownItem>
				<button class="d-flex btn justify-content-center w-100" @click="logoutApp">Logout</button>
				<!-- <router-link class="d-flex btn" to="/logout">
          <p class="d-flex m-auto">
            Logout
          </p>
        </router-link> -->
			</CDropdownItem>
		</CDropdownMenu>
	</CDropdown>
</template>

<script>
import avatar from "@/assets/images/avatars/2.jpg";
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	name: "AppHeaderDropdownAccnt",
	data() {
		return {
			profile: {},
		};
	},
	setup() {
		const { logout, user } = useAuth0();
		return {
			logoutApp: () => {
				logout({
					returnTo: "http://localhost:8080",
				});
			},
			user,
			avatar: avatar,
			itemsCount: 42,
		};
	},
	methods: {
		async getUserProfile() {
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
				role: result.user_metadata.role,
			};
		},
	},
	created() {
		this.getUserProfile();
	},
};
</script>
