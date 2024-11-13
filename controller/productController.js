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

async function showProductDetail(productID) {
  const product = await getProductInfo(productID);
  return displayProductDetail(product[0]);
}
