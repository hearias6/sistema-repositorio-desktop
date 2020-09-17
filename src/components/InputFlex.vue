<template>
    <div class="flex flex-wrap -mx-3 mb-1">
        <div class="w-full px-3">
            <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                :for="'id-'+name">
                {{label}}
            </label>
            <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                :id="'id-' + name"
                type="text"
                :value="data"
                @input="$emit('input',$event.target.value)"
                :placeholder="'Ingresar ' + label"
                />
                
            
        </div>
    </div>
</template>

<script>
export default {
    name : 'InputFlex',
    props : {
        label : String,
        data : String,
        name : String,
    },
    data() {
        return {

        }
    },
    mounted() {
        
    },
}
</script>