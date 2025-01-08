// STYLE
import "./style/style.scss";
// ROUTER
import { router } from "./router/router";

document.addEventListener("DOMContentLoaded", async () => {
  router(window.location.pathname);

  window.addEventListener("hashchange", () => {
    router(window.location.pathname);
  });
});
