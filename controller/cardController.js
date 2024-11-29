export { showCardList };
// VIEW
import { displayCardList } from "../view/cardView";
// SERVICE
import { getListAllProducts } from "../service/productService";

async function showCardList() {
  const productsList = await getListAllProducts();
  return displayCardList(productsList);
}
