export { getListImagesURLByProductID };
import { getDataSupabase } from "./supabaseService";

async function getListImagesURLByProductID(productID) {
  const data = await getDataSupabase({
    table: "image",
    column: "*",
    filter: "productID=eq." + productID,
  });
  return Array.isArray(data) ? data : [data];
}
