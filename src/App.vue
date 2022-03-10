<template>
  <div id="app">
    
    <router-view/>
    <Modal
        v-model="showModal"
        title="Title"
        
        >
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
    </div>
</template>

<script>
    import {Modal} from "view-design"


export default {
  name:"app",
  components:{
    Modal
  },
  data(){
   return{
     showModal:false
   }
  },
  
  watch:{
    $route(to){
      document.title=to.meta.title||"ecommerce"
        
    }
  },
  
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
