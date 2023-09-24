<script setup lang="ts">
	import { useScroll } from "@vueuse/core";

	const el = ref<HTMLElement | null>(null);
	const { y } = useScroll(el);
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
	html,
	body {
		padding: 0;
		margin: 0;
		background: linear-gradient(315deg, #a3abb4 0%, #cbd5e1 50%, #dde7f3 100%);
		overflow-y: scroll;
		overflow-x: hidden;
	}
	/* for chrome */
	*::-webkit-scrollbar {
		display: none;
	}
	/* for firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 0, 111, 0) transparent;
	}
	.page-enter-active,
	.page-leave-active {
		transition: all 0.2s;
	}
	.page-enter-from,
	.page-leave-to {
		/* opacity: 0; */
		transform: translateX(30px);
		/* position: absolute; */
		/* filter: blur(1rem); */
	}

	.page-move {
		transition: all 0.2s ease;
	}
  .main-containter-app {
    /* border: 2px solid orange; */
    height: 100%;
  }
</style>
