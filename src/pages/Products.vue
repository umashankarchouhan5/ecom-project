<template>
   <div class="d-flex flex-wrap products-container container">
        <Product v-for="product in products" :key="product.id" :product="product"/>
         
      
         
        
        
     
    
    
   </div>
   
</template>

<script>
import Product from "../components/Product"
export default {
    name:"Products",
    data(){
        return{products:[]}
    },
    components:{
     Product
    },

    created(){
       
       this.products=this.$store.state.user.products;
    }
}
</script>

<style lang="scss" module>
.products-container{
    gap:2rem;
}
</style>