<template>
  <div id="projects" class="wrapper">
    <h1 class="title">Projects</h1>
    <div class="spacer"></div>
    <section class="content">
      <div v-for="(project, index) in projects.projects" :key="index">
        <div class="img-box">
          <img class="background" :src="require(`@/assets/projects/${project.backgroundImage}`)" :alt="project.projectDescription">
          <img class="project" :src="require(`@/assets/projects/${project.projectImage}`)" :alt="project.projectDescription" >
          <img class="framework" :src="require(`@/assets/icons/${project.frameworkImage}`)" :alt="project.frameworkName" >
          <div class="button-box">
          <div class="box">
            <div class="bar"></div>
              <a :href="`${project.link}`">Take a look</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Portfolio",
  computed:{
    ...mapState(["projects"])
  }
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
  padding-top: 20px;
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
  width: 400px;
  height:500px;
  position: relative;
  cursor:pointer;
  box-shadow: 0 8px 16px rgba(0,0,0,0.8);
  border-radius: 10px;
}

.img-box .background {
  position: absolute;
  height:100%;
  width:100% ;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
  border-radius: 10px;
}

.img-box .project {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 50%;
  left: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity:0;
}


.img-box:hover .project {
  top: 30%;
  opacity:1;
}

.img-box .framework {
  position: relative;
  height: 100px;
  width: 100px;
  top: 60%;
  left: 40%;
  transition: 0.3s;
  opacity: 0;
}
.img-box:hover .framework {
  top: 75%;
  transition: 0.3s ease-in-out;
  opacity: 1;
}

.button-box {
  display: flex;
  justify-content: center;
  top: 65%;
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
  top: 6%;
  left: 25%;
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
    left: 33%;
    top: 75%;
  }

  .button-box {
    top:65%;
  }

  .button-box .box a {
    font-size: 1.5rem;
    top: 10%;
    left: 18%;
  }
}

</style>