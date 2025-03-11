<template>
    <div class="container">
        <header class="header">
        <div class="header-img">
            <router-link to="/">
                <img src="../assets/vue.svg" alt="Vue">
            </router-link>
        </div>
        <nav class="header-items">
            <ul class="items-list">
                <router-link to="/">Inicio</router-link>
                <router-link to="/blogs">Blogs</router-link>
                <router-link to="/juegos">Juegos</router-link>
                <router-link to="personas">Personas</router-link>
                <router-link to="peliculas">Peliculas</router-link>
            </ul>
        </nav>
    </header>
    <router-view/>
    </div>
</template>
<style scoped lang="scss" >
.container{
    width: 100%;
    height: auto;
    background-color: #ccc;
    .header{
        display: flex;
        flex-flow: row wrap;
        flex-grow: 1;
        justify-content: space-between;
        padding: 10px;
        background: linear-gradient(90deg, rgba(2,54,0,1) 22%, rgba(202,93,24,1) 72%);
    }
    .header-img img{
        width: 53px;
        padding-left: 100%;
    }

    .header-items{
        padding-right: 10%;
        line-height: 50px;
        font-size: 20px;
    }

    .items-list  {
       display: flex;
       gap: 50px; 
    }
   
    .items-list a{
        text-decoration: none;
        color: white;
        transition: all 300ms;
    }


    .items-list a:hover{
        background-color: rgba(2,54,0,1);
        border-radius: 5px;
        transform: scale(1.1);
        padding: 3px;
    }
}
</style>
