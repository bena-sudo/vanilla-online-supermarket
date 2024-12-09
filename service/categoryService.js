export { getListAllCategories, getCategoryInfo, createCategoryService };
// SERVICE
import { getDataSupabase, postDataSupabase } from "./supabaseService";

async function getListAllCategories() {
  const data = await getDataSupabase({
    table: "category",
    column: "*",
    filter: "",
  });
  return Array.isArray(data) ? data : [data];
}

async function getCategoryInfo(categoryID) {
  const data = await getDataSupabase({
    table: "category",
    column: "*",
    filter: "id=eq." + categoryID,
  });
  return Array.isArray(data) ? data : [data];
}

async function createCategoryService(category) {
  const data = await postDataSupabase({
    table: "category",
    body: category,
  });
  return Array.isArray(data) ? data : [data];
}
