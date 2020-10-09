<template>
<div class="main">
    <div class="topnavAndBanner">
        <Topnav />
        <div class="banner">
            <Icon />

            <h2>一个厉害的UI</h2>
            <p class="actions">
                <a href="https://github.com/fishseven/Fish-UI">GitHub</a>
                <router-link class="start-butt" to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>骄傲地使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import Icon from '../components/Icon.vue'
export default {
    components: {
        Topnav,
        Icon
    }
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

h2 {
    font-family: 黑体;
    color: white;
}

h3 {
    font-size: 20px;
    color: #fff;
    font-weight: 700;
}

p {
    font-size: 12px;
    color: #999
}

.topnavAndBanner {
    /*background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);*/
    background: #1b1b1b
}

.features {

    margin: 64px auto;

    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {

            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }
        }
    }
}

.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background: lightgreen;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: white;
            color: black;
            display: inline-block;
            // $h: 28px;
            // height: $h;
            // line-height: $h;
            // border-radius: $h/2;
            padding: 8px 24px;
            border-radius: $border-radius;
            border: 1px solid #f29d39;

            &:hover {
                text-decoration: none;
            }
        }

    }
}

.start-butt {
    background: #f29d39 !important;
}
</style>
