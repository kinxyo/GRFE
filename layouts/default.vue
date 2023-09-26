<template>
	<div class="min-h-screen relative flex flex-col">
		<NavBar>
			<img
				id="logo"
				class="absolute left-16 top-14"
				src="/logo.png" />
		</NavBar>
		<Bg />
		<slot />
		<div
			class="footer font-rubik p-5 justify-end bottom-0 inset-x-0 text-center text-slate-50 bg-black">
			<h4>All rights reserved. Government of India.</h4>
		</div>
	</div>
</template>

<style scoped>
	#logo {
		width: 27rem;
		/* height: ; */
	}
	@media (max-width: 958px) {
		#logo {
			height: 5rem;
			width: 12rem;
			top: 5rem;
			left: 5rem;
		}
	}
	@media (max-width: 770px) {
		#logo {
			height: 5rem;
			width: 12rem;
			left: 2rem;
		}
	}
</style>
