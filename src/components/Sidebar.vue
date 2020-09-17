<template>
    <div class="w-64 bg-gray-800 text-white border-r border-gray-800 fixed min-h-screen">

        <div class="px-5 py-8 text-gray-300">
            <h1 class="font-bold text-lg whitespace-normal">
                App colombia Hogar
            </h1>
            <h5 class="font-bold text-xs">
                Version 0.1 Beta
            </h5>
        </div>

        <div class="sidebar-icons">
            <Submenu titulo="Home" icon="home" ruta="/" />  
            <Submenu titulo="Admin" icon="document-text" ruta="/admin" />       
            <Submenu titulo="Negocio"  icon="cog" ruta="/negocio" />       
            <Submenu titulo="Contabilidad"  icon="calculator" ruta="/contabilidad" />       
        </div>

    </div>
</template>

<script>
import Submenu from '@/components/Submenu.vue'

export default {
    components:{
        Submenu
    }
}
</script>