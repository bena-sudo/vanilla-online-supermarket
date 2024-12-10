export {
  showProductList,
  showProductDetail,
  showCreateProductPage,
  createProduct,
};
// VIEW
import {
  displayProductsInCardsLists,
  displayProductDetail,
} from "../view/productView";
// SERVICE
import {
  createProductService,
  getListAllProducts,
  getProductInfo,
} from "../service/productService";
// COMPONENTS
// eslint-disable-next-line no-unused-vars
import { CreateProduct } from "../component/createProduct";

async function showProductList() {
  const productsList = await getListAllProducts();
  return displayProductsInCardsLists(productsList);
}

async function showProductDetail(productID) {
  const product = await getProductInfo(productID);
  return displayProductDetail(product[0]);
}

async function showCreateProductPage() {
  const createProductPage = document.createElement("create-product");
  return createProductPage;
}

async function createProduct(product) {
  await createProductService(product);
}
