<template>
    <ul>
        <li v-for="(title,index) in news" :key="index">{{title}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            news:["news001","news002","news003","news004"]
        }
    }

}
</script>

<style scoped>
ul{
    margin-top:10px
}
</style>