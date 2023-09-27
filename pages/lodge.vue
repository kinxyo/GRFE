<template>
	<div class="main-container grid place-items-center w-full text-3xl font-spacegro min-h-screen">
		<div class="main-greet flex flex-col items-center gap-10">
            <Icon size="200" name="fluent-emoji:robot" />
			<h1>AI Chatbot</h1>
		</div>
			<Button>LODGE</button>
	</div>
</template>

<style scoped>
	h1 {
		font-family: Rubik;
		font-weight: 900;
		font-size: x-large;
		text-shadow: 0 0 3px #2d29293d;
	}
	button {
		padding: 7px;
		font-family: Poppins;
		margin-inline: 0.5rem;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.093);
		transition: 0.1s ease;
		backdrop-filter: blur(20px);
		border-radius: 0.4rem;
		cursor: pointer;
	}
	button:hover {
		background-color: rgba(0, 0, 0, 0.055);
	}
</style>
