import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsPage from '../views/Projects.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior() {
    setTimeout(()=> {
      
    return window.scrollTo({top:0, behavior: "smooth" })
    },300)
  }
})

export default router
