<script setup>
	const searchmodal = ref(false);
	const langmodal = ref(false);
	const accmodal = ref(false);
</script>
<template>
	<main class="header flex justify-end p-10">
		<slot />
		<div id="link-container" class="flex gap-5 justify-center flex-col">
			<div class="upper-logos self-end flex gap-4 text-3xl">
				<Icon @click="searchmodal = true" id="lang" style="cursor: pointer" name="line-md:search" />
				
				<Icon
				@click="langmodal = true"
				id="lang"
				style="cursor: pointer"
				name="material-symbols:language" />
				<Icon
				@click="accmodal = true"
					id="account"
					style="cursor: pointer"
					name="ic:twotone-settings" />
			</div>
			<!-- <div id="space-saver">=</div> -->
			<div
				id="quick-link"
				class="flex flex-nowrap shrink-0 gap-8 text-2xl font-pathex items-baseline">
				<NuxtLink class="butt" to="/">Home</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/lodge">Lodge</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/dashboard"
					>Dashboard</NuxtLink
				>
				<NuxtLink active-class="open" class="butt" to="/appeal">Appeal</NuxtLink>
			</div>
		</div>

		<!-- modals -->
		<!-- <Modal v-if="searchmodal"><h1>Search</h1></Modal>
		<Modal v-if="langmodal"><h1>Change Language</h1></Modal>
		<Modal v-if="accmodal"><h1>Edit Profile</h1></Modal> -->

		<!--  -->
	</main>
</template>

<style scoped>
	#quick-link {
		font-weight: 900;
	}
	@media (max-width: 836px) {
		main {
			padding-inline: 0.5rem;
		}
		#quick-link {
			font-size: 1.2rem;
		}
	}
	@media (max-width: 676px) {
		#link-container {
			margin-right: 1.4rem;
		}
		#quick-link {
			/* border: 2px solid slateblue; */
			display: grid;
			place-items: end;
			grid-template-columns: 1fr 1fr;
			font-size: medium;
			gap: 0.1rem;
		}
	}
	@media (max-width: 495px) {
		#link-container {
			margin-right: 1.4rem;
			gap: 0.3rem;
		}
		.upper-logos {
			font-size: large;
		}
		#quick-link {
			/* border: 2px solid slateblue; */
			display: grid;
			place-items: end;
			grid-template-columns: 1fr 1fr;
			font-size: smaller;
			gap: 0;
		}
	}

</style>
