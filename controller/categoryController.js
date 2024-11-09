export{showCategoryList}
// VIEW
import { displayCategoriesInToolbar } from "../view/categoryView";
// SERVICE
import { getListAllCategories } from "../service/categoryService";

async function showCategoryList(){
    const categoriesList = await getListAllCategories();
    return displayCategoriesInToolbar(categoriesList);
}