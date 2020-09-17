<template>
  <router-link v-bind:to="ruta"
    class="sidebar-icon flex items-center px-4 py-2 text-gray-400 
      font-bold font-sans cursor-pointer bg-gray-800 hover:bg-gray-700
      
      "
  >
    <Icons :nameIcon="icon" width="20px" height="20px" />
    <div>
        {{titulo}}        
    </div>
  </router-link>
</template>

<script>
import Icons from '@/components/Icons.vue'

export default {
    props : {
        titulo: String,
        icon : String,
        ruta : String
    },
    components:{
      Icons
    }
}
</script>