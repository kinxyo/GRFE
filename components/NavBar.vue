<script setup>
	// const searchmodal = ref(false);
	// const langmodal = ref(false);
	// const accmodal = ref(false);
	import q from "../data/info.json";

	const modal = ref(null);
	const login = ref(null);
	const search = ref(null);

	const searchtext = ref("");

	const dataset = ref(q);

	watch(searchtext, () => {
		dataset.value = q.filter((a) =>
			a.name.toLowerCase().includes(searchtext.value.toLowerCase())
		);
	});

	function logging() {
		console.log("text: ", searchtext.value, "value: ", dataset.value);
	}

	onMounted(() => {
		modal.value.focus();
		login.value.focus();
		search.value.focus();
	});
</script>
<template>
	<main class="header flex justify-end p-10">
		<slot />
		<div id="link-container" class="flex gap-5 justify-center flex-col">
			<div class="upper-logos self-end flex gap-4 text-3xl">
				<!-- <Icon style="cursor: pointer;" name="mdi:language-box" /> -->
				<Icon @click="search.showModal()" id="lang" style="cursor: pointer" name="line-md:search" />
				
				<Icon
				@click="modal.showModal()"
				id="lang"
				style="cursor: pointer"
				name="material-symbols:language" />
				<Icon
				@click="login.showModal()"
					id="account"
					style="cursor: pointer"
					name="material-symbols:account-circle" />
			</div>
			<!-- <div id="space-saver">=</div> -->
			<div
				id="quick-link"
				class="flex flex-nowrap shrink-0 gap-8 text-2xl font-pathex items-baseline">
				<NuxtLink class="butt" to="/">Home</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/about">Lodge</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/contact"
					>Dashboard</NuxtLink
				>
				<NuxtLink active-class="open" class="butt" to="/faq">Appeal</NuxtLink>
			</div>
		</div>

		<!-- modals -->
		<!-- <Modal v-if="searchmodal"><h1>Search</h1></Modal>
		<Modal v-if="langmodal"><h1>Change Language</h1></Modal>
		<Modal v-if="accmodal"><h1>Edit Profile</h1></Modal> -->

		<dialog class="lang-selector" ref="modal" appear>
			<ul>
				<li>English</li>
				<li>Hindi</li>
				<li>Marathi</li>
				<li>Bengali</li>
				<li>Telegu</li>
				<li>Tamil</li>
				<li>Urdu</li>
				<li>Gujarati</li>
				<li>Odia</li>
				<li>Kannada</li>
				<li>Malyalam</li>
				<li>Punjabi</li>
				<li>Punjabi</li>
				<li>Assamese</li>
				<li>Maithi</li>
				<li>Meiti</li>
				<li>Sanskrit</li>
			</ul>
			<div class="end">
				<button @click="modal.close()">Close</button>
			</div>
		</dialog>

		<dialog class="portal" ref="login">
			<div class="contentd">
				<div class="form">
					<input placeholder="username" />
					<input placeholder="password" />
				</div>
				<div class="buttons">
					<button @click="login.close()">Close</button>
					<button>Login</button>
				</div>
			</div>
		</dialog>

		<dialog class="searchbox" ref="search">
			<div class="container">
				<div class="side-panel">
					<div class="upper">
						<input
							@keyup.enter="logging"
							v-model.trim="searchtext"
							placeholder="search by name"
							type="text" />
					</div>

					<div class="lower">
						<div class="tags">
							<p>Agriculture Research and Education</p>
							<p>Atomic Energy</p>
							<p>Ayush</p>
							<p>Bio Technology</p>
							<p>Central Board of Excise and Customs</p>
							<p>Chemicals and Petrochemicals</p>
							<p>Central Board of Direct Taxes (Income Tax)</p>
						</div>
						<div>
							<button
								@click="search.close()"
								class="closebtn"
								style="
									transition: 0.1s linear;
									padding: 5px;
									background-color: rgba(43, 42, 45, 0.251);
									border: none;
									border-radius: 5px;
									font-family: Space Grotesk;
									margin-top: 5px;
									cursor: pointer;
								">
								Close
							</button>
						</div>
					</div>
				</div>

				<div class="main-content">
					<table style="width: 100%">
						<tr>
							<th style="width: 10%">S.No</th>
							<th>Officer Name</th>
							<th>Contact</th>
						</tr>
						<TransitionGroup name="tableset" appear>
							<tr v-for="i in dataset" :key="i.sno">
								<td>{{ i.sno }}</td>
								<td>{{ i.name }}</td>
								<td>{{ i.email }}</td>
							</tr>
						</TransitionGroup>
					</table>
				</div>
			</div>
		</dialog>

		<!--  -->
	</main>
</template>

