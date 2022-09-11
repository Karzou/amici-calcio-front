<template>
    <div class="public">
    
        <PublicNav></PublicNav>
        <router-view></router-view>
    </div>
</template>

<script>
import PublicNav from '../../components/PublicNav.vue'

export default {
    name: "PublicLayout" ,
        components : {
            PublicNav
    },
    components: { PublicNav }
}
</script>

<style>
    
</style>