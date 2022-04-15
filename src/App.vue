<template>
  <div class="container">
    <Name />
    <Content />
    <Profile />
  </div>
</template>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Outfit:wght@400;500&display=swap');

@font-face {
  font-family: 'Archia';
  font-display: swap;
  src: url("./assets/font/archia.woff2");
}

:root {
  --primary-color: #4fa4f982;
  --secondary-color: #e6eef9;
  --title-font: 'Archia', sans-serif;
  --article-font: 'Outfit', sans-serif;
  --code-font: 'IBM Plex Mono', monospace;
  font-size: calc(0.8em + 0.5vw);
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  -webkit-tap-highlight-color: transparent;
  font-family: var(--article-font);
  font-size: 1.3rem;
}

::selection {
  background: #ffbd6d;
  color: white;
}

@media screen and (min-width: 768px) {
  .container {
    padding: 20px 40px !important;
    margin-top: 100px !important;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  }
}

.container {
  max-width: 700px;
  padding: 20px;
  margin: auto;
  border-radius: 16px;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #191919;
  }

  .container {
    background-color: #232323;
  }
}
</style>

<script lang="ts" setup>
import Name from './components/Name.vue'
import Content from './components/Content.vue'
import Profile from './components/Profile.vue'
</script>
