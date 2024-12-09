export {
  getDataSupabase,
  getImageSupabase,
  postDataSupabase,
  putDataSupabase,
  SUPABASE_URL,
  SUPABASE_KEY,
};

const SUPABASE_URL = "https://oczyaubkiglaukdewroq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jenlhdWJraWdsYXVrZGV3cm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1ODM4ODEsImV4cCI6MjA0NDE1OTg4MX0.MyXcg2uullOgKWOZV3Odaao1bDrz08dRjRNecUhnKtE";

async function getDataSupabase({ table, column, filter }) {
  if (!column) {
    column = "*";
  }
  let route = `https://oczyaubkiglaukdewroq.supabase.co/rest/v1/${table}?select=${column}`;
  if (filter) {
    route += `&${filter}`;
  }
  const response = await fetch(route, {
    method: "GET",
    headers: {
      apiKey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  })
    .then((response) =>
      response.status == 200 ? response : Promise.reject(response.status),
    )
    .then((response) => response.json())
    .catch((error) => Promise.reject("ERROR : " + error));
  return response;
}

async function getImageSupabase(imageURL) {
  let route = `https://oczyaubkiglaukdewroq.supabase.co/storage/v1/object/${imageURL}`;
  const response = await fetch(route, {
    method: "GET",
    headers: {
      apiKey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  })
    .then((response) =>
      response.status == 200 ? response : Promise.reject(response.status),
    )
    .then((response) => response.blob())
    .catch((error) => Promise.reject("ERROR : " + error));
  return response;
}

async function postDataSupabase({ table, body }) {
  let route = `https://oczyaubkiglaukdewroq.supabase.co/rest/v1/${table}`;

  const response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) =>
      response.status == 200 ? response : Promise.reject(response.status),
    )
    .then((response) => response.json())
    .catch((error) => Promise.reject("ERROR : " + error));
  return response;
}

async function putDataSupabase({ table, filter, body }) {
  let route = `https://oczyaubkiglaukdewroq.supabase.co/rest/v1/${table}?${filter}`;

  const response = await fetch(route, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      apiKey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) =>
      response.status == 200 ? response : Promise.reject(response.status),
    )
    .then((response) => response.json())
    .catch((error) => Promise.reject("ERROR : " + error));
  return response;
}
