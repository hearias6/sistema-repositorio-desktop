<template>

    <section class="py-5 px-5">
        <div v-for="(fruit,index) in order"  :key="index" @click="incrementFruit(index)" 
        class="bg-blue-500 m-2 py-2 px-4 text-white font-bold font-sans">
            <p class="inline-block">
                {{fruit.name}}
            </p>
            <span class="inline-block float-right top:0 right:0">
                {{fruit.count}}
            </span>
        </div>
        <button class="bg-red-500 block w-24 cursor-pointer font-bold text-white rounded-full mx-auto py-2 px-2"
            @click="resetFruits">
            Reset
        </button>
    </section>    

</template>
<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name : 'Frutas',
    computed: {
        ...mapState(['fruits']),
        order(){
            return this.fruits
        }
    },
    methods:{
        ...mapMutations(['incrementFruit','resetFruits'])
    }
}
</script>