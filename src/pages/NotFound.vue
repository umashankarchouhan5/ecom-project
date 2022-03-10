<template>
    <div class="not_found_container">
     <div>
         <div class="h1 my-2" >
        oops!Page Not Found
         </div>
    <router-link to="/login" class="btn btn-danger" >Go to Login Page </router-link>
     </div>
    </div>
</template>
<script>
export default {
    name:"NotFound"
}
</script>

<style lang="scss" scoped>
  .not_found_container{
      height:100vh;
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      color: white;
      opacity: 0.8;
  }


</style>