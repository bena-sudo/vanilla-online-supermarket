// STYLE
import "./style/style.scss";
// ROUTER
import { router } from "./router/router";

document.addEventListener("DOMContentLoaded", async () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
});
