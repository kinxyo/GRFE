<script setup lang="ts">
	import { useScroll } from "@vueuse/core";

	const el = ref<HTMLElement | null>(null);
	const { y } = useScroll(el);
	useHead({
		title: "RedressPortal",
		meta: [
			{
				name: "Grievance Redressal Web App Portal",
				content:
					"This site allows for grievance redressal via an AI-based mechanism which aims to simply the process and give a better user experience.",
			},
		],
	});
</script>
<template>
	<div class="main-containter-app">
		<Curtain v-if="y <= 717" ref="el" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	html {
		overflow-x: hidden;
	}
	body {
		margin: 0;
		background: linear-gradient(315deg, #a3abb4 0%, #cbd5e1 50%, #dde7f3 100%);
		overflow-y: scroll;
		overflow-x: hidden;
		/* position: relative; */
	}
	/* for chrome */
	*::-webkit-scrollbar {
		display: none;
	}
	/* for firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 0, 111, 0) transparent;
		box-sizing: border-box;
		/* box-sizing: content-box; */
	}
	.page-enter-active,
	.page-leave-active {
		transition: all 0.2s;
	}
	.page-enter-from,
	.page-leave-to {
		transform: translateX(30px);
	}

	.page-move {
		transition: all 0.2s ease;
	}
	.button {
		padding: 7px;
		font-family: Poppins;
		margin-inline: 0.5rem;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.093);
		transition: 0.1s ease;
		backdrop-filter: blur(20px);
		border-radius: 0.4rem;
		cursor: pointer;
	}
	.button:hover {
		background-color: rgba(0, 0, 0, 0.055);
	}
	@media (max-width: 700px) {
		.button {
			font-size: small;
		}
	}
	@media (max-width: 400px) {
		.button {
			font-size: x-small;
			/* font-size: smaller; */
		}
	}
</style>
