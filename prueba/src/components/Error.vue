<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const RegresarInicio = () => {
  router.push("/home");
};
</script>

<template>
  <div class="err">
    <div class="error">
      <div class="error-1">
        <h1>Error pagina no encontrada</h1>
        <p>
          Lo lamentamos se que quieres buscar otra url pero no hay mas jajaja te
          toca volver a la pantalla de inicio
        </p>
        <button @click="RegresarInicio">Regresar a inicio</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.err {
  width: 100%;
  height: 67vh;
  background-color: #ccc;
  .error {
    width: 70%;
    height: 300px;
    margin: 0 auto;
    margin-top: 150px;
    text-align: center;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 15px; 
    .error-1{
        position: relative;
        width: 100%;
        height: 200px;
        top: 50px;
        margin: 0 auto;
        line-height: 60px;

        button{
            padding: 15px;
            background-color: rgba(2,54,0,1);
            color: white;
            border: 2px solid black;
            border-radius: 15px;
            transition: all 300ms; 
            animation-name: error;
            animation-duration: 5s;
        }

        button:hover{
            background-color: rgba(202,93,24,1);
            transform: scale(1.1);
        }

        @keyframes error {
            0%{
                transform: translateY(70px);
            }

            50%{
                transform: scale(0.8);
            }

            100%{
                transform: rotateY(0px);
            }
        }

    }
  }
}
</style>
