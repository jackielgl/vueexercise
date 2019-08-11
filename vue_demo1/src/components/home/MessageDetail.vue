<template>
    <ul>
        <li>id:{{messageDetail.id}}</li>
        <li>title:{{messageDetail.title}}</li>
        <li>content:{{messageDetail.content}}</li>
    </ul>
</template>
<script>

export default {
    data(){
        return {
            messageDetail: {
                id:'',
                title:'',
                content:''
            }
        }
    },
    mounted(){
          const messages = [
                {
                    id: 1,
                    title:'message001',
                    content:'message001 detail ...'
                },
                 {
                    id: 2,
                    title:'message002',
                     content:'message002 detail ...'
                },
                 {
                    id: 3,
                    title:'message003',
                     content:'message003 detail ...'
                }
            ];
        this.messages = messages;
        //const id = this.$route.params.id;
        const id = this.$route.params.id*1;
        const message = this.messages.find(detail => detail.id === id);
        this.messageDetail = message;
    },
    watch:{
        $route:function(value){ // 路由路径发生了改变（值params）
             const id = value.params.id*1;
            const message = this.messages.find(detail => detail.id === id);
            this.messageDetail = message;
        }
    }

}
</script>
<style>

</style>