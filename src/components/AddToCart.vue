<template>
    <div class="cart_container">
        <span @click="cartIncrement()">+</span>
         <span>{{count}}</span>      
        <span @click="cartDecrement()">-</span>
         <button class="btn btn-danger mx-4" @click="addToCart">Add To Cart</button>
        <div v-if="maxItemError" class="text-danger">only up to 5 items allowed</div>
       
    </div>
</template>

<script>
export default {
    name:"cart",
    data(){
        return{
            count:1,
            maxItemError:false
        }
    },
    methods:{
        cartIncrement(){
            if(this.count===5){
             this.maxItemError=true;
             return;
            }
            this.count=this.count+1
        },
        cartDecrement(){
            if(this.count<=0){
                return;
            }
            this.maxItemError=false;
            this.count=this.count-1
        },
        addToCart(){
            this.$emit("addToCart",this.count)
        }

    }

    
}
</script>

<style lang="scss" scoped>
 .cart_container{
    span{
        font-size: 2rem;
    }
    span:first-child,span:last-child{
        cursor: pointer;
    }
 }
</style>