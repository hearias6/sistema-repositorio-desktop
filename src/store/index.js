import Vue from 'vue'
import Vuex from 'vuex'


import clientesModule from '../modules/clientes.module'
import productosModule from '../modules/productos.module'
import provedoresModule from '../modules/proveedores.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    clientesModule,
    productosModule,
    provedoresModule
  }
})
