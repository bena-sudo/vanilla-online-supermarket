export { showCategoryList, showCategoryDetail };
// VIEW
import {
  displayCategoriesInToolbar,
  displayCategoryDetail,
} from "../view/categoryView";
import { getListAllProductsByCategoryID } from "../service/productService";
// SERVICE
import {
  getListAllCategories,
  getCategoryInfo,
} from "../service/categoryService";

async function showCategoryList() {
  const categoriesList = await getListAllCategories();
  return displayCategoriesInToolbar(categoriesList);
}

async function showCategoryDetail(categoryID) {
  const category = await getCategoryInfo(categoryID);
  const products = await getListAllProductsByCategoryID(categoryID);
  return displayCategoryDetail(category[0], products);
}
