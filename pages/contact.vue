<template>
	<main>
		<div
			class="main-container grid place-items-center w-full text-3xl font-spacegro min-h-screen">
			<div class="main-greet flex flex-col items-center gap-10">
				<Icon class="icon" size="200" name="fa6-solid:child-reaching" />
				<h1>Contact Us</h1>
			</div>
				<p class="w-fit text-center">
					You can reach us @ somewhere .
				</p>
			</div>
	</main>
</template>

<style scoped>
	* {
		box-sizing: border-box;
	}
	h1 {
		font-family: Rubik;
		font-weight: 900;
		font-size: x-large;
		text-shadow: 0 0 3px #2d29293d;
	}
	p {
		font-size: 100%;
		white-space: nowrap;
	}
	@media (max-width: 484px) {
		p {
			font-size: 90%;
		}
	}
	@media (max-width: 432px) {
		p {
			font-size: 80%;
		}
	}
	@media (max-width: 391px) {
		p {
			font-size: 70%;
		}
	}
	@media (max-width: 341px) {
		.icon {
			padding: 3rem;
		}
		.main-greet {
			font-size: smaller;
		}
		p {
			font-size: 60%;
		}
	}
</style>
