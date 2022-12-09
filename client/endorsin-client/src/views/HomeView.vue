<template>
	<main>
		<!-- <TheWelcome /> -->
		<button v-if="isAuth" @click="logout">Logout</button>
		<button v-else @click="login">Login</button>
	</main>
</template>

<script>
import TheWelcome from "../components/TheWelcome.vue";

import { useAuth0 } from "@auth0/auth0-vue";
export default {
	setup() {
		const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

		return {
			login: () => {
				loginWithRedirect();
			},
			logout: () => {
				logout({ returnTo: window.location.origin });
			},
			isAuth: isAuthenticated,
		};
	},
};
</script>
