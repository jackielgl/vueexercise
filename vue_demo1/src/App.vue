<template>
 <div class="container">
   <div class="row" >
      <div class="page-header">
        <h2>Router Basic</h2>
      </div>
   </div>
   
   <div class="row">
     <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home" class="list-group-item">Home</router-link>
          <router-link to="/about" class="list-group-item">About</router-link>
        </div>
      </div>
      <div class="col-xs-8">
          
          <router-view></router-view>
         
      </div>
      
   </div>
    
   
  </div>
</template>

<script>

export default {

    
}
</script>

<style>
.router-link-active{
  color:red !important;
}
</style>