<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from 'vue';
import {
    router
} from './Router';
export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth
        const menuVisible = ref(width <= 500 ? false : true)
        provide('vis', menuVisible)
        router.afterEach(() => {
            if (width <= 500) {
                menuVisible.value = false;
            }
        })
    }
};
</script>
