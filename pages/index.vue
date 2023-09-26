<template>
			<div class="body">
				<div class="intro">
					<div class="text">
						<div class="heading">
							<img style="height: 100px" src="/india.png" />
							<h1>Department of Administrative Reforms & Public Grievances.</h1>
						</div>
						<p>
							Grievance Redressal is a webapp made with focus to adding convenience
							to the process of redressal mechanism. It also allows easy tracking 
							of all complaints that have submitted.
							<!-- Rocket is a web framework for Rust that makes it simple to write
							fast, secure web applications without sacrificing flexibility,
							usability, or type safety. -->
						</p>
					</div>
					<div class="important-buttons">
						<NuxtLink class="button" to="">Contact Us</NuxtLink>
						<NuxtLink class="button" to="">FAQ</NuxtLink>
						<NuxtLink class="button" to="">About Us</NuxtLink>
					</div>
				</div>

				<div class="features">
					<section id="one">
						<div class="logo">
							<Icon size="180" name="game-icons:artificial-intelligence" />
						</div>
						<h2>AI Assistance</h2>
						<div class="detail">
							<p>
								lntroducing an Al-based chatbot that allows citizens to dictate
								their grievances in their local language and lodge them.
							</p>
						</div>
					</section>
					<section id="two">
						<div class="logo">
							<Icon size="180" name="uil:language" />
						</div>
						<h2>Multilingual</h2>
						<div class="detail">
							<p>
								Supports most of the local languages of India. Also provides
								<b>speech-to-text</b> support for them.
							</p>
						</div>
					</section>
					<section id="three">
						<div class="logo">
							<Icon
								size="180"
								name="material-symbols:spatial-tracking-rounded" />
						</div>
						<h2>Realtime-Tracking</h2>
						<div class="detail">
							<p>
								Real-time updates on the status of the complaint should be sent
								to citizens, enabling one-on-one conversations throughout the
								grievance lifecycle.
							</p>
						</div>
					</section>
				</div>
			</div>
</template>
<style scoped>
	.body {
		/* border: 2px solid slateblue; */
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 5rem;

		/* height: 100vh; */
	}
	.intro {
		display: grid;
		place-items: center;
		gap: 5px;
		/* height: 100vh; */
		/* border: 2px solid 	slateblue; */
	}
	.text {
		text-align: center;
		/* border: 2px solid slateblue; */
		width: 25%;
		font-size: larger;
		font-family: Space Grotesk;
		/* border: 2px solid orange; */
	}
	.heading {
		display: grid;
		grid-template-rows: 1fr 1fr;
		place-items: center;
		/* gap: 2rem; */
		/* border: 2px solid slateblue; */
	}
	h1 {
		font-family: Rubik;
		font-weight: 900;
		font-size: x-large;
		/* text-shadow: 0 0 3px #2d292992; */
		text-shadow: 0 0 3px #2d29293d;
	}
	.button {
		padding: 7px;
		font-family: Poppins;
		margin-inline: 5px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.093);
		transition: 0.1s ease;
		backdrop-filter: blur(20px);
		border-radius: 5px;
		cursor: pointer;
	}
	.button:hover {
		background-color: rgba(0, 0, 0, 0.055);
	}
	.features {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: rgba(34, 34, 34, 0.309);
		border-top: 0.1px solid rgba(0, 0, 0, 0.083);
		color: rgba(240, 255, 255, 0.804);
		padding: 5px;
		/* border: 2px solid green; */
	}
	.features section {
		font-size: large;
		font-family: Quicksand;
		border-right: 1px dashed rgba(0, 0, 0, 0.119);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo {
		/* border: 2px solid slateblue; */
		margin-top: 2%;
		display: flex;
		justify-content: center;
		height: fit-content;
	}
	.detail {
		/* border: 2px solid slateblue; */
		/* width: 50%; */
		width: 55%;
		text-align: center;
	}

	@media (max-width: 964px) {
		
	}

	@media (max-width: 866px) {
		
	}

	@media (max-width: 648px) {
		
	}

	@media (max-width: 506px) {
		
	}

</style>
