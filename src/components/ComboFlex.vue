<template>
    <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
            <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                :for="'id-'+name">
                {{label}}
            </label>
            <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                :id="'id-' + name"
                >
                <option :value="option.key" v-for="option in options" :key="option.key">
                    {{option.name}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ComboFlex',
    props : {
        label : String,
        model : String,
        name : String,
        options : []
    }
}
</script>