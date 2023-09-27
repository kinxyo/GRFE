<template>
	<main>
		<div class="clouds">
		<img
			style="right: -20%; top: 0; animation-duration: 20s"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 10vh;
				animation-delay: 5s;
				animation-duration: 10s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 15vh;
				animation-delay: 4s;
				animation-duration: 8s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 20vh;
				animation-delay: 8s;
				animation-duration: 11s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 25vh;
				animation-delay: 10s;
				animation-duration: 8s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 32vh;
				animation-delay: 4s;
				animation-duration: 12s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 38vh;
				animation-delay: 3s;
				animation-duration: 10s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 40vh;
				animation-delay: 2s;
				animation-duration: 18s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 80vh;
				animation-delay: 1s;
				animation-duration: 10s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 75vh;
				animation-delay: 4s;
				animation-duration: 8s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 55vh;
				animation-delay: 6s;
				animation-duration: 15s;
			"
			id="cloud"
			src="/cloud.png" />
		<img
			style="
				right: -20%;
				top: 60vh;
				animation-delay: 1s;
				animation-duration: 30s;
			"
			id="cloud"
			src="/cloud.png" />
		</div>
	</main>
</template>

<style scoped>
	main {
		z-index: -2;
		/* border: 2px solid slateblue; */
		/* padding: 50px; */
		/* height: 100%; */
		/* display: block; */
		/* position: relative; */
		/* position: absolute; */
		/* overflow-x: hidden; */
		/* overflow-y: hidden; */
		/* width: 500px; */
	}
	.clouds {
		/* overflow-x: hidden; */
		position: relative;
	}
	#cloud {
		/* z-index: 5; */
		transform: scale(0.4);
		opacity: 0.04;
		animation-name: move;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-direction: alternate;
		/* position: relative; */
		position: absolute;
	}

	@keyframes move {
		from {
			left: 100%;
			right: 0;
		}
		to {
			left: 0;
			right: 100%;
		}
	}

	img {
		box-shadow: 2px 2px 5px 5px rgba(33, 33, 33, 0.54);
		filter: invert(100);
	}
</style>
