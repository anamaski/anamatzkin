import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Reptiles from '../views/Reptiles.vue'
import Anfibios from '../views/Anfibios.vue'
import Aracnidos from '../views/Aracnidos.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/reptiles', component: Reptiles },
  { path: '/anfibios', component: Anfibios },
  { path: '/aracnidos', component: Aracnidos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router