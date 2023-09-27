<script setup>
	const searchmodal = ref(false);
	const langmodal = ref(false);
	const accmodal = ref(false);
</script>
<template>

	<Modal v-if="searchmodal">
		<div class="modal">
			<div class="content">
				<SearchDB />
			</div>
            <button @click="searchmodal = false" class="button" >Close</button>
		</div>
	</Modal>
	<Modal v-if="langmodal">
		<div class="modal">
			<div class="content">
				<LangSet />
			</div>
            <button @click="langmodal = false" class="button" >Close</button>
		</div>
	</Modal>
	<Modal v-if="accmodal">
		<div class="modal">
			<div class="content">
				<Settings />
			</div>
            <button @click="accmodal = false" class="button">Close</button>
		</div>
	</Modal>


	<main class="header flex justify-end p-10">
		<slot />
		<div id="link-container" class="flex gap-5 justify-center flex-col">
			<div class="upper-logos self-end flex gap-4 text-3xl">
				<Icon @click="searchmodal = true" id="lang" style="cursor: pointer" name="line-md:search" />
				
				<Icon
				@click="langmodal = true"
				id="lang"
				style="cursor: pointer"
				name="material-symbols:language" />
				<Icon
				@click="accmodal = true"
					id="account"
					style="cursor: pointer"
					name="ic:twotone-settings" />
			</div>
			<!-- <div id="space-saver">=</div> -->
			<div
				id="quick-link"
				class="flex flex-nowrap shrink-0 gap-8 text-2xl font-pathex items-baseline">
				<NuxtLink class="butt" to="/">Home</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/lodge">Lodge</NuxtLink>
				<NuxtLink active-class="open" class="butt" to="/dashboard"
					>Dashboard</NuxtLink
				>
				<NuxtLink active-class="open" class="butt" to="/appeal">Appeal</NuxtLink>
			</div>
		</div>

	</main>
</template>

<style scoped>
	#quick-link {
		font-weight: 900;
	}
	.modal {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;

	}
	.content {
		/* border: 2px solid black; */
		border-radius: 1rem;
		padding: 0.5rem;
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
	@media (max-width: 836px) {
		main {
			padding-inline: 0.5rem;
		}
		#quick-link {
			font-size: 1.2rem;
		}
	}
	@media (max-width: 676px) {
		#link-container {
			margin-right: 1.4rem;
		}
		#quick-link {
			/* border: 2px solid slateblue; */
			display: grid;
			place-items: end;
			grid-template-columns: 1fr 1fr;
			font-size: medium;
			gap: 0.1rem;
		}
	}
	@media (max-width: 495px) {
		#link-container {
			margin-right: 1.4rem;
			gap: 0.3rem;
		}
		.upper-logos {
			font-size: large;
		}
		#quick-link {
			/* border: 2px solid slateblue; */
			display: grid;
			place-items: end;
			grid-template-columns: 1fr 1fr;
			font-size: smaller;
			gap: 0;
		}
	}
	.button {
		box-shadow: 1px 1px 10px 2px rgba(221, 160, 221, 0.554);
	}
</style>
