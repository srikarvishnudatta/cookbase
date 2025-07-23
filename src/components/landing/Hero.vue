<script lang="ts" setup>
</script>

<template>
    <section>
        <div class="hero-content">
            <h1>
                Introducing
            </h1>
            <h2>
                Cookbase
            </h2>
            <p>Your AI based companion to store all your recipes</p>
        </div>
    </section>
</template>

<style scoped>
    section {
        height:calc(100vh - 100px);
         overflow: hidden;
    }
    .hero-content {
       text-align: center;
       display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10rem;
        gap: 1rem;
    }
    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 4rem;
        padding: 0 0.5rem;
        position: relative;
        display: inline-block;
        z-index: 1;
        overflow: hidden;
    }
    h2::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: var(--color-accent);
        z-index: -1;
        animation: bg-spread 400ms ease-in 0.5s forwards;
    }
    @keyframes bg-spread {
        from{
            width: 0%;
        }to{
            width: 100%;
        }
    }
</style>