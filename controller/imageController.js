export { getImageProduct, getImageCategory };
// SERVICE
import { getImageSupabase } from "../service/supabaseService";

async function getImageProduct(imageURL) {
  const objectBlob = await getImageSupabase(imageURL);
  return URL.createObjectURL(objectBlob);
}

async function getImageCategory(imageURL) {
  const objectBlob = await getImageSupabase(imageURL);
  return URL.createObjectURL(objectBlob);
}
