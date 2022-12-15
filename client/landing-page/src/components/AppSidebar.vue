<!-- eslint-disable -->
<template>
	<CSidebar
		position="fixed"
		:unfoldable="sidebarUnfoldable"
		:visible="sidebarVisible"
		@visible-change="
			(event) =>
				$store.commit({
					type: 'updateSidebarVisible',
					value: event,
				})
		"
	>
		<CSidebarBrand>
			<!-- <CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      /> -->
			<strong>ENDORSIN</strong>
		</CSidebarBrand>
		<AppSidebarNav />
		<CSidebarToggler class="d-none d-lg-flex" @click="$store.commit('toggleUnfoldable')" />
	</CSidebar>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { AppSidebarNav } from "./AppSidebarNav";
import { logoNegative } from "@/assets/brand/logo-negative";
import { sygnet } from "@/assets/brand/sygnet";
import { useAuth0 } from "@auth0/auth0-vue";
export default {
	name: "AppSidebar",
	components: {
		AppSidebarNav,
	},
	setup() {
		const store = useStore();
		const { idTokenClaims } = useAuth0();
		const role = idTokenClaims["http://localhost:8080/role"];
		return {
			role,
			logoNegative,
			sygnet,
			sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
			sidebarVisible: computed(() => store.state.sidebarVisible),
		};
	},
};
</script>