<style scoped>
	#quick-link {
		font-weight: 900;
	}
	@media (max-width: 722px) {
		main {
			padding-inline: 0.5rem;
		}
		#quick-link {
			font-size: 1rem;
		}
	}
	@media (max-width: 546px) {
		#quick-link {
			display: grid;
			place-items: end;
			grid-template-columns: 1fr 1fr;
			font-size: medium;
			gap: 0.5rem;
		}
	}
	.butt {
		text-decoration: none;
		color: black;
		flex-shrink: 0;
		margin-bottom: 2%;
		transition: 0.2s ease-in-out;
		cursor: pointer;
	}
	.butt:hover {
		border-bottom: 4px solid rgb(225, 12, 108);
		margin: -4px;
	}

	#lang:hover,
	#account:hover {
		animation: pop 0.3s ease-in-out;
	}

	@keyframes pop {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(0);
		}
	}
	.tableset-enter-from {
		opacity: 0;
		/* transform: scale(0); */
	}
	.tableset-leave-to {
		opacity: 0;
		transform: scale(0);
	}

	.tableset-enter-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.tableset-leave-active {
		transition: all 0.4s ease;
		position: absolute;
	}
	.tableset-move {
		transition: all 0.3s ease;
	}

	/* modals */

	.closebtn:hover {
		filter: brightness(0.8);
		padding: 10px;
	}

	table {
		border-collapse: separate;
		border-spacing: 10px 10px;
		table-layout: fixed;
	}
	th {
		font-size: large;
		text-align: start;
	}
	td {
		font-size: medium;
	}
	.tags {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.searchbox {
		padding: 20px;
		border: none;
		background-color: rgba(245, 245, 245, 0.151);
		backdrop-filter: blur(20px);
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.043);
		width: 70%;
		height: 86%;
	}
	.searchbox::backdrop {
		background: linear-gradient(45deg, rgba(255, 0, 0, 0.762), blue);
		opacity: 0.1;
	}
	.container {
		/* background-color: whitesmoke; */
		background-color: rgba(245, 245, 245, 0.151);
		display: flex;
		width: 97%;
		height: 97%;
		padding: 10px;
	}
	.lower {
		font-family: Comme;
		font-size: smaller;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.lower p {
		text-align: center;
		background-color: rgba(158, 158, 164, 0.087);
		width: 50%;
		border-radius: 20px;
		margin-bottom: 5px;
		padding: 10px;
		cursor: pointer;
	}
	.lower p:hover {
		background-color: rgba(230, 230, 237, 0.332);
	}
	.side-panel {
		display: flex;
		box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.086);
		flex-direction: column;
		align-items: center;
		padding: 10px;
		border-radius: 5px;
	}
	.main-content {
		padding: 10px;
		font-family: Raleway;
	}
	.contentd {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.portal {
		padding: 2rem;
		place-items: center;
		border: none;
		background-color: rgba(245, 245, 245, 0.151);
		backdrop-filter: blur(20px);
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.043);
	}
	.buttons {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: 1.5em;
	}
	.buttons button {
		background-color: rgba(245, 245, 245, 0.151);
		padding: 5px;
		border-radius: 15%;
		border: none;
		cursor: pointer;
		font-family: Space Grotesk;
	}
	.form {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	input {
		padding: 8px;
		border: none;
		outline: none;
		border-radius: 10px;
		background-color: rgba(245, 245, 245, 0.151);
		font-family: Space Grotesk;
	}
	.lang-selector::backdrop {
		background: linear-gradient(45deg, rgba(255, 0, 0, 0.762), blue);
		opacity: 0.1;
	}
	.portal::backdrop {
		background: linear-gradient(45deg, rgba(255, 0, 0, 0.762), blue);
		opacity: 0.1;
	}
	.lang-selector {
		place-items: center;
		border: none;
		background-color: rgba(245, 245, 245, 0.151);
		backdrop-filter: blur(20px);
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.043);
		width: fit-content;
		width: 50%;
	}
	.end {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.end button {
		background-color: rgba(0, 0, 0, 0.184);
		padding: 5px;
		border-radius: 15%;
		border: none;
		font-family: Space Grotesk;
		cursor: pointer;
	}
	.end button:hover {
		background-color: rgba(16, 14, 65, 0.3);
	}
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 5px;
		padding: 5px;
		/* border: 2px solid slateblue; */
	}
	li {
		list-style-type: none;
		padding: 5px;
		font-size: medium;
		border-radius: 10px;
		cursor: pointer;
		/* font-family: Space Grotesk; */
		font-family: Inter;
		background-color: rgba(94, 93, 93, 0.103);
	}

	li:hover {
		background-color: rgba(95, 20, 50, 0.103);
	}
	.open {
		border-bottom: 4px solid rgb(225, 12, 108);
		margin: -4px;
	}
	


</style>
