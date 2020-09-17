import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: ()=>import('../views/admin/AdminDashboard.vue')
  },
  {
    path: '/contabilidad',
    name: 'Contabilidad',
    component: ()=>import('../views/contabilidad/ContabilidadDashboard.vue')
  },
  {
    path: '/negocio',
    name: 'Negocio',
    component: ()=>import('../views/negocio/NegocioDashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin/clientes',
    name : '/ClienteLista',
    component: ()=> import('../views/admin/clientes/ClienteLista.vue')
  },
  {
    path: '/admin/cliente/nuevo',
    name : '/ClienteNuevo',
    component: ()=> import('../views/admin/clientes/ClienteNuevo.vue')
  },
  {
    path: '/admin/cliente/editar/:id',
    name : '/ClienteEditar',
    component: ()=> import('../views/admin/clientes/ClienteEditar.vue')
  },    
  {
    path: '/admin/proveedores',
    name : '/ProveedorLista',
    component: ()=> import('../views/admin/proveedores/ProveedorLista.vue')
  },
  {
    path: '/admin/proveedores',
    name : '/ProveedorLista',
    component: ()=> import('../views/admin/proveedores/ProveedorLista.vue')
  },
  {
    path: '/admin/proveedor/nuevo',
    name : '/ProveedorNuevo',
    component: ()=> import('../views/admin/proveedores/ProveedorNuevo.vue')
  },
  {
    path: '/admin/proveedor/editar/:id',
    name : '/ProveedorEditar',
    component: ()=> import('../views/admin/proveedores/ProveedorEditar.vue')
  },    


  {
    path: '/admin/productos',
    name : '/ProductoLista',
    component: ()=> import('../views/admin/productos/ProductoLista.vue')
  },
  {
    path: '/admin/producto/nuevo',
    name : '/ProductoNuevo',
    component: ()=> import('../views/admin/productos/ProductoNuevo.vue')
  },
  {
    path: '/admin/producto/editar/:id',
    name : '/ProductoEditar',
    component: ()=> import('../views/admin/productos/ProductoEditar.vue')
  },  
  {
    path: '/admin/vendedores',
    name : '/VendedorLista',
    component: ()=> import('../views/admin/vendedores/VendedorLista.vue')
  }



]

const router = new VueRouter({
  routes
})

export default router
