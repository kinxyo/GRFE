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
	@media (max-width: 1076px) {
		#logo {
			height: 10rem;
			width: 24rem;
			top: 4rem;
			left: 4rem;
		}
	}
	@media (max-width: 942px) {
		#logo {
			height: 8rem;
			width: 18rem;
			top: 4rem;
			left: 4rem;
		}
		
	}
	@media (max-width: 850px) {
		#logo {
			left: 3rem;
		}
		
	}
	@media (max-width: 770px) {
		#logo {
			height: 6rem;
			width: 14rem;
			left: 2rem;
		}
	}
	@media (max-width: 495px) {
		#logo {
			height: 4rem;
			width: 10rem;
			left: 1rem;
			top: 4rem;
		}
	}
</style>
