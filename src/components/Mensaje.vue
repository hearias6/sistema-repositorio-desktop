<template>
    <div class="flex text-center text-white text-lg font-bold px-4 py-3" :class="tipo='info' ? 'bg-blue-500' : 'bg-red-500'"  role="alert">
        <p>No hay registros</p>
    </div>
</template>

<script>
export default {
    name : 'Mensaje',
    props : {
        descripcion : String,
        tipo : String
    }
}
</script>