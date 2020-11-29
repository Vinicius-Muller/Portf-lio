<template>
  <section class="wrapper">
    <p>Venha evoluir junto comigo!</p>
    
    <div class="box">
      <div class="bar"></div>
    <router-link to="/contact">Contato</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience"

}
</script>

<style scoped>

.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

p {
  width: 70%;
  color: white;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 5px;
}

.box {
  width: 20%;
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
  left: 33%;
  text-decoration: none;
}

.box:hover .bar {
  width: 100%;
}

.box:hover a {
  color: white;
}

@media screen and  (max-width:1500px) {
  a {
    left: 30%;
  }
}

@media screen and (max-width:1100px) {
  .box {
  width: 40%;
  }
  a {
    left: 35%;
  }
}

@media screen and  (max-width:890px) {
  a {
    left: 33%;
  }
}

@media screen and  (max-width:790px) {
  a {
    left: 30%;
  }

  p {
    font-size: 2rem;
  }
}

@media screen and  (max-width:590px) {
  a {
    left: 19%;
  }
}

@media screen and (max-width:485px) {
  a {
    left: 15%;
  }
}


</style>