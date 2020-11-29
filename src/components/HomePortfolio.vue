<template>
  <div class="wrapper">

    <h1>Projetos</h1>

    <div class="spacer"></div>

    <section class="portfolio">

      <img class="image1" src="@/assets/projects/ranek.png" alt="Projeto Ranek">

      <img class="image2" src="@/assets/projects/happy.png" alt="Projeto Happy">

      <img class="image3" src="@/assets/projects/techno.png" alt="Projeto Techno">

      <img class="image4" src="@/assets/projects/proffy.png" alt="Projeto proffy">

    </section> 
  </div>
</template>

<script>
export default {
  name: "HomePortfolio"

}
</script>

<style scoped>

.wrapper {

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.wrapper h1 {
  color: white;
  padding-bottom: 5px;
  font-size: 2.5rem;
}

.wrapper .spacer {
  width:210px;
  height:5px;
  background: white;
  margin-bottom: 50px;
}

.portfolio {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "image1 image2"
  "image3 image4";
  grid-gap: 20px;
  max-width: 100%;
}

.portfolio .image1 {
  grid-area: image1;
  width: 500px;
  border-radius: 4px;
  transition: all 0.2s;
}

.portfolio .image1:hover {
  transform: scale(1.1);
  z-index: 1;
}

.portfolio .image2 {
  grid-area: image2;
  width: 500px;
  border-radius: 4px;
  transition: all 0.2s;
}

.portfolio .image2:hover {
  transform: scale(1.1);
  z-index: 1;
}

.portfolio .image3 {
  grid-area: image3;
  width: 500px;
  border-radius: 4px;
  transition: all 0.2s;
}

.portfolio .image3:hover {
  transform: scale(1.1);
  z-index: 1;
}

.portfolio .image4 {
  grid-area: image4;
  width: 500px;
  border-radius: 4px;
  transition: all 0.2s;
}

.portfolio .image4:hover {
  transform: scale(1.1);
  z-index: 1;
}

@media screen and (max-width:1100px) {
  .portfolio {
    display:flex;
    flex-direction: column;
  }
}

@media screen and (max-width:485px) {
  .portfolio img {
    width: 400px !important;
  }
}

</style>