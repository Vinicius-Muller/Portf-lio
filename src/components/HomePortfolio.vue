<template>
  <div id="projects" class="wrapper">
    <h1 class="title">Projects</h1>
    <div class="spacer"></div>
    <section class="content">
      <div class="img-box ranek">
        <img class="project" src="@/assets/projects/ranek.png" alt="Ranek was a project made on vue.js">    
        <img class="framework" src="@/assets/icons/vue.png" alt="Vue">
        <div class="button-box">
          <div class="box">
            <div class="bar"></div>
              <router-link to="/contact">Take a look</router-link>
            </div>
          </div>
        </div>

      <div class="img-box happy">
        <img class="project" src="@/assets/projects/happy.png" alt="Happy was a project made on React.js">    
        <img class="framework" src="@/assets/icons/react.svg" alt="React">
        <div class="button-box">
          <div class="box">
            <div class="bar"></div>
              <router-link to="/contact">Take a look</router-link>
            </div>
          </div>
      </div>

      <div class="img-box techno">
        <img class="project" src="@/assets/projects/techno.png" alt="Techno was a project made on Vue.js">    
        <img class="framework" src="@/assets/icons/vue.png" alt="Vue">
        <div class="button-box">
          <div class="box">
            <div class="bar"></div>
              <router-link to="/contact">Take a look</router-link>
            </div>
          </div>
      </div>

      <div class="img-box proffy">
        <img class="project" src="@/assets/projects/proffy.png" alt="Proffy was a project made on React.js">    
        <img class="framework" src="@/assets/icons/react.svg" alt="React">
        <div class="button-box">
          <div class="box">
            <div class="bar"></div>
              <router-link to="/contact">Take a look</router-link>
            </div>
          </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
.wrapper {
  background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url("../assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.title {
  color:white;
  font-size: 2.5rem;
  padding-bottom: 5px;
}

.spacer {
  width:150px;
  height: 5px;
  background: white;
  margin-bottom: 20px;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "ranek happy"
  "techno proffy";
  grid-gap: 200px;
  max-width: 90%;
  margin-top: 50px;
  padding-bottom: 60px;
}

.img-box {
  width: 450px;
  height:600px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  cursor:pointer;
  box-shadow: 0 8px 16px rgba(0,0,0,0.8);
  border-radius: 10px;
}


.img-box.ranek {
  grid-area: ranek;
    background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url("../assets/projects/ranek-call.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  }

.img-box.ranek:hover .framework {
  top: 75%;
  opacity: 1;
}


.img-box.ranek:hover .project {
  top:30%;
}


.img-box.happy {
  grid-area: happy;
  background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url("../assets/projects/happy-call.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.img-box.happy:hover .framework {
  top: 75%;
  opacity: 1;
}

.img-box.happy:hover .project {
  top:30%;
}

.img-box.techno {
  grid-area: techno;
  background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url("../assets/projects/techno-call.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.img-box.techno:hover .framework {
  top: 75%;
  opacity: 1;
}

.img-box.techno:hover .project {
  top:30%;
}

.img-box.proffy {
  grid-area: proffy;
  background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url("../assets/projects/proffy-call.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.img-box.proffy:hover .framework {
  top: 75%;
  opacity: 1;
}

.img-box.proffy:hover .project {
  top:30%;
}

.img-box .project {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 40%;
  left: 0;
  right: 0;
  transition: 0.3s ease-in-out;
}

.img-box .framework {
  position: relative;
  height: 100px;
  width: 100px;
  opacity: 0;
  top: 55%;
  left: 40%;
  transition: 0.3s ease-in-out;
}

.button-box {
  display: flex;
  justify-content: center;
  top: 70%;
  position: relative;
}

.box {
  width: 70%;
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
  width: 100%;
  top: 5%;
  left: 23%;
  text-decoration: none;
}

.box:hover .bar {
  width: 100%;
}

.box:hover a {
  color: white;
}

@media screen and (max-width:1200px) {
  .content {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width:485px) {
  .content .img-box {
    width: 300px;
    height: 500px ;
  }

  .content .img-box .framework {
    left: 33%; ;
  }

  .button-box {
    top:65%;
  }

  .button-box .box a {
    font-size: 1.5rem;
    top: 10%;
    left: 16%;
  }
}

</style>