export { getListAllProducts };
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
