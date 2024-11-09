export { showProductList, showProductDetail };
// VIEW
import {
  displayProductsInCardsLists,
  displayProductDetail,
} from "../view/productView";
// SERVICE
import { getListAllProducts, getProductInfo } from "../service/productService";

async function showProductList() {
  const productsList = await getListAllProducts();
  return displayProductsInCardsLists(productsList);
}

async function showProductDetail(producteID) {
  const product = await getProductInfo(producteID);
  return displayProductDetail(product[0]);
}
