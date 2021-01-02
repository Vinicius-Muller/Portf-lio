<template>

  <div class="header">

    <router-link to="/">
      <img class="logo" src="@/assets/logo.png" alt="Vinícius Muller">
    </router-link>

    <nav class="nav-web">
      <ul>
        <li id="navs">
          <a href="http://www.viniciusmuller.com.br/curriculo/viniciusMullerResume.pdf" target="_blank">Resume</a>
        </li>

        <li id="navs">
          <router-link to="/projects">Projects</router-link>
        </li>

        <li id="navs">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <img @click="handleShow" class="open" src="@/assets/icons/menuteste.svg" alt="menu">

    <div :class="{show}" class="menu-box">
      <img @click="handleHide" class="close" src="@/assets/icons/menuteste.svg" alt="menu">

      <nav class="nav-mobile">
             <ul>

        <li id="navs">
          <router-link to="/projects">Projects</router-link>
        </li>

        <li id="navs">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      </nav>
    </div>
  </div>

</template>

<script>

export default {
  name: "Header",
  
  data() {
    return {
    show: false
    }
  },

  methods: {
    handleShow() {
      this.show = true;
    },
    handleHide() {
      this.show = false
    }
  },

  mounted() {
    let MobileNavs = document.querySelectorAll("li#navs")
    let logo = document.querySelector("img.logo")
    let projects = document.querySelector(".box")

    window.onscroll = () => {
        this.show = false
      }

      projects.addEventListener("click", () => {
        this.show = false
      })
      
      logo.addEventListener("click", () => {
        this.show = false
      });
      MobileNavs.forEach(MobileNavs => {
        MobileNavs.addEventListener("click", () => {
          this.show = false
        })
      })
      logo.addEventListener("click", ()=> {
       window.scrollTo({top:0, behavior: "smooth" })
      })
    }
}
</script>

<style scoped>

.menu-box.show {
  transform: translateX(0%);
  z-index: 2;
}

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  position: fixed;
  overflow: hidden;
  z-index: 3;
}

.header .logo {
  border-radius: 40px;
  height:60px;
  width: 60px;
  margin-left: 100px;
}

.header .nav-web {
  display: flex;
  align-items: center;
  margin-right: 100px;
}

.header .nav-web ul {
  display: flex;
  list-style: none;
}

.header .nav-web ul li {
  padding: 20px;
  transition: 1.3s;
}

.header .nav-web ul li a {
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.header .nav-web ul li a:hover {
  color:#ec5b53;
}
a.router-link-exact-active {
  color:#ec5b53;
}

.header .nav-mobile ul {
  list-style: none;
}

.header .nav-mobile ul li a {
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
  color: #ec5b53;
}

.header .nav-mobile ul li a:hover {
  color:#000;
}

.open {
  width:50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  border-radius:60%;
  border: 1px solid white;
  position: absolute;
  right: 50px;
  display: none;
}

.menu-box {
  transform: translateX(+400%);
  transition: 0.3s ease-in-out;
  position: absolute;
  display: none;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: white;
  width: 300px;
  height: 60vh;
  top:0;
  right: 0;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.7);
  border-radius: 2px;
}

.menu-box .close {
  width:50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  position: absolute;
  top: 25px;
  right: 50px;
}

.nav-mobile ul li {
  list-style:none;
  padding:30px;
  font-size: 1.7rem;
  color:#000;
}





@media screen and (max-width:1100px) {
  .header {
    overflow: visible;
  }

  .header .nav-web {
    display: none;
  }

  .open {
    display: block;
  }

  .menu-box {
    display: flex;
  }
}

@media screen and (max-width:485px) {
  .header a .logo {
    margin-left: 50px;
  }
}
</style>