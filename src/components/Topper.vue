<template>

    <div class="topper bg-amber-700">
        <slot></slot>

    </div>



</template>

<style>

    .topper {
        height: 32px;
        width: calc(100% - 64px);
        margin-inline: auto;
    }

</style>