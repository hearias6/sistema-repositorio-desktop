<template>
    <article class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-500 m-2  lg:grid-cols-4">
        <div class="px-6 py-4">
          <div class="font-bold text-2xl text-center mb-2 text-white capitalize">
            <p>
                {{titulo}}
            </p>
            <router-link v-bind:to="ruta">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="80px" class="mx-auto cursor-pointer">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>                   
            </router-link>  
          </div>
        </div>
    </article>   
</template>

<script>
export default {
    name:'CardDashboard',
    props:{
        titulo : String,
        ruta : String
    },
    data() {
        return {
            
        }
    },
}
</script>