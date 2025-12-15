<template>

    <main class=" sm">
        <slot></slot>
    </main>

</template> 

<style>

    main {

        width: calc(100% - 64px);
        margin-inline: auto;
    }

    @media (width >= 40rem /* 640px */) {
        main {
            width: calc(100% - 512px);
        }
        
    }

</style>