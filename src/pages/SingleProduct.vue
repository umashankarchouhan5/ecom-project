<template>
   <div>
      <div class="d-flex align-items-center">
      <div class="product_container" >
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
      <!------!-->
      <div class="product_description h5">
        {{product.description}}
      </div>
  </div>
  <!-- cart component !-->
  <AddToCart @addToCart="cartHandler"/>

  
    
   </div>

 
</template>

<script>
import AddToCart from "../components/AddToCart"
import Auth from "../utils/auth"
//import {Modal} from "view-design"
export default {
  name:"singleProduct",
  components:{
    AddToCart
  },
  data(){
    return{
      product:null,
      showModal:false
    }
  },
  created(){
    this.product=this.$store.state.user.currentProduct;
    
  },
 

  
  methods:{
    cartHandler(amount){
      if(localStorage.cart){
        const cart=JSON.parse(localStorage.getItem("cart"));
        let productExist= cart.find((item)=>item.id===this.product.id)
        
        if(productExist){
          const tempCart=cart.map((item)=>{
            console.log(item.amount)
            if(item.id===this.product.id){
              let newAmount=item.amount+amount;
              if(newAmount<5){
                item.amount=newAmount
              }
              else{
                item.amount=5;
              }
            }
            return item;
          })
          console.log(tempCart)
          Auth.logCart(tempCart);

        }
        else{
       let cartItem={...this.product,amount:amount};

       const tempCart=[...cart,cartItem]
        
        Auth.logCart(tempCart)}

      }

      else{
        let cartItem={...this.product,amount:amount};
        const cart=[cartItem]
       
       Auth.logCart(cart)
      }

      this.$router.push("/cart")
     

    }

  }
}
</script>

<style lang="scss" scoped>
.product_container{
  height: 400px;
  width:300px;
  
  text-align: center;
  color:black;
  cursor: pointer;
}
.product_description{
  width:300px;
}
.product_image{
  height: 300px;
  width: 300px;
  background-size: cover;
}
</style>