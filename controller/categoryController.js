export {
  showCategoryList,
  showCategoryListById,
  showEditCategoryPage,
  createCategory,
};
// VIEW
import { displayCategoriesInNavLists } from "../view/categoryView";
import { displayProductsInCardsLists } from "../view/productView";
import {
  getListAllProductsByCategoryID,
  getListAllProducts,
} from "../service/productService";
// SERVICE
import {
  getListAllCategories,
  createCategoryService,
} from "../service/categoryService";
// eslint-disable-next-line no-unused-vars
import { EditCategory } from "../component/editCategory";

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

async function showEditCategoryPage() {
  const categoriesList = await getListAllCategories();
  const editCategoryPage = document.createElement("edit-category");
  editCategoryPage.setAttribute(
    "data-categorieslist",
    JSON.stringify(categoriesList),
  );
  return editCategoryPage;
}

async function createCategory(category) {
  await createCategoryService(category);
}

/** Metodo para la paginade detalle antigua, donde se muestra la categoria y el listado de productos.
async function showCategoryDetail(categoryID) {
  const category = await getCategoryInfo(categoryID);
  const products = await getListAllProductsByCategoryID(categoryID);
  return displayCategoryDetail(category[0], products);
}
*/
