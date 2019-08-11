<template>
<div>
    <ul>
        <li v-for="(message) in messages" :key="message.id">
            
            <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        </li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return {
            messages:[]
        }
    },
    mounted(){
       // 模拟ajax从后台获取数据
        setTimeout(() => {
             const messages = [
                {
                    id: 1,
                    title:'message001'
                },
                 {
                    id: 2,
                    title:'message002'
                },
                 {
                    id: 3,
                    title:'message003'
                }
            ];
            this.messages = messages;
        }, 1000);
    }
}
</script>

<style scoped>
ul{
    margin-top:10px
}
</style>