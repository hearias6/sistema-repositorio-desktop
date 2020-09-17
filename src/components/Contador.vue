<template>
    <div class="bg-blue-500 px-2 py-2 font-bold font-sans text-white text-6xl">
        <p>
            Contador : {{$store.state.count}}
        </p>
        <button class="bg-red-500 w-1/5 rounded-full px-2 py-2 m-1 text-3xl" @click="$store.commit('increment')">
            +
        </button>
    </div>
</template>

<script>
export default {
    name : 'Contador',
    
}
</script>