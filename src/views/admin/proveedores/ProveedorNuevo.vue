<template>
  <section class="flex-1 ml-56 bg-gray-900">
    <HeaderDashboard titulo="Nuevo proveedor" :botonRegresar="botonRegresar" ruta="/admin/proveedors"></HeaderDashboard>

    <main class="pl-10 pr-2 py-2">
      <div class="w-full max-w-lg mx-auto">

        <!-- 
        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="codigo"
            >Codigo</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="codigo"
              type="text"
              v-model="proveedor.codigo"
              placeholder="Ingresar"
            />
          </div>
        </div>
         -->

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
              v-model="proveedor.nombre"
              placeholder="Ingresar Nombre"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="celular"
            >Celular</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="celular"
              type="text"
              v-model="proveedor.celular"
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
              v-model="proveedor.estado"
            >
              <option value="1" selected>Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="ciudad"
            >Ciudad</label>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="ciudad"
              v-model="proveedor.ciudad"
            >
              <option value="1" selected>Cali</option>
              <option value="2">Tulua</option>
            </select>
          </div>
        </div>                

        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="barrio"
            >Barrio</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="barrio"
              type="text"
              v-model="proveedor.barrio"
              placeholder="Ingresar"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="direccion"
            >Direccion</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="direccion"
              type="text"
              v-model="proveedor.direccion"
              placeholder="Ingresar"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="negocio"
            >Negocio</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              id="negocio"
              type="text"
              v-model="proveedor.negocio"
              placeholder="Ingresar"
            />
          </div>
        </div>                        

        <div class="flex flex-wrap -mx-3 mb-1">
          <button
            @click="newProveedor(proveedor)"
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
  name: "proveedorEditar",
  data() {
    return {
      botonRegresar: true,
    };
  },
  components: {
    HeaderDashboard,
  },
  methods: {
    ...mapActions("provedoresModule", ["newProveedor"]),
    ...mapMutations("provedoresModule", ["clearProveedor"]),
  },
  computed: {
    ...mapState("provedoresModule", ["proveedor"]),
  },
  mounted() {
    console.log('proveedor : ', this.proveedor);
  },
  created() {
    this.clearProveedor();
  },
};
</script>