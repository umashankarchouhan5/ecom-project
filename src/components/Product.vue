<template>
    <div class="product_container" @click="productClickHandler(product.wid)">
      <div class="product_image_container">
        <img :src="product.image" :alt="product.title" class="product_image">
      </div>
      <div class="d-flex justify-content-around text-danger">
        <div class="product_title">
         {{product.title.slice(0,10)}}
        </div>
        <div>
          ${{product.price}}
        </div>
      </div>
     
    
    </div>
</template>


<script>
import Auth from "../utils/auth"
export default {
  name:"Product",
  props:["product"],
  methods:{
    productClickHandler(id){
        this.$store.dispatch("currentProduct",this.product);
        Auth.logCurrentProduct(this.product);        
        this.$router.push(`product/${id}`)

    }
  }
  
      
        
      
  
}
</script>


<style scoped>
.product_container{
  height: 400px;
  width:300px;
  
  text-align: center;
  color:black;
  cursor: pointer;
}
.product_container:hover{
  opacity:0.7;
}
.product_image{
  height: 300px;
  width: 300px;
  background-size: cover;
}
</style>