<template>
  <section class="wrapper">
    <Form />
      
    <div class="icon-box">
      <router-link class="icons" to="">
        <img src="@/assets/icons/linkedin.svg" alt="Entre em contato no Linked in">
      </router-link>

      <router-link class="icons" to="">
        <img src="@/assets/icons/twitter.svg" alt="Entre em contato no Twitter">
      </router-link>

      <router-link class="icons" to="">
        <img src="@/assets/icons/whatsapp.svg" alt="Entre em contato no whatsapp">
      </router-link>
    </div>
  </section>
</template>

<script>
import Form from "@/components/Form.vue"

export default {
  name: "Contact",
  components: {
    Form
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
  align-items: center;
  justify-content: space-between;
}

.icon-box {
  display: flex;
  width: 40%;
}

.icon-box .icons img {
  width: 100px;
  height: 100px;
  margin:20px;
}

@media screen and (max-width:1100px) {
  .wrapper {
    flex-direction: column;
  }
  .icon-box {
    width: 90%;
    justify-content: space-evenly;
  }
}

@media screen and (max-width:485px) {
  .icon-box .icons img {
    width: 50px;
    height: 50px;
  }
}

</style>