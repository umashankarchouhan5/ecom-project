<template>
      <div>
         <div v-if="cartItems.length<1" class="emptycart_container">
             <div>
              <h1 class="my-3">cart is empty,please add some</h1>
              <router-link to="/products" class="btn btn-danger">Go to Products Page</router-link>
             </div>
           
         </div>
         <div v-else class="cart_container">
          <CartItem v-for="item in cartItems " :key="item.id" :cartItem="item" /> 

          <div class="d-flex justify-content-between mb-2">
              <router-link class="btn btn-success mx-3 " to="/products">Continue Shopping </router-link>
              <button class="btn btn-success d-block  mx-3" @click="clearCart">Clear Cart</button>

               <button class="btn btn-success d-block "> Checkout</button>
          </div>
          

         </div>
      </div>
</template>

<script>
import CartItem from "../components/CartItem"
export default {
  name:"cart",
  components:{
   CartItem
  },
  data(){
      return{
          cartItems:[]
      }
      
  },
  created(){
      this.cartItems=this.$store.state.user.cart;
  } ,
  methods:{
      clearCart(){
          this.$store.dispatch("emptycart")
          this.cartItems=[];
          localStorage.removeItem("cart")
      }
  }
  
}
</script>

<style lang="scss" scoped>
.emptycart_container{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart_container{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items:center;
    gap:2rem;
}
</style>