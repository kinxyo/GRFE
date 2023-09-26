<template>
	<div class="layout-main">
		<NavBar />
		<Bg /> 
			<slot />
		<div class="footer"><h4>All rights reserved. Government of India.</h4></div>
	</div>
</template>

<style scoped>
.layout-main {
	min-height: 100vh;
	position: relative;
}
	.footer {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		padding: 3px;
		text-align: center;
		font-family: Rubik;
		background-color: black;
		color: azure;
	}
</style>
