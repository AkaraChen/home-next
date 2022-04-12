<template>
    <h1>Hi there!</h1>
    <h2>I'm <span class="me">AkaraChen</span>, a Web <span class="career">Developer</span> from China.</h2>
</template>

<style scoped lang="less">
h1 {
    font-family: var(--title-font);
    font-size: 2.3rem;
}

h2 {
    font-size: 1.5rem;
    font-family: var(--title-font);

    & .career {
        background-image: linear-gradient(90deg, #f29914 15%, #0bbbe3 76%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    & .me {
        background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
}
</style>

<script lang="ts" setup>
</script>