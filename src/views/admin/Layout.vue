<template>
    <div class="admin">
        <AdminHeader/>
        <div class="ad_contain">
            <div id="ad_side">
                <AdminNav/>
            </div>
            <div id="ad_display">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from '../../components/AdminHeader.vue'
import AdminNav from '../../components/AdminNav.vue'
export default {
    name: "AdminLayout",
    components : {
        AdminHeader,
        AdminNav
    }
}
</script>

<style>
    
</style>