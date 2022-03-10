<template>
  <div class="login">
   
    <div class="container1">
      <div class="row animateborder">
        <div
          class="col-md-7 d-flex flex-column align-items-center justify-content-center"
        >
          <h1 class="fw-bold mb-4 text-center login_text">User Login</h1>

          <div class="login_elements mb-2">
            <label for="username" class="form-label">
              <i class="fa fa-user" aria-hidden="true"></i>
              User Email
            </label>

            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <input
                type="text"
                class="form-control fw-bolder"
                v-model="username"
                name="username"
                ref="email"
                placeholder="User Email"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="login_elements  mb-2">
            <label for="password" class="form-label">
              <i class="fa fa-key" aria-hidden="true"></i>
              Password
            </label>

            <ValidationProvider
              name="password"
              rules="required|min:8|alpha_num"
              v-slot="{ errors }"
            >
              <input
                type="password"
                class="form-control fw-bolder"
                placeholder="Password"
                name="password"
                v-model="password"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="buttons">
            <button class="   " @click="loginHandler">
              <span> Login</span>
            </button>
           
          </div>
         
        </div>

        <div class="col-md-5 login_image">
          <i class="fas fa-comment-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Auth from "../utils/auth"


export default {
  name: "login",
  
  components: {
    
  },
  data() {
    return {
      username: "",
      password: "",
      
    };
  },
  computed: {
    checkUser() {
      return !!localStorage.getItem("user");
    },
  },
  created() {
     
    if (this.checkUser) {
      this.$router.push("/products");
    }
  },
 
  methods: {
    ...mapActions(["login"]),

    loginHandler() {
      if(this.username==="admin@gmail.com" && this.password==="admin12345"){
         
          
          Auth.logUser({
        email: this.username,
        password: this.password,
      });
    
        this.login();
        this.$router.push({name:"Products"});
        

      }
       
      }
    },
   
  
};
</script>
<style lang="scss" scoped>
.login {
  background: #73c8a9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #373b44,
    #73c8a9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #373b44,
    #73c8a9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  min-height: 100vh;
}
.login .container1 {
  min-height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 0px;
  .row {
    z-index: 24;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);
    background: #323232;
    color: #f5f5f5;
    width: 80vw;
    min-height: 90vh;
    @media (min-width: 1025px) {
      min-height: 80vh;
      min-width: 60vw;
    }
  }
}
.login_image {
  /*	background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);*/
  background-color: #79b4b7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -8;
  i {
    position: absolute;
    font-size: 6rem;
    color: purple;
    overflow: hidden;
    animation: chatanimate 5s infinite ease-in-out;
  }
}
@keyframes chatanimate {
  0% {
    transform: translateY(-90%) rotate(45deg) scale(0.3);
  }
  30% {
    color: #9b0000;
  }
  60% {
    color: #f4e04d;
  }
  100% {
    transform: translateY(90%) rotate(0deg) scale(1.2);
    color: #000b49;
  }
}
.login_text {
  font-size: 2rem;
  letter-spacing: 0.4rem;
}
.login_elements {
  flex-shrink: 0;
  width: 20rem;
}
.login_elements .form_control {
  width: 100%;
}
.forgot-password {
  text-decoration: none;
  padding: 0.5rem;
  margin-top: 1rem;
  display: inline-block;
  color: #f5f5f5;
}
.forgot-password:hover {
  cursor: pointer;
  color: grey;
}
.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 2rem;
    border-radius: 3px;
    box-shadow: 7px 13px 8px -2px rgba(0, 0, 0, 0.43);
    border: none;

    &:hover {
      background-color: #9b0000;
      color: #fff;
    }
  }
}
@media (max-width: 435px) {
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      display: block;
      width: 90%;
      padding: 0.5rem 0;
    }
  }
  .login_elements {
    flex-shrink: 0;
    width: 90%;
  }
  .navigation {
    display: none;
  }
}
@media (max-width: 768px) {
  .login_image {
    display: none;
    animation: none;
  }
  .login_text {
    font-size: 1rem;
    margin-top: 1rem;
    letter-spacing: 0.2rem;
  }
}

@media (max-height: 375px) {
  .row {
    margin: 20px 0;
  }
}
</style>
