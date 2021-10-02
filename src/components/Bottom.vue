<template>
    <div class="bottom">Copyright © {{ new Date().getUTCFullYear() }} 穿云101</div>
</template>

<script>
    export default {
        name: "Bottom",
    }
</script>

<style scoped>
    .bottom {
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        /*font-size: small;*/
        /*font-weight: bold;*/
        color: white;
        background-color: inherit;
    }
</style>