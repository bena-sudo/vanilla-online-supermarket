export {
  showCategoryList,
  showCategoryListById,
  showEditCategoryPage,
  showCreateCategoryPage,
  createCategory,
  editCategory,
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
  getCategoryInfo,
  editCategoryService,
} from "../service/categoryService";
// COMPONENTS
// eslint-disable-next-line no-unused-vars
import { EditCategory } from "../component/editCategory";
// eslint-disable-next-line no-unused-vars
import { CreateCategory } from "../component/createCategory";

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

async function showEditCategoryPage(categoryID) {
  const category = await getCategoryInfo(categoryID);
  const editCategoryPage = document.createElement("edit-category");
  editCategoryPage.setAttribute("data-category", JSON.stringify(category[0]));
  return editCategoryPage;
}

async function showCreateCategoryPage() {
  const createCategoryPage = document.createElement("create-category");
  const categoriesList = await getListAllCategories();
  createCategoryPage.setAttribute(
    "data-categorieslist",
    JSON.stringify(categoriesList),
  );
  return createCategoryPage;
}

async function createCategory(category) {
  await createCategoryService(category);
}

async function editCategory(category) {
  await editCategoryService(category);
}

/** Metodo para la paginade detalle antigua, donde se muestra la categoria y el listado de productos.
async function showCategoryDetail(categoryID) {
  const category = await getCategoryInfo(categoryID);
  const products = await getListAllProductsByCategoryID(categoryID);
  return displayCategoryDetail(category[0], products);
}
*/
