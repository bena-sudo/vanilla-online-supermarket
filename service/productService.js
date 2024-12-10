export {
  getListAllProducts,
  getProductInfo,
  getListAllProductsByCategoryID,
  getListAllProductsSupabe,
  createProductService,
};
// SERVICE
import { getDataSupabase, postDataSupabase } from "./supabaseService";
import { SUPABASE_KEY, SUPABASE_URL } from "./supabaseService";
import { createClient } from "@supabase/supabase-js";

async function getListAllProductsSupabe() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const { data, error } = await supabase.from("product").select("*");
  if (error) {
    console.error(error);
  }
  return Array.isArray(data) ? data : [data];
}

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

async function createProductService(product) {
  const data = await postDataSupabase({
    table: "product",
    body: product,
  });
  return Array.isArray(data) ? data : [data];
}
