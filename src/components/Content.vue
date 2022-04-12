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
}

a:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 80%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: var(--primary-color);
}

a:hover:after {
    top: 0%;
}

p + p {
    margin-top: -10px;
}
</style>
