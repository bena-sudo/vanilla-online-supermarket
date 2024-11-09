// STYLE
import "./style/style.scss";
// ROUTER
import { router } from "./router/router";

document.addEventListener("DOMContentLoaded", async () => {
  const containerApp = document.querySelector("#containerApp");
  router(window.location.hash, containerApp);

  window.addEventListener("hashchange", () => {
    router(window.location.hash, containerApp);
  });
});
