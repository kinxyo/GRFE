<script setup>
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
	<main>
		<div
			style="position: absolute; top: 0; left: 0; width: 60vh; height: 60vh"
			class="logo">
			<img src="/logo.png" />
		</div>
		<div class="menu">
			<div class="options">
				<!-- <Icon style="cursor: pointer;" name="mdi:language-box" /> -->
				<Icon
					id="lang"
					@click="search.showModal()"
					style="cursor: pointer"
					name="line-md:search" />
				<Icon
					id="lang"
					@click="modal.showModal()"
					style="cursor: pointer"
					name="material-symbols:language" />
				<Icon
					id="account"
					@click="login.showModal()"
					style="cursor: pointer"
					name="material-symbols:account-circle" />
			</div>
			<div class="more-options">
				<NuxtLink class="butt" to="/">Home</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/contact"
					>Dashboard</NuxtLink
				>
				<NuxtLink active-class="open" class="butt" to="/about"
					>Lodge</NuxtLink
				>
				<NuxtLink active-class="open" class="butt" to="/faq">Appeal</NuxtLink>
			</div>
		</div>

		<!-- modals -->
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
	img {
		/* aspect-ratio: 1/1; */
		height: 100%;
		width: 100%;
		/* border: 2px solid orangered; */
		/* height: 45%; */
		/* width: 25%; */
		margin-left: 10%;
		/* top: 50%; */
		top: -14%;
		position: relative;
	}
	.closebtn:hover {
		filter: brightness(0.8);
		padding: 10px;
	}

	table {
		border-collapse: separate;
		border-spacing: 10px 10px;
		table-layout: fixed;
		/* border: 2px solid green; */
		/* height: 100% */
		/* display: grid; */
		/* gap: 5em; */
	}
	th {
		font-size: large;
		/* position: fixed; */
		/* width: 60%; */
		/* border: 2px solid slateblue; */
		text-align: start;
	}
	td {
		font-size: medium;
		/* position: absolute; */
	}
	.tags {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.searchbox {
		padding: 20px;
		border: none;
		/* border: 0.1px solid rgba(90, 94, 205, 0.467); */
		background-color: rgba(245, 245, 245, 0.151);
		backdrop-filter: blur(20px);
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.043);
		/* width: fit-content; */
		width: 70%;
		height: 86%;
	}
	.searchbox::backdrop {
		/* background: linear-gradient(45deg, rgba(255, 0, 0, 0.762), blue); */
		background: linear-gradient(45deg, black, white);
		opacity: 0.2;
	}
	.container {
		/* background-color: whitesmoke; */
		background-color: rgba(245, 245, 245, 0.151);
		display: flex;
		width: 97%;
		height: 97%;

		/* display: grid; */
		/* gap: 3rem; */
		/* grid-template-columns: 1fr 1fr; */
		padding: 10px;
		/* grid-template-columns: 20% 80%; */
	}
	.lower {
		font-family: Comme;
		font-size: smaller;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		/* border: 2px solid slateblue; */
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
		/* border-right: 2px solid black; */
		display: flex;
		box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.086);
		flex-direction: column;
		align-items: center;
		padding: 10px;
		/* width: fit-content; */
		border-radius: 5px;
		/* justify-content: center; */
		/* border: 2px solid slateblue; */
	}
	.main-content {
		/* border: 2px solid green; */
		padding: 10px;
		/* font-family:  Comme; */
		font-family: Raleway;
	}
	.contentd {
		display: flex;
		flex-direction: column;
		gap: 1em;
		/* border: 2px solid slateblue; */
	}
	.portal {
		padding: 2rem;
		place-items: center;
		border: none;
		background-color: rgba(245, 245, 245, 0.151);
		backdrop-filter: blur(20px);
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.043);
		/* width: fit-content; */
		/* width: 20%; */
	}
	.buttons {
		display: flex;
		justify-content: center;
		/* border: 2px solid green; */
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
		background: linear-gradient(45deg, black, white);
		opacity: 0.2;
		/* background: linear-gradient(45deg, rgba(255, 0, 0, 0.762), blue); */
		/* opacity: 0.1; */
	}
	.portal::backdrop {
		background: linear-gradient(45deg, black, white);
		opacity: 0.2;
		/* background: linear-gradient(45deg, rgba(255, 0, 0, 0.762), blue); */
		/* opacity: 0.1; */
	}
	.lang-selector {
		place-items: center;
		border: none;
		/* border: 0.1px solid rgba(90, 94, 205, 0.467); */
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
	.menu {
		margin-top: 3%;
		display: flex;
		flex-direction: column;
		width: fit-content;
		gap: 5px;
		/* border: 2px solid orange; */
		/* margin-right: 10px; */
		/* border: 2px solid green; */
		margin-right: 2%;
		flex-shrink: 0;
	}
	.options {
		/* border: 2px solid green; */
		font-size: xx-large;
		align-self: end;
		display: flex;
		gap: 1rem;
		margin-right: 2%;
		margin-top: 2%;
	}
	main {
		/* z-index: 2; */
		/* border: 2px solid slateblue; */
		height: 20vh;
		padding: 10px;
		/* width: vw; */
		background-color: transparent;
		display: flex;
		justify-content: flex-end;
		/* justify-content: space-between; */
		/* border-bottom: 2px solid green; */
		/* gap: 1em; */
	}
	.more-options {
		/* border: 2px solid slateblue; */
		margin-right: 2.5%;
		padding: 10px;
		display: flex;
		align-items: last baseline;
		gap: 1.5em;
		font-weight: 900;
		font-family: Pathway Extreme;
		font-size: 25px;
		flex-shrink: 0;
		/* flex-grow: 1; */
		z-index: 2;
	}
	.open {
		border-bottom: 4px solid rgb(225, 12, 108);
		margin: -4px;
	}
	.butt {
		/* border: 2px solid slateblue; */
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

	/* media queries */
	@media (max-width: 964px) {
		img {
			height: 50%;
			width: 50%;
			top: 0;
		}
	}

	@media (max-width: 866px) {
		.menu {
			display: flex;
			flex-direction: column-reverse;
			/* border: 2px solid slateblue; */
			/* align-items: start; */
			justify-content: center;
		}
		.more-options {
			font-size: smaller;
		}
	}
	
	@media (max-width: 648px) {
		img {
			height: 30%;
			width: 30%;
			bottom: 0;
		}
	}
	
	@media (max-width: 506px) {
		.more-options {
			display: flex;
			flex-direction: column;
			margin-top: 10px;
		}
	}
</style>
