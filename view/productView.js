export { displayProductsInCardsLists, displayProductDetail };
// CONTROLLER
import { getImageProduct } from "../controller/imageController";

async function displayProductInCard(product) {
  const image = await getImageProduct(product.imageURL);
  return `
    <div class="col">
      <div class="card h-100">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.weight} g aprox.</p>
          <p class="card-text">${product.price} €/ud.</p>
        </div>
      </div>
    </div>
  `;
}

async function generateProductsInCard(products) {
  const listProductsCards = await Promise.all(
    products.map(async (product) => {
      return await displayProductInCard(product);
    }),
  );
  return listProductsCards.join("");
}

function generateProductsDiv(listProductsCards) {
  const productsDiv = document.createElement("div");
  productsDiv.innerHTML = `
    <div class="row row-cols-1 row-cols-md-5 g-4">
      ${listProductsCards}
    </div>
  `;
  return productsDiv;
}

async function displayProductsInCardsLists(products) {
  const listProductsCards = await generateProductsInCard(products);
  const productsDiv = generateProductsDiv(listProductsCards);
  return productsDiv;
}

function displayProductDetail(product) {
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
    <div
      class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
    >
      <div class="my-3 p-3">
        <h2 class="display-5">${product.name}</h2>
        <p class="lead">${product.description}</p>
      </div>
      <div
        class="bg-white box-shadow mx-auto"
        style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
      ></div>
    </div>
  `;
  return productDiv;
}
