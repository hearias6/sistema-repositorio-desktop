<template>
    <!-- 
    <svg fill="currentColor" class="mr-3" width="24px" height="24px" viewBox="0 0 24 24">
          <path d="M18.4615385,21 C18.4615385,20.7291667 18.3701923,20.4947917 18.1875,20.296875 C18.0048077,20.0989583 17.7884615,20 17.5384615,20 C17.2884615,20 17.0721154,20.0989583 16.8894231,20.296875 C16.7067308,20.4947917 16.6153846,20.7291667 16.6153846,21 C16.6153846,21.2708333 16.7067308,21.5052083 16.8894231,21.703125 C17.0721154,21.9010417 17.2884615,22 17.5384615,22 C17.7884615,22 18.0048077,21.9010417 18.1875,21.703125 C18.3701923,21.5052083 18.4615385,21.2708333 18.4615385,21 Z M22.1538462,21 C22.1538462,20.7291667 22.0625,20.4947917 21.8798077,20.296875 C21.6971154,20.0989583 21.4807692,20 21.2307692,20 C20.9807692,20 20.7644231,20.0989583 20.5817308,20.296875 C20.3990385,20.4947917 20.3076923,20.7291667 20.3076923,21 C20.3076923,21.2708333 20.3990385,21.5052083 20.5817308,21.703125 C20.7644231,21.9010417 20.9807692,22 21.2307692,22 C21.4807692,22 21.6971154,21.9010417 21.8798077,21.703125 C22.0625,21.5052083 22.1538462,21.2708333 22.1538462,21 Z M24,17.5 L24,22.5 C24,22.9166667 23.8653846,23.2708333 23.5961538,23.5625 C23.3269231,23.8541667 23,24 22.6153846,24 L1.38461538,24 C1,24 0.673076923,23.8541667 0.403846154,23.5625 C0.134615385,23.2708333 0,22.9166667 0,22.5 L0,17.5 C0,17.0833333 0.134615385,16.7291667 0.403846154,16.4375 C0.673076923,16.1458333 1,16 1.38461538,16 L8.09134615,16 L10.0384615,18.125 C10.5961538,18.7083333 11.25,19 12,19 C12.75,19 13.4038462,18.7083333 13.9615385,18.125 L15.9230769,16 L22.6153846,16 C23,16 23.3269231,16.1458333 23.5961538,16.4375 C23.8653846,16.7291667 24,17.0833333 24,17.5 Z M19.3125,8.609375 C19.4759615,9.03645833 19.4086538,9.40104167 19.1105769,9.703125 L12.6490385,16.703125 C12.4759615,16.9010417 12.2596154,17 12,17 C11.7403846,17 11.5240385,16.9010417 11.3509615,16.703125 L4.88942308,9.703125 C4.59134615,9.40104167 4.52403846,9.03645833 4.6875,8.609375 C4.85096154,8.203125 5.13461538,8 5.53846154,8 L9.23076923,8 L9.23076923,1 C9.23076923,0.729166667 9.32211538,0.494791667 9.50480769,0.296875 C9.6875,0.0989583333 9.90384615,0 10.1538462,0 L13.8461538,0 C14.0961538,0 14.3125,0.0989583333 14.4951923,0.296875 C14.6778846,0.494791667 14.7692308,0.729166667 14.7692308,1 L14.7692308,8 L18.4615385,8 C18.8653846,8 19.1490385,8.203125 19.3125,8.609375 Z"></path>
    </svg>
     
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px" class="mr-3"> 
        <path d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px" class="mr-3">
        <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
    </svg>
-->
<span>

    <!-- Normal -->
    <svg v-if="typeIcon == 'normal'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px" class="mr-3"> 
        <path v-bind:d="icon" />
    </svg>
    
    <!-- Evenodd -->
    <svg v-if="typeIcon == 'evenodd'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  width="24px" height="24px" class="mr-3">
        <path fill-rule="evenodd" v-bind:d="icon" clip-rule="evenodd" />
    </svg>

    <!-- round -->
    <svg v-if="typeIcon == 'round'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24px" height="24px" class="mr-3">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-bind:d="icon" />
    </svg>
    
</span>

 
</template>

<script>

export default {
    name : 'Icons',
    props : {
        nameIcon : String,
        width : String,
        height : String
    },
    data() {
        return {
            icon : '',
            typeIcon : ''
        }
    },
    methods: {
        getIcon(){
            let icons = [
                {name : 'home', icon:'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z', type : 'normal'},
                {name : 'cog', icon:'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z', type : 'evenodd'},
                {name : 'pencil', icon : 'M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z', type:'normal'},
                {name : 'save', icon : 'M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z', type:'normal'},
                {name : 'archive', icon : 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', type:'round'},
                {name : 'document-text', icon : 'M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z', type:'evenodd'},
                {name : 'calculator', icon : 'M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z', type: 'evenodd'},
                {name : '', icon : '', type: ''},
                {name : '', icon : '', type: ''}
            ]
            let resultado = icons.find(i=>i.name == this.nameIcon);

            if(resultado != undefined){
                this.icon = resultado.icon;
                this.typeIcon = resultado.type;
            }else{
                resultado = icons.find(i=> i.name == 'home');
                this.icon = resultado.icon;
                this.typeIcon = resultado.type;
            }

        }
    },
    mounted() {
        this.getIcon();
    },
}
</script>