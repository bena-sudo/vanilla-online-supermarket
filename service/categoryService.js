export { getListAllCategories };
// SERVICE
import { getDataSupabase } from "./supabaseService";

async function getListAllCategories() {
  const data = await getDataSupabase({
    table: "category",
    column: "*",
    filter: "",
  });
  return Array.isArray(data) ? data : [data];
}
