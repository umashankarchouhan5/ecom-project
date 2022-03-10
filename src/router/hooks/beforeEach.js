import Auth from "../../utils/auth";

const beforeEach = (to, from, next) => {
  if (to.meta.auth && to.meta.name === "Login" && !Auth.isUserLogged()) {
    return next("/login");
  }
  next();
};

export default beforeEach;
