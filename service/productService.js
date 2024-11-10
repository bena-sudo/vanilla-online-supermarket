export { getListAllProducts, getProductInfo, getListAllProductsByCategoryID };
// SERVICE
import { getDataSupabase } from "./supabaseService";

async function getListAllProducts() {
  const data = await getDataSupabase({
    table: "product",
    column: "*",
    filter: "",
  });
  return Array.isArray(data) ? data : [data];
}

async function getProductInfo(productID) {
  const data = await getDataSupabase({
    table: "product",
    column: "*",
    filter: "id=eq." + productID,
  });
  return Array.isArray(data) ? data : [data];
}

async function getListAllProductsByCategoryID(categoryID) {
  const data = await getDataSupabase({
    table: "product",
    column: "*",
    filter: "categoryID=eq." + categoryID,
  });
  return Array.isArray(data) ? data : [data];
}