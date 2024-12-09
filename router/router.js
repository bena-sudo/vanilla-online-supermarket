export { router };
import {
  showCategoryList,
  showCategoryListById,
  showEditCategoryPage,
} from "../controller/categoryController";
import {
  showProductList,
  showProductDetail,
} from "../controller/productController";
import { showCardList } from "../controller/cardController";
import { showLoginPage } from "../controller/loginController";

async function router(route) {
  const containerApp = document.querySelector("#containerApp");
  route = route.replace(/^\/|\/$/g, "");
  const [routeModel, routeID] = route.split("/");

  containerApp.innerHTML = "";

  switch (routeModel) {
    case "login":
      containerApp.append(await showLoginPage());
      break;
    case "store":
    case "products":
      containerApp.append(await showCardList());
      containerApp.append(await showProductList());
      break;
    case "categories":
      containerApp.append(await showCategoryList());
      break;
    case "product":
      if (routeID) {
        containerApp.append(await showProductDetail(routeID));
      } else {
        window.location.pathname = "/products";
      }
      break;
    case "category":
      containerApp.append(await showCategoryListById(routeID));
      break;
    case "editcategory":
      containerApp.append(await showEditCategoryPage());
      break;
    default:
      window.location.pathname = "/store";
  }
}
