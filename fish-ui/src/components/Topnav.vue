<template>
<div class="topnav">
    <router-link to="/" class="logo">
        <svg class="icon">
            <use xlink:href="#icon-video"></use>
        </svg>
    </router-link>
    <li>
        <router-link to="/doc">文档</router-link>
    </li>

    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menup"></use>
    </svg>

</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject < Ref < boolean >> ('vis')
        console.log("topnav 获取的mennuvisible为：" + menuVisible.value)
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu
        }
    },

}
</script>

<style lang="scss" scoped>
$color: #007974;

li {
    list-style: none;
    color: #ccc;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
}

.topnav {
    color: $color;
    // background: pink;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;
        color: #ccc;

        >svg {
            width: 32px;
            height: 32px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        color: orange;
        width: 32px;
        height: 32px;
        // background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        background: fade-out(black, 0.9);
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
