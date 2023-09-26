<script setup>
	let no = ref(1);

	function know() {
		console.log(no.value);
	}

	/* function changer() {
		const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
		for (let i in arr) {
			setTimeout(() => {
				no.value = arr[i];
			}, 5000);
		}
	}

	onMounted(() => {
		changer();
	}); */
</script>
<template>
	<main class="z-3">
		<section id="relevant">
			<div class="info">
				<div id="about">
					<div class="block">
						<h1 class="text-md font-bold">ABOUT CPGRAMS</h1>
						<p>
							Centralised Public Grievance Redress and Monitoring System
							(CPGRAMS) is an online platform available to the citizens 24x7 to
							lodge their grievances to the public authorities on any subject
							related to service delivery. It is a single portal connected to
							all the Ministries/Departments of Government of India and States.
							Every Ministry and States have role-based access to this system.
							The status of the grievance filed in CPGRAMS can be tracked with the unique
							registration ID provided at the time of registration of the
							complainant. CPGRAMS also provides appeal facility to the citizens
							if they are not satisfied with the resolution by the Grievance
							Officer. After closure of grievance if the complainant is not
							satisfied with the resolution, he/she can provide feedback. If the
							rating is 'Poor' the option to file an appeal is enabled. The
							status of the Appeal can also be tracked by the petitioner with
							the grievance registration number.
						</p>
					</div>
					<div class="block">
						<h2>Preliminary Information</h2>
						<p>Scroll down to continue to website</p>
					</div>
				</div>

				<div id="warn">
					<div class="block">
						<h2 class="text-3xl">Issues which are not taken up for redress:</h2>
						<ul class="list-disc">
							<li>RTI Matters</li>
							<li>Court related / Subjudice matters</li>
							<li>Religious matters</li>
							<li>Suggestions</li>
							<li>
								Grievances of Government employees concerning their service
								matters including disciplinary proceedings etc. unless the
								aggrieved employee has already exhausted the prescribed channels
								keeping in view the DoPT OM No. 11013/08/2013-Estt.(A-III) dated
								31.08.2015
							</li>
						</ul>
					</div>
					<div
						style="
							height: 42%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						"
						class="block">
						<Transition name="banner" mode="out-in">
							<div style="height: 80%; padding: 0" :key="`/banner${no}.jpg`">
								<img
									@click="know"
									style="
									aspect-ratio: 1:2; width: 100%; height: 100%; border-radius: 20px;"
									:src="`/banner${no}.jpg`" />
							</div>
						</Transition>
						<div class="tray">
							<span
								:style="no == 1 && { backgroundColor: '#e8d9dbb3' }"
								@click="no = 1"
								class="slide"></span>
							<span
								:style="no == 2 && { backgroundColor: '#e8d9dbb3' }"
								@click="no = 2"
								class="slide"></span>
							<span
								:style="no == 3 && { backgroundColor: '#e8d9dbb3' }"
								@click="no = 3"
								class="slide"></span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="waste"></section>
	</main>
</template>

<style scoped>
	img {
		filter: brightness(0.9) contrast(1) opacity(0.9);
		border: 1px solid rgb(223, 220, 220);
		/* box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.154); */
	}
	.tray {
		display: flex;
		justify-content: center;
		height: fit-content;
	}
	.slide {
		border-radius: 50%;
		background-color: #cbd5e158;
		height: 1.3vh;
		width: 1.2vh;
		margin-inline: 1vh;
		cursor: pointer;
		display: inline-block;
	}
	main {
		position: Absolute;
		left: 0;
		top: 0;
		z-index: 5;
		display: flex;
		flex-direction: column;
		overflow: scroll;
		width: 100%;
		height: 100vh;
	}
	#indicator {
		/* cursor-pointer h-fit w-fit self-center text-6xl */
		cursor: pointer;
		height: fit-content;
		width: fit-content;
		align-self: center;
		font-size: 10vh;
		animation: heart 1s ease-in-out infinite alternate;
	}
	#relevant {
		display: flex;
		flex-direction: column;
		/* background-color: rgba(245, 245, 245, 0.07); */
		color: #cbd5e1d1;
		background: linear-gradient(315deg, #c92e3d 0%, #a12430 50%, #6f1922 100%);
		backdrop-filter: blur(10px);
		/* color: #cb2c3c; */
		/* backdrop-filter: blur(20px); */
		font-family: Pathway Extreme;
		min-height: 100vh;
		max-height: fit-content;
		padding: 5px;
		/* border-radius: 1%; */
		box-shadow: 0px 15px 10px -15px #111;
	}
	#waste {
		min-height: 200vh;
		background-color: transparent;
		color: transparent;
		padding: 2px;
	}
	.info {
		overflow: scroll;
		display: grid;
		padding: 0.4%;
		grid-template-columns: 1fr 1fr;
		height: fit-content;
	}
	@media (max-width: 830px) {
		.info {
			display: flex;
			flex-direction: column-reverse;
		}
		.block {
			font-size: smaller;
			width: 100%;
			flex: 1;
		}
		#about,
		#warn {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	h1,
	h2 {
		font-family: Josefin Sans;
	}
	#warn {
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
	}
	.block {
		/* background-color: rgba(21, 21, 21, 0.39); */
		padding: 20px;
		width: 85%;
		backdrop-filter: blur(20px);
		height: fit-content;
		border-radius: 40px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.199);
		margin-top: 10px;
	}
	.block:hover {
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.279);
	}
	@keyframes heart {
		from {
			transform: scale(1);
			transform: rotate(90deg);
		}
		to {
			transform: scale(1.1);
			transform: rotate(90deg);
			color: rgb(146, 19, 78);
		}
	}

	.banner-enter-from {
		transform: translateX(-15px);
		opacity: 1;
	}
	.banner-leave-to {
		opacity: 0;
		transform: translateX(10px);
	}

	.banner-leave-active,
	.banner-enter-active {
		transition: 0.2s linear;
	}
	*::-moz-selection {
		/* Code for Firefox */
		background-color: rgb(225, 12, 108);
	}

	*::selection {
		background-color: rgb(225, 12, 108);
	}
</style>
