<template>
    
    <article class="bg-blue-500 text-gray-100 font-sans text-center px-3 py-4 rounded m-1">
        <div class="text-lg md:text-xl font-bold">
            {{name}}
        </div>
        <div class="font-bold">
            Código :  {{id}}
        </div>
        <div class="px-6 pt-4 pb-2">
            <router-link :to="'/admin/cliente/editar/' + id">
                <span class="inline-block bg-gray-200 rounded-full 
                    px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-200 cursor-pointer">
                    Editar
                </span>
            </router-link>
        </div>

    </article>

</template>

<script>
export default {
    name : 'CardList',
    props: {
        name : String,
        id  : Number
    }
}
</script>