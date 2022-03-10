<template>
  <div id="home">
    <div id="nav">
      <router-link to="/products">Products</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/cart">Cart</router-link>
       <a @click="logoutHandler">Logout</a>

    </div>
    
    
    <router-view />
  </div>
</template>

<script>

import Auth from "../utils/auth"
export default {
  name:"home",

  created(){
    
        if(this.$route.name === 'Home' && localStorage.user === undefined){
            this.$router.push('/login')
        }
        if(this.$route.name === 'Home' && localStorage.user){
            this.$router.push('/products')
        }
        },
        
       watch:{
        $route(to){
            document.title=to.meta.title||"ecommerce"
            
        }
    },  
  
 
  methods:{
    logoutHandler(){
     this.$router.push("/login")
     Auth.logoutUser();
     
    },
    
    
  }
}
</script>

<style lang="scss">


#nav {
  padding: 30px;

  display: flex;
  gap:2rem;
  a{
    cursor:pointer;
    text-decoration: none;
    color: red;
  }
 
}
</style>
