export { router };
import {
  showCategoryList,
  showCategoryDetail,
} from "../controller/categoryController";
import {
  showProductList,
  showProductDetail,
} from "../controller/productController";

async function router(route, containerApp) {
  const [hash, routeModel, routeID] = route.split("/");

  switch (routeModel) {
    case "store":
      containerApp.innerHTML = "";
      containerApp.append(await showCategoryList());
      containerApp.append(await showProductList());
      break;
    case "product":
      containerApp.innerHTML = "";
      containerApp.append(await showProductDetail(routeID));
      break;
    case "category":
      containerApp.innerHTML = "";
      containerApp.append(await showCategoryDetail(routeID));
      break;
    default:
      window.location.hash = "#/store";
  }
}
