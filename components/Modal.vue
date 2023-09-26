<template>
    <main>
        <div class="modal-container">
            <slot />
        </div>
    </main>
</template>

<style scoped>
main {
    position: absolute;
    /* inset: 0; */
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    background-color: black;
    opacity: 0.6;
    z-index: 10;
    margin: 0;
}
.modal-container {
    z-index: 12;
    background-color: white;
    height: 400px;
}
</style>