<template>
<div>导航栏 | <router-link to="/">Fish </router-link>| <router-link to="/fish2">Fish 2</router-link>
</div>
<hr>
<router-view />
</template>

<script>
export default {
    name: 'App',

}
</script>
