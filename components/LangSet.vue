<template>
    <main class="lang-container p-3" ref="modal" appear>
			<div class="lang-selector grid grid-cols-4 gap-5">
				<NuxtLink class="button" to="">English</NuxtLink>
				<NuxtLink class="button" to="">Hindi</NuxtLink>
				<NuxtLink class="button" to="">Marathi</NuxtLink>
				<NuxtLink class="button" to="">Bengali</NuxtLink>
				<NuxtLink class="button" to="">Telegu</NuxtLink>
				<NuxtLink class="button" to="">Tamil</NuxtLink>
				<NuxtLink class="button" to="">Urdu</NuxtLink>
				<NuxtLink class="button" to="">Gujarati</NuxtLink>
				<NuxtLink class="button" to="">Odia</NuxtLink>
				<NuxtLink class="button" to="">Kannada</NuxtLink>
				<NuxtLink class="button" to="">Malyalam</NuxtLink>
				<NuxtLink class="button" to="">Punjabi</NuxtLink>
				<NuxtLink class="button" to="">Malviye</NuxtLink>
				<NuxtLink class="button" to="">Assamese</NuxtLink>
				<NuxtLink class="button" to="">Meiti</NuxtLink>
				<NuxtLink class="button" to="">Sanskrit</NuxtLink>
            </div>
		</main>
</template>

<style scoped>
    p {
        text-transform: capitalize;
        font-size: small;
        color: #000000be;
        font-family:  Inclusive Sans;
        text-align: center;
        border-radius: 0.5rem;
        padding-inline: 0.4rem;
        cursor: pointer;
        transition: 0.2s ease;
    }
    .button {
        text-align: center;
    }
    .button:hover {
        /* background-color: rgba(230, 130, 163, 0.171); */
        background-color: white;
        transform: scale(1.1);
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.195);
    }
    p:active {
        filter: contrast(1.5);
    }

    @media (max-width: 535px) {
        .lang-selector {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (max-width: 422px) {
        .lang-selector {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>