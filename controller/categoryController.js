export { showCategoryList, showCategoryListById };
// VIEW
import { displayCategoriesInNavLists } from "../view/categoryView";
import { displayProductsInCardsLists } from "../view/productView";
import {
  getListAllProductsByCategoryID,
  getListAllProducts,
} from "../service/productService";
// SERVICE
import { getListAllCategories } from "../service/categoryService";

async function showCategoryList() {
  const categoriesList = await getListAllCategories();
  const porductsList = await getListAllProducts();
  const porductsListDivs = await displayProductsInCardsLists(porductsList);
  return displayCategoriesInNavLists(categoriesList, porductsListDivs);
}

async function showCategoryListById(categoryID) {
  const categoriesList = await getListAllCategories();
  const porductsList = await getListAllProductsByCategoryID(categoryID);
  const porductsListDivs = await displayProductsInCardsLists(porductsList);
  return displayCategoriesInNavLists(categoriesList, porductsListDivs);
}

/** Metodo para la paginade detalle antigua, donde se muestra la categoria y el listado de productos.
async function showCategoryDetail(categoryID) {
  const category = await getCategoryInfo(categoryID);
  const products = await getListAllProductsByCategoryID(categoryID);
  return displayCategoryDetail(category[0], products);
}
*/
