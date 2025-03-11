

<template>
    <div class="person">
       <main>
        ndnd
       </main>
       <div class="cajas">
        <div class="box">
            soy la caja
        </div>
        <div class="box">
            soy la caja
        </div>
       </div>
    </div>
</template>


<style scoped lang="scss">
.person{
    width: 100%;  
    main{
        width: 90%;
        margin: 0 auto;
        height: 500px;
        border: 2px solid black;
        margin-top: 25px;
        margin-bottom: 30px;
    }
    .cajas{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 30px;
        padding-bottom: 20px;
        
    }
    .box{
        margin-left: 8px;
        flex-basis: 44%;
        border: 2px solid black;
        border-radius: 15px;
        box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.5);
        background-color: white;
        height: 300px;
        transition: all 300ms;
    }

    .box:hover{
        transform: translateY(3px);
    }
}
</style>