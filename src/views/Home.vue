<template>
  <div class="home">

    <div class="headline">

      <div class="title-box">
        <p>Web Developer</p>
        <h1>Vinícius Muller</h1>
        <div class="box">
        <div class="bar"></div>
        <a href="#projects">Projetos</a>
    </div>
      </div>

    </div>

    <div class="body-wrapper">
    <Skills />

    <HomePortfolio />


    <Experience />
    </div>

  </div>
</template>

<script>

import Skills from "@/components/Skills.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import Experience from "@/components/Experience.vue";

export default {
  name: 'Home',
  components: {
    HomePortfolio,
    Skills,
    Experience
  },
}
</script>

<style scoped>

.home .headline {
  background: url("../assets/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 95vh;
}

.home .headline .title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  height: 100%;
}

.home .headline .title-box h1 {
  color:white;
  font-size:60px;
  text-align: center;
}

.home .headline .title-box p {
  color: #ec5b53;
  font-size: 25px;
  text-align: center;
}

.body-wrapper {
  background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url("../assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}


.box {
  width: 40%;
  height:50px;
  position: relative;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 50px;
}

.bar {
  position: absolute;
  width: 0%;
  height: 100%;
  background: #ec5b53;
  transition: 0.3s;
  border-radius: 8px;
}

a {
  position: absolute;
  z-index: 1;
  color: #ec5b53;
  font-size: 1.7rem;
  top: 5%;
  left: 28%;
  text-decoration: none;
}

.box:hover .bar {
  width: 100%;
}

.box:hover a {
  color: white;
}


@media screen and (max-width:1100px) {
  .home .headline {
    display:flex;
    justify-content: center;
  }

  a {
    left: 22%;
  }
}


@media screen and (max-width:485px) {
  .home .headline .title-box h1 {
    font-size: 2.8rem;
  }

  a {
    left: 12%;
  }
}
</style>