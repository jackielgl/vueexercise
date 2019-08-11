<template>
<div>
    <h3>Home</h3>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link to="/home/news">News</router-link>
                <router-link to="/home/message">Message</router-link>
            </li>
        </ul>
        <div>
            <keep-alive>
             <router-view></router-view>
            </keep-alive>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
 .nav > li > a{
        display: inline
    }
</style>