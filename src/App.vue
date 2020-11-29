<template>
  <div id="app">

    <Header />

    <router-view/>

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

</style>
