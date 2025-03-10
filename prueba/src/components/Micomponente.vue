<script setup>

</script>

<template>
    <div class="contenedor">
        <h1>El animal que mas amo</h1>
        <div class="contenedor-seccion1">
            <div class="seccion1-img">
                <img src="../img/perros.jpg" alt="perro">
            </div>
            <div class="seccion1-texto">
                <h1 class="uno">Los huskys</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum consequuntur dolores incidunt cumque molestias, minima est quod, id distinctio facere modi maxime blanditiis officia. Libero quos porro ea eligendi.
                Impedit repellendus molestiae placeat iure nam saepe porro mollitia facere maiores odio, sequi nesciunt fugiat asperiores neque adipisci recusandae velit quidem eligendi voluptatum quisquam, sunt id itaque accusamus? Veritatis, consequatur.
                Velit, magnam quisquam cumque asperiores repudiandae incidunt inventore sint impedit perferendis libero sequi eaque delectus deserunt, amet ea voluptatibus consequatur tempora, iusto porro exercitationem similique quaerat id ullam! Ex, aut!
                Porro temporibus nihil consequatur eaque voluptates consequuntur esse aperiam dicta sequi nobis quia est tempora placeat quibusdam incidunt qui nisi illo dolores, quae iusto? Ex deserunt commodi ea reiciendis debitis.
                Numquam odio, mollitia alias tempore nam id, quod facilis, inventore ab soluta sunt molestiae sit deleniti repellat harum laudantium totam labore debitis recusandae. Consequatur sed quo, voluptatibus harum error quidem.
                Sit, possimus debitis dignissimos architecto nisi libero rerum et, cupiditate quas sint enim recusandae vitae nihil officiis dicta in. Inventore magni praesentium nemo sapiente? Aliquam nostrum reprehenderit quo voluptatibus dignissimos.</p>
                <button class="btn-seccion1">conoce mas</button>
            </div>
        </div>
        <div class="contenedor-seccion2">
            <div class="seccion2-titulo">
                <h2>Por que hago esta pagina</h2>
            </div>
            <div class="seccion2-carrusel">
                <ul>
                    <li>adad</li>
                    <li>fsfs</li>
                    <li>sfsfs</li>
                    <li>sfs</li>
                    <li>sfsf</li>
                    <li>sfs</li>
                    <li>sfs</li>
                    <li>sfs</li>
                    <li>sfsf</li>
                    <li>sfs</li>
                </ul>

                <ul>
                    <li>dada</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>dadadada</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contenedor{
        width: 100%;
        background-color: #ccc;
    }

    .contenedor h1{
        text-align: center;
        text-transform: uppercase;
        margin-top: 20px;
        margin-bottom: 20px; 
    }

    .contenedor-seccion1{
        width: 92%;
        margin-top: 50px;
        margin: 0 auto;
        display: flex;
        flex-grow: 1;
        flex-flow: row;
        gap: 4%;
        padding: 40px;
        border: 4px solid black;
    }

    .seccion1-img{
        width: 30%;
        padding-left: 20px;
        img{
            width: 100%;
            border: 2px solid black;
            border-radius: 15px;
            transition: all 300ms;
            animation-name: imagen;
            animation-duration: 3s;
        }

        img:hover{
            transform: scale(1.1);
        }

    }

    .seccion1-texto{
        width: 65%;
        align-items: center;
        .uno{
            position: relative;
            top: -30px;
            text-transform: lowercase;
        }
        p{
            position: relative;
            top: -15px;
        }

        .btn-seccion1{
            margin-left: 88%;
            padding: 10px;
            border: 2px solid black;
            border-radius: 15px;
            color: white;
            background-color: rgba(2,54,0,1);
            transition: all 300ms;
            animation-name: botoncito; 
            animation-duration: 5s;
        }

        .btn-seccion1:hover{
            background-color:  rgba(202,93,24,1);
        }

        @keyframes botoncito {
           0%{
            transform: translateX(50px);
           }

           25%{
            transform: scaleX(1.6);
           }

           50%{
            transform: rotate(30deg);
            transition: transform 0.5s ease-in-out;
           }

           75%{

           }

           100%{

           }
        }

        
        @keyframes imagen {
            from{
                transform: translateY(80px);
            }
            to{
                transform: translateY(0);
            }
        }
    }

    .seccion2-carrusel{
        ul > :nth-child(4){
            color: red;
        }
    }


</style>