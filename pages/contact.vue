<template>
    <main>

        <div class="text">
            <div class="heading">
            <Icon size="200" name="fa6-solid:child-reaching" />
			<h1>Contact Us</h1>
		</div>
		<p>
			You can reach us @ somewhere .
		</p>
	</div>
    </main>
</template>

<style scoped>
	.text {
		display: grid;
        place-items: center;
		/* border: 2px solid slateblue; */
		width: 100%;
        height: 100%;
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
</style>
