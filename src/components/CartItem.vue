<template>
    <div >
        <div class="cart_item_container">
          <div>{{cartItem.title.slice(0,15)}}</div>
           <img :src="cartItem.image" :alt="cartItem.title.slice(0,10)" class="cart_item_image">
           <div>Quantity:{{cartItem.amount}}</div>
           <div>Price:${{cartItem.price*cartItem.amount}}</div>
        </div>
      
    </div>
</template>

<script>
export default {
    name:"CartItem",
    props:{
        cartItem:Object
    }
    
}
</script>

<style lang="scss" scoped>
.cart_item_container{
  height: 150px;
  max-width:500px;
  gap: 1rem;
  background:#8b0000 ;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;

}
.cart_item_image{
    height: 100px;
    background-size: cover;
}
</style>