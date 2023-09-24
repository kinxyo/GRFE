<script setup>
	import NavBar from "../components/NavBar.vue";
	import Island from "../components/Island.vue";
</script>

<template>
	<div class="layout-main">
		<NavBar />
		<Island />
		<section>
			<slot />
		</section>
		<div class="footer">
			<h4>All rights reserved. Government of India.</h4>
		</div>
	</div>
</template>

<style scoped>
	.footer {
		height: 100%;
		/* bottom: 20%; */
		padding: 3px;
		text-align: center;
		font-family: Rubik;
		background-color: black;
		color: azure;
		/* border: 2px solid slateblue; */
	}
</style>
