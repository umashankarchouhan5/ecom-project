import store from "../../store";

class Auth {
  constructor() {
    this.isLogged = false;
    this.user = null;
  }
  isUserLogged() {
    return this.isLogged;
  }
  logUser(data) {
    // localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem("user", JSON.stringify(data));
    this.user = data;
    store.commit("setUser", data);
    this.isLogged = true;
  }

  logCart(data) {
    localStorage.setItem("cart", JSON.stringify(data));
    store.commit("setCart", data);
  }

  logCurrentProduct(data) {
    localStorage.setItem("currentProduct", JSON.stringify(data));
    store.commit("setCurrentProduct", data);
  }
  checkUser() {
    const data = localStorage.getItem("user");
    if (data) {
      this.logUser(JSON.parse(data));
    }
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      this.logCart(JSON.parse(cartData));
    }
    const currentProduct = localStorage.getItem("currentProduct");
    if (currentProduct) {
      this.logCurrentProduct(JSON.parse(currentProduct));
    }
  }

  logoutUser() {
    localStorage.removeItem("user");
    if (localStorage.cart) {
      localStorage.removeItem("cart");
    }

    if (localStorage.currentProduct) {
      localStorage.removeItem("currentProduct");
    }

    store.commit("removeUser");
    store.commit("emptyCart");
    store.commit("removeCurrentProduct");
    this.user = null;
    this.isLogged = false;
  }
}

export default new Auth();
