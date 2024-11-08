// STYLE
import './style/style.scss'
// CONTROLLER
import { showProductList } from './controller/productController';

document.addEventListener("DOMContentLoaded", async ()=>{
  const containerApp = document.querySelector("#containerApp");
  containerApp.append( await showProductList())
})