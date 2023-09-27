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
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* place-items: center; */
    background-color: rgba(0, 0, 0, 0.832);
    z-index: 10;
    margin: 0;
}
.modal-container {
    margin-top: 10%;
    z-index: 12;
    background-color: white;
    height: fit-content;
    width: fit-content;
    padding: 1rem;
    border-radius: 1rem;
}
</style>