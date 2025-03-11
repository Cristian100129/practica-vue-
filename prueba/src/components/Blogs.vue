
<template>
    <div>
        <aside>
            <h1>Barra lateral</h1>
        </aside>
        <main>
            <h2>Pagina principal</h2>
        </main>
    </div>
</template>

<style scoped lang="scss">
div{
    display: flex;
    flex-flow: row;
    flex-grow: 1;
    width: 100%;
    height: 100vh;
    main{
        display: flex;
        flex-basis: 100%;
        background-color: black;
    }
    aside{
        display: flex;
        flex-basis: 30%;
        background-color: yellow;
    }
}
</style>