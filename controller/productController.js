export{showProductList}
// VIEW
import { displayProductsInCardsLists } from "../view/productView"
// SERVICE
import { getListAllProducts } from "../service/productService"

async function showProductList(){
    const productsList = await getListAllProducts();
    return displayProductsInCardsLists(productsList);
}