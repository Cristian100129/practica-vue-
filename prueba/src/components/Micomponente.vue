<script setup>
import { ref, onMounted } from "vue";
import fetchUsers from "../composables/fetch";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const users = ref({});

const usuarios = async () => {
  users.value = await fetchUsers();
};

onMounted(() => {
  usuarios();
});

const modules = [EffectCoverflow, Pagination];
</script>

<template>
  <div class="contenedor">
    <h1>El animal que mas amo</h1>
    <div class="contenedor-seccion1">
      <div class="seccion1-img">
        <img src="../img/perros.jpg" alt="perro" />
      </div>
      <div class="seccion1-texto">
        <h1 class="uno">Los huskys</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum
          consequuntur dolores incidunt cumque molestias, minima est quod, id
          distinctio facere modi maxime blanditiis officia. Libero quos porro ea
          eligendi. Impedit repellendus molestiae placeat iure nam saepe porro
          mollitia facere maiores odio, sequi nesciunt fugiat asperiores neque
          adipisci recusandae velit quidem eligendi voluptatum quisquam, sunt id
          itaque accusamus? Veritatis, consequatur. Velit, magnam quisquam
          cumque asperiores repudiandae incidunt inventore sint impedit
          perferendis libero sequi eaque delectus deserunt, amet ea voluptatibus
          consequatur tempora, iusto porro exercitationem similique quaerat id
          ullam! Ex, aut! Porro temporibus nihil consequatur eaque voluptates
          consequuntur esse aperiam dicta sequi nobis quia est tempora placeat
          quibusdam incidunt qui nisi illo dolores, quae iusto? Ex deserunt
          commodi ea reiciendis debitis. Numquam odio, mollitia alias tempore
          nam id, quod facilis, inventore ab soluta sunt molestiae sit deleniti
          repellat harum laudantium totam labore debitis recusandae. Consequatur
          sed quo, voluptatibus harum error quidem. Sit, possimus debitis
          dignissimos architecto nisi libero rerum et, cupiditate quas sint enim
          recusandae vitae nihil officiis dicta in. Inventore magni praesentium
          nemo sapiente? Aliquam nostrum reprehenderit quo voluptatibus
          dignissimos.
        </p>
        <button class="btn-seccion1">conoce mas</button>
      </div>
    </div>
    <div class="contenedor-seccion2">
      <div class="seccion2-titulo">
        <h2>Nuestros clientes</h2>
        <swiper
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          class="carousel"
        >
          <swiper-slide v-for="user in users" :key="user.id">
            <div class="card">
              <img :src="user.avatar" alt="Avatar" />
              <p class="name">{{ user.name }}</p>
              <p class="email">{{ user.email }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contenedor {
  width: 100%;
  flex-basis: 50%;
}

.contenedor h1 {
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
}

.contenedor-seccion1 {
  width: 92%;
  margin-top: 50px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  flex-flow: row;
  gap: 4%;
  padding: 40px;
}

.seccion1-img {
  width: 30%;
  padding-left: 20px;
  img {
    width: 100%;
    border: 2px solid black;
    border-radius: 15px;
    transition: all 300ms;
    animation-name: imagen;
    animation-duration: 3s;
  }

  img:hover {
    transform: scale(1.1);
  }
}

.seccion1-texto {
  width: 65%;
  align-items: center;
  .uno {
    position: relative;
    top: -30px;
    text-transform: lowercase;
  }
  p {
    position: relative;
    top: -15px;
  }

  .btn-seccion1 {
    margin-left: 85%;
    padding: 15px;
    border: 2px solid black;
    border-radius: 15px;
    color: white;
    background-color: rgba(2, 54, 0, 1);
    transition: all 300ms;
    animation-name: botoncito;
    animation-duration: 5s;
    
  }

  .btn-seccion1:hover {
    background-color: rgba(202, 93, 24, 1);
  }

  @keyframes botoncito {
    0% {
      transform: translateX(100px);
    }

    50% {
      transform: translateX(-100px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes imagen {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0);
    }
  }
}
.contenedor-seccion2{
  h2{
    text-align: center;
    margin-top: 20px;
  }

  .card {
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 35%;
    width: 30%;
    height: 300px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    background: white;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.2);
    }

    img {
      margin-top: 100px;
      width: 90px;
      height: 90px;
      border-radius: 30%;
      border: 2px solid #3498db;
    }

    .name {
      font-size: 1rem;
      font-weight: bold;
      color: #333;
      margin-top: 10px;
    }

    .email {
      font-size: 0.8rem;
      color: #666;
    }
}
}
</style>
