<script setup lang="ts">

import Logo from '../Logo.vue'

</script>
<template>
    <nav>
        <h2>
            <Logo />
            <span>Cookbase</span>
        </h2>
        <ul>
            <li >
                <button class="primary-btn">
                    <RouterLink to="/login">Login</RouterLink>
                </button>
            </li>
            <li>
                <RouterLink to="/signup">Signup</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-surface);
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    border-radius: 10px;
}
h2 {
    display: flex;
    align-items: center;
}
nav ul {
    list-style: none;
    display: flex;
}
</style>