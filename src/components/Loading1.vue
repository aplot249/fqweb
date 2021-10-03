<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "Loading1"
    }
</script>

<style scoped>
    .loading {
        height: 40px;
        margin: auto;
        position: fixed;
        top: calc((100vh - 40px) / 2);
        right: calc((100vw - 79px) / 2);
    }

    .loading span {
        display: inline-block;
        width: 12px;
        height: 100%;
        border-radius: 4px;
        margin: 4px;
        background: lightgreen;
        -webkit-animation: load 1s ease infinite;
    }

    @keyframes load {
        0%, 100% {
            height: 40px;
            background: lightgreen;
        }
        50% {
            height: 70px;
            margin: -15px 0;
            background: lightblue;
        }
    }

    @-webkit-keyframes load {
        0%, 100% {
            height: 40px;
            background: lightgreen;
        }
        50% {
            height: 70px;
            margin: -15px 0;
            background: lightblue;
        }
    }

    .loading span:nth-child(2) {
        -webkit-animation-delay: 0.2s;
    }

    .loading span:nth-child(3) {
        -webkit-animation-delay: 0.4s;
    }

    .loading span:nth-child(4) {
        -webkit-animation-delay: 0.6s;
    }

    .loading span:nth-child(5) {
        -webkit-animation-delay: 0.8s;
    }
</style>