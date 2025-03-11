

<template>
    <div>
       <header class="cabecera">
        <h1>Cabecera</h1>
       </header>
       <main>
        <h1>contenido principal</h1>
       </main>
       <aside>
        <h1>soy el carrusel</h1>
       </aside>
       <div>
        <h1>soy el contenido final </h1>
       </div>
    </div>
</template>


<style scoped lang="scss">
    div{
        width: 100%;
        display: grid;
        grid-template-areas: 
        'header header header header header header'
        'main main main main main main'
        'aside aside aside box box box';
        grid-template-columns: repeat(6, fr);
        grid-template-rows: auto;
        .cabecera{
            width: 100%;
            grid-area: header;
            background-color: red;
        }

        main{
            grid-area: main;
            background-color: lightblue;
            height: 400px;
        }

        aside{
            grid-area: aside;
            background-color: aquamarine;
            height: 300px;
        }

        div{
            grid-area: box;
            background-color: yellow;
            height: 300px;
        }

    }
</style>