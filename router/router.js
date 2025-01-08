export { router };
import {
  showCategoryList,
  showCategoryListById,
  showEditCategoryPage,
  showCreateCategoryPage,
} from "../controller/categoryController";
import {
  showProductList,
  showProductDetail,
  showCreateProductPage,
} from "../controller/productController";
import { showLoginPage } from "../controller/loginController";

async function router(route) {
  const containerApp = document.querySelector("#containerApp");
  route = route.replace(/^\/|\/$/g, "");
  const [routeModel, routeID] = route.split("/");

  containerApp.innerHTML = "";

  switch (routeModel) {
    case "login":
      containerApp.append(showLoginPage());
      break;
    case "store":
    case "products":
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
      if (routeID) {
        containerApp.append(await showEditCategoryPage(routeID));
      } else {
        containerApp.append(await showCreateCategoryPage());
      }
      break;
    case "editproduct":
      if (routeID) {
        containerApp.append(console.log("Not Implemented"));
      } else {
        containerApp.append(await showCreateProductPage());
      }
      break;
    default:
      window.location.pathname = "/store";
  }
}
