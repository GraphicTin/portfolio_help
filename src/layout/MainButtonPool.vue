<template>


    <div class="pool rounded-md">
        <slot></slot>

    </div>



</template> 

<style>

    .pool {

        background-color: none;
        /* border: 1px solid slategray ; */
        width: 100%;
        aspect-ratio: 1;
        display: grid;
        /* flex-direction: row; */
        grid-template-areas:
            "item1 item2" 
            "item3 item4" 
            ;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        /* background-color: dodgerblue; */
        /* padding: 5px; */
    }

    @media (width >= 40rem /* 640px */) {
        .pool {
            aspect-ratio: 8;
            grid-template-areas:
                "item1 item2 item3 item4" 
            ;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        
    }


</style>