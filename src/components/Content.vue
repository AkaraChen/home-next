<template>
    <p>I'm able to use JavaScript / HTML / CSS / Python / Java to build wonderful sites.</p>
    <p>I'm a open sourse enthusiast, and I'm pleased to share what I learn.
        All my works can be seen on <a href="https://github.com/akarachen" target="_blank">Github</a>, and here's <a
            href="https://blog.akr.moe" target="_blank">my learning note</a> (in Chinese)</p>
</template>

<style lang="less">
a {
    text-decoration: none;
    color: #121314;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 80%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        background-color: #4fa4f982;
    }

    &:hover:after {
        top: 0%;
    }
}

p+p {
    margin-top: -10px;
}

@media (prefers-color-scheme: dark) {
    p {
        color: rgba(255, 255, 255, 0.8);
    }

    a {
        background-color: #7f8c8d;
        color: rgba(255, 255, 255, 0.8);
    }
}
</style>
