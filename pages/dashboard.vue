<template>
	<div class="main-container grid place-items-center w-full text-3xl font-spacegro min-h-screen">
		<div class="main-greet flex flex-col items-center gap-10">
            <Icon size="200" name="codicon:account" />
			<h1>Your Name</h1>
		</div>
		<div class="table text-center">
			<h3><u>Stats</u></h3>
			<br>
			<Icon size="50" name="uiw:table" />
			<!-- <Icon size="50" name="teenyicons:table-solid" /> -->
		</div>
	</div>
</template>

<style scoped>
	.heading {
		display: grid;
		grid-template-rows: 1fr 1fr;
		place-items: center;
		border: 2px solid slateblue;
	}
	h1 {
		font-family: Rubik;
		font-weight: 900;
		font-size: x-large;
		/* text-shadow: 0 0 3px #2d292992; */
		text-shadow: 0 0 3px #2d29293d;
	}
</style>
