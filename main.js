// STYLE
import "./style/style.scss";
// CONTROLLER
import { showProductList, showProductDetail } from "./controller/productController";
import { showCategoryList } from "./controller/categoryController";

async function loadHomePage(containerApp) {
  containerApp.append(await showCategoryList());
  containerApp.append(await showProductList());
}

async function loadProductDatailPage(containerApp,producteID) {
  containerApp.append(await showProductDetail(producteID));
}

document.addEventListener("DOMContentLoaded", async () => {
  const containerApp = document.querySelector("#containerApp");
  loadHomePage(containerApp);
});
