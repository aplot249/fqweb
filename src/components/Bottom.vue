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
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: white;
        background-color: inherit;
    }
</style>