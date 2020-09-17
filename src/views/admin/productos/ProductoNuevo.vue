<template>
  <section class="flex-1 ml-56 bg-gray-900">
    <HeaderDashboard titulo="Nuevo Producto" :botonRegresar="botonRegresar" ruta="/admin/productos"></HeaderDashboard>

    <main class="pl-10 pr-2 py-2">
      <div class="w-full max-w-lg mx-auto">

        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="nombre"
            >Nombre</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="nombre"
              type="text"
              v-model="producto.titulo"
              placeholder="Ingresar Nombre"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="descripcion"
            >Descripcion</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="descripcion"
              type="text"
              v-model="producto.descripcion"
              placeholder="Ingresar"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="estado"
            >Estado </label>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="estado"
              v-model="producto.estado"
            >
              <option value="1" selected>Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
        </div>
                

        <div class="flex flex-wrap -mx-3 mb-1">
          <button
            @click="newProducto(producto)"
            class="bg-green-500 py-3 px-5 rounded-full text-white font-bold"
          >Guardar</button>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "ProductoEditar",
  data() {
    return {
      botonRegresar: true,
    };
  },
  components: {
    HeaderDashboard,
  },
  methods: {
    ...mapActions("productosModule", ["newProducto"]),
    ...mapMutations("productosModule", ["clearProducto"]),
  },
  computed: {
    ...mapState("productosModule", ["producto"]),
  },
  created() {
    this.clearProducto();
  },
};
</script>