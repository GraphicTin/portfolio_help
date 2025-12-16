<template>

    <div class="topper rounded-b-md ">
        <slot></slot>

    </div>



</template>

<style>

    .topper {
        height: 32px;
        width: calc(100% - 64px);
        margin-inline: auto;
        /* margin-top: 32px; */
        display: flex;
        justify-content: space-evenly;

    }

    @media (width >= 40rem /* 640px */) {
        .topper {
            width: calc(100% - 512px);
        }
        
    }

</style>