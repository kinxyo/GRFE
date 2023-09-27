<template>
	<div class="index-container border-3 flex flex-col gap-5">
		<div class="homepage-intro grid place-items-center gap-6">
			<div class="intro-text font-spacegro text-center w-1/4 text-xl flex-col flex gap-5">
				<div class="logo-title grid grid-rows-2 place-items-center gap-3">
					<img class="h-28" src="/india.png" />
					<h1 class="titleapp font-rubik font-black text-2xl">
						Department of Administrative Reforms & Public Grievances.
					</h1>
				</div>
				<p>
					Redressal Portal is a webapp that implements an Al-based solution to
					automate the process of grievance redressal, leading to a simplified
					user experience.
				</p>
			</div>
			<div class="important-buttons">
				<NuxtLink class="button" to="/contact">Contact Us</NuxtLink>
				<NuxtLink class="button" to="/faq">FAQ</NuxtLink>
				<NuxtLink class="button" to="/about">About Us</NuxtLink>
			</div>
		</div>

		<div class="grid grid-cols-3 features">
			<section id="one">
				<Icon class="flogo" size="180" name="game-icons:artificial-intelligence" />
				<h2>AI Assistance</h2>
				<div class="detail">
					<p>
						lntroducing an Al-based chatbot that allows citizens to dictate
						their grievances in their local language and lodge them.
					</p>
				</div>
			</section>
			<section id="two">
				<Icon class="flogo" size="180" name="uil:language" />
				<h2>Multilingual</h2>
				<div class="detail">
					<p>
						Supports most of the local languages of India. Also provides
						<b>speech-to-text</b> support for them.
					</p>
				</div>
			</section>
			<section id="three">
				<Icon class="flogo" size="180" name="material-symbols:spatial-tracking-rounded" />
				<h2>Realtime-Tracking</h2>
				<div class="detail">
					<p>
						Real-time updates on the status of the complaint should be sent to
						citizens, enabling one-on-one conversations throughout the grievance
						lifecycle.
					</p>
				</div>
			</section>
		</div>
	</div>
</template>
<style scoped>
	h1 {
		text-shadow: 0 0 3px #2d29293d;
	}
	h2 {
		font-weight: 900;
		font-size: large;
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
	.features {
		background: linear-gradient(90deg, #854ce838 0%, #7c195467 100%);
		/* background-color: rgba(34, 34, 34, 0.309); */
		border-top: 0.1px solid rgba(0, 0, 0, 0.083);
		color: rgba(240, 255, 255, 0.804);
	}
	.features section {
		margin-top: 1rem;
		font-family: Quicksand;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* flex-wrap: wrap; */
	}
	.detail {
		width: 60%;
		text-align: center;
	}

	@media (max-width: 944px) {
		.intro-text {
			width: 50%;
		}
		.detail {
			/* border: 2px solid red; */
			width: 80%;
		}
		
	}
	
	@media (max-width: 676px) {
		.homepage-intro {
			display: flex;
			flex-direction: column;
			height: fit-content;
		}
		.flogo {
			padding: 15%;
		}
		.detail {
			/* border: 2px solid red; */
			width: 90%;
		}
	}
	@media (max-width: 676px) {
		.flogo {
			padding: 5%;
		}
		.features {
			/* border: 2px solid slateblue; */
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.detail {
			/* font-size: smaller; */
			width: 50%;
		}
		#three {
			margin-bottom: 7rem;
		}
	}

	@media (max-width: 495px) {
		.logo-title {
			gap: 0;
		}
		img {
			height: 8rem;
		}
		.titleapp {
			font-size: medium;
		}
		.index-container {
			gap: 6rem;
		}
		.intro-text {
			gap: 0;
			width: 70%;
		}
		.flogo {
			padding: 3rem;
		}
	}
</style>
