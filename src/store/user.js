import { productsData } from "../utils/dummydata/products";

const state = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  products: productsData,
  currentProduct: null,
  cart: [],
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
  setIsLoggedIn: (state, condition) => {
    state.isLoggedIn = condition;
  },

  setIsLoading: (state, val) => {
    state.isLoading = val;
  },
  removeUser: (state) => {
    state.user = null;
  },
  setCurrentProduct: (state, value) => {
    state.currentProduct = value;
  },
  setCart: (state, value) => {
    state.cart = value;
  },
  emptyCart: (state) => {
    state.cart = [];
  },
  removeCurrentProduct: (state) => {
    state.currentProduct = null;
  },
};
const getters = {};
const actions = {
  setUser: ({ commit }, data) => {
    commit("setUser", data);
  },
  login({ commit }) {
    commit("setIsLoggedIn", true);
  },
  isLoadingAction: ({ commit }, val) => {
    commit("setIsLoading", val);
  },
  removeUser: ({ commit }) => {
    commit("removeUser");
  },
  currentProduct: ({ commit }, val) => {
    commit("setCurrentProduct", val);
  },
  addToCart: ({ commit }, val) => {
    commit("setCart", val);
  },
  emptycart: ({ commit }) => {
    commit("emptyCart");
  },
};

export default { state, getters, mutations, actions };
