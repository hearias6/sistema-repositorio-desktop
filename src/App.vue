<template>
  <div style="-webkit-app-region:drag" class="flex min-h-screen">
    
    <Sidebar></Sidebar>
    
    <router-view/>
  </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components:{
    Sidebar
  }
}
</script>

