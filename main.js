// STYLE
import './style/style.scss'
// CONTROLLER
import { showProductList } from './controller/productController';
import { showCategoryList } from './controller/categoryController';

document.addEventListener("DOMContentLoaded", async ()=>{
  const containerApp = document.querySelector("#containerApp");
  containerApp.append( await showCategoryList())
  containerApp.append( await showProductList())
})