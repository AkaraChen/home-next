<template>
    <div class="row">
        <div class="item">
            <p class="count">1000+</p>
            <div class="col">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                </svg>
                Commits Per Year
            </div>
        </div>
        <div class="item">
            <p class="count">50k+</p>
            <div class="col">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-text" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <line x1="9" y1="9" x2="10" y2="9"></line>
                    <line x1="9" y1="13" x2="15" y2="13"></line>
                    <line x1="9" y1="17" x2="15" y2="17"></line>
                </svg>
                Blog Wordage
            </div>
        </div>
    </div>
</template>

<style lang="less">
.row {
    display: flex;
    justify-content: center;
}

.item {
    flex: 1;
}

.col {
    display: flex;
    color: #1212127A;
    font-size: 1.1rem;
    align-items: center;

    & svg {
        margin-right: 5px;
    }
}

.count {
    margin-bottom: 5px;
    font-size: 1.75rem;
    font-family: var(--code-font);
}

@media (prefers-color-scheme: dark) {

    .col,
    .col * {
        color: rgba(255, 255, 255, 0.8);
    }
}
</style>