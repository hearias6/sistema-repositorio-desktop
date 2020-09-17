<template>
         
    <header class="mt-5 pl-10 pr-2 py-2 w-full mb-5">
        <div class="flex flex-wrap">
            <div class="w-1/6 py-3 text-center md:text-left">
                <router-link v-if="botonRegresar" v-bind:to="ruta" 
                    class="text-white font-bold bg-gray-800 py-3 px-5 ml-10 rounded-full">
                    Atras
                    <!-- 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-12">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                    </svg>
                     -->
                </router-link>
            </div>
            <div class="w-2/3">
                <h3 class="text-center font-bold font-sans text-gray-100 text-4xl md:text-5xl lg:text-6xl" >
                    {{titulo}}
                </h3>
            </div>
            <div class="w-1/6 py-3">
                <!-- vacio -->
            </div>
        </div>

    </header>
    
</template>


<script>
export default {
    name : 'HeaderDashboard',
    props : {
        titulo : String,
        botonRegresar : Boolean,
        ruta : String,
        botonNuevo : Boolean,
        rutaNuevo : String
    },
    mounted() {
    },
}
</script>