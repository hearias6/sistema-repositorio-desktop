<template>
  <section class="flex-1 ml-56 bg-gray-900">
     
    <HeaderDashboard titulo="Modulo Admin" :botonRegresar="botonRegresar"></HeaderDashboard>

    <main class="px-10 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <CardDashboard titulo="clientes" ruta="/admin/clientes"></CardDashboard>
      <CardDashboard titulo="proveedores" ruta="/admin/proveedores"></CardDashboard>
      <CardDashboard titulo="vendedores" ruta="/admin/vendedores"></CardDashboard>
      <CardDashboard titulo="productos" ruta="/admin/productos"></CardDashboard>
    </main>


  </section>
</template>

<script>
import CardDashboard from '@/components/CardDashboard.vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'

export default {
  name: 'Admin',
  data() {
    return {
      botonRegresar : false
    }
  },
  components: {
    CardDashboard,
    HeaderDashboard
  }
}
</script>

