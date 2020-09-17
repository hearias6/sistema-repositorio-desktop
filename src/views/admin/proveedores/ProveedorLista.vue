<template>
  <section class="flex-1 ml-56 bg-gray-900">
    <HeaderDashboard
      titulo="proveedores"
      :botonRegresar="botonRegresar"
      ruta="/admin"
      :botonNuevo="botonNuevo"
      rutaNuevo="/admin/proveedor/nuevo"
    ></HeaderDashboard>

    <main class="pl-10 pr-2 py-2">
      <div class="w-full md:px-10 mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/5 px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              v-model="proveedorFiltro.nombre"
              placeholder="Nombre"
              @keydown.enter="getProveedores"
            />
          </div>
          <div class="w-full md:w-2/5 px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              v-model="proveedorFiltro.codigo"
              placeholder="Codigo "
            />
          </div>
          <div class="w-full md:w-1/5 px-3 text-right">
            <router-link
              to="/admin/proveedor/nuevo"
              class="text-white font-bold bg-green-500 rounded-full py-3 px-5 inline-block"
            >
              Nuevo
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-full md:px-10 mx-auto mt-5">
         
        <Mensaje v-if="proveedores.length == 0" descripcion='No hay registros' tipo='info'></Mensaje>

        <table class="table w-full font-sans text-white" v-if="proveedores.length > 0">
          <thead>
            <tr class="border border-gray-700 text-left  font-bold bg-gray-800">
              <th class="px-4 py-3">Código</th>
              <th class="px-4 py-3">Nombre proveedor</th>
              <th class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border border-gray-700 text-left bg-gray-800"
            v-for="customer in proveedores" :key="customer.id">
              <td class="px-4 py-3">
                  {{customer.codigo}}
              </td>
              <td class="px-4 py-3">
                  {{customer.nombre}}
              </td>
              <td class="px-4 py-3">
                  <router-link :to="'/admin/proveedor/editar/'+customer.id" class="bg-blue-500 py-2 px-4 rounded">
                      Editar
                  </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 
      <div
        class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10"
      >
        <CustomerCardList
          v-for="customer in proveedores"
          :key="customer.id"
          :name="customer.nombre"
          :id="customer.id"
        ></CustomerCardList>
      </div>
      -->
    </main>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import Mensaje from "@/components/Mensaje.vue";
// import CustomerCardList from "@/components/CustomerCardList.vue";

export default {
  name: "proveedorLista",
  data() {
    return {
      botonRegresar: true,
      botonNuevo: true,
    };
  },
  components: {
    HeaderDashboard,
    Mensaje
    //CustomerCardList,
  },
  methods: {
    ...mapActions("provedoresModule", ["getproveedores"]),
  },
  created() {},
  mounted() {
    console.log("proveedores : ", this.proveedores);
    console.log("proveedor : ", this.proveedor);
    console.log("proveedores filtro : ", this.proveedorFiltro);
    console.log('tareas : ', this.tareas);
    this.getproveedores();
  },
  computed: {
    ...mapState("provedoresModule", ["tareas","proveedores","proveedor","proveedorFiltro"]),
  },
};
</script>