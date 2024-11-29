export { router };
import {
  showCategoryList,
  showCategoryListById,
} from "../controller/categoryController";
import {
  showProductList,
  showProductDetail,
} from "../controller/productController";
import { showCardList } from "../controller/cardController";

async function router(route) {
  const containerApp = document.querySelector("#containerApp");
  route = route.replace(/^\/|\/$/g, "");
  const [routeModel, routeID] = route.split("/");

  switch (routeModel) {
    case "store":
    case "products":
      containerApp.innerHTML = "";
      containerApp.append(await showCardList());
      containerApp.append(await showProductList());
      break;
    case "categories":
      containerApp.innerHTML = "";
      containerApp.append(await showCategoryList());
      break;
    case "product":
      if (routeID) {
        containerApp.innerHTML = "";
        containerApp.append(await showProductDetail(routeID));
      } else {
        containerApp.innerHTML = "";
        containerApp.append(await showProductList());
      }
      break;
    case "category":
      containerApp.innerHTML = "";
      containerApp.append(await showCategoryListById(routeID));
      break;
    default:
      window.location.pathname = "/store";
  }
}
