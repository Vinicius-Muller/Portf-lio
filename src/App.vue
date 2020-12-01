<template>
  <div id="app">

    <Header />
    <transition mode="out-in">

    <router-view/>

    </transition>
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
   box-sizing: border-box;
 }

 body {
   background-color: #000;
 }

html,body, h1, h2, p, ul, li {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
}

a {
  color: white;
}

.v-enter, .v-leave-to {
    opacity: 0;
  }

  .v-enter.active, .v-leave-active {
    opacity: 0;
    transition: ease-in-out 0.3s;
  }


</style>
