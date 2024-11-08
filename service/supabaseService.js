export { getDataSupabase };

async function getDataSupabase({ table, column, filter }) {
  if (!column) {
    column = "*";
  }
  let route = `https://oczyaubkiglaukdewroq.supabase.co/rest/v1/${table}?select=${column}`;
  if (filter) {
    route += `&${filter}`;
  }
  const response = await fetch(route, {
    method: "get",
    headers: {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jenlhdWJraWdsYXVrZGV3cm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1ODM4ODEsImV4cCI6MjA0NDE1OTg4MX0.MyXcg2uullOgKWOZV3Odaao1bDrz08dRjRNecUhnKtE",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jenlhdWJraWdsYXVrZGV3cm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1ODM4ODEsImV4cCI6MjA0NDE1OTg4MX0.MyXcg2uullOgKWOZV3Odaao1bDrz08dRjRNecUhnKtE",
    },
  })
    .then((response) =>
      response.status == 200 ? response : Promise.reject(response.status)
    )
    .then((response) => response.json())
    .catch((error) => Promise.reject("ERROR : " + error));
  return response;
}
