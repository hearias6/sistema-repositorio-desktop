<template>
  <section class="flex-1 ml-56 bg-gray-900">
    <HeaderDashboard
      titulo="Productos"
      :botonRegresar="botonRegresar"
      ruta="/admin"
      :botonNuevo="botonNuevo"
      rutaNuevo="/admin/producto/nuevo"
    ></HeaderDashboard>

    <main class="pl-10 pr-2 py-2">
      <div class="w-full md:px-10 mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/5 px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              v-model="productoFiltro.titulo"
              placeholder="Nombre"
              @keydown.enter="getProductos"
            />
          </div>
          <div class="w-full md:w-1/5 px-3 text-right">
            <router-link
              to="/admin/producto/nuevo"
              class="text-white font-bold bg-green-500 rounded-full py-3 px-5 inline-block"
            >
              Nuevo
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-full md:px-10 mx-auto mt-5">

        <Mensaje v-if="productos.length == 0" descripcion='No hay registros' tipo='info'></Mensaje>

        <table class="table w-full font-sans text-white" v-if="productos.length > 0">
          <thead>
            <tr class="border border-gray-700 text-left  font-bold bg-gray-800">
              <th class="px-4 py-3">Nombre Producto</th>
              <th class="px-4 py-3">Descripcion</th>
              <th class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border border-gray-700 text-left bg-gray-800"
            v-for="item in productos" :key="item.id">
              <td class="px-4 py-3">
                  {{item.titulo}}
              </td>
              <td class="px-4 py-3">
                  {{item.descripcion}}
              </td>
              <td class="px-4 py-3">
                  <router-link :to="'/admin/producto/editar/'+item.id" class="bg-blue-500 py-2 px-4 rounded">
                      Editar
                  </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import Mensaje from "@/components/Mensaje.vue";

export default {
  name: "ProductoLista",
  data() {
    return {
      botonRegresar: true,
      botonNuevo: true,
    };
  },
  components: {
    HeaderDashboard,
    Mensaje
  },
  methods: {
    ...mapActions("productosModule", ["getProductos"]),
  },
  created() {},
  mounted() {
    console.log("productos : ", this.productos);
    console.log("producto : ", this.producto);
    console.log("productos filtro : ", this.productoFiltro);
    this.getProductos();
  },
  computed: {
    ...mapState("productosModule", ["productos", "producto", "productoFiltro"]),
  },
};
</script>