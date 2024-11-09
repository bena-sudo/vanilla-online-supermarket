export { getListAllProducts, getProductInfo };
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
