export { displayProductsInCardsLists, displayProductDetail };
// CONTROLLER
import { getImageProduct } from "../controller/imageController";
// SERVICE
import { getListAllProductsByCategoryID } from "../service/productService";

async function displayProductInCard(product) {
  const image = await getImageProduct(product.imageURL);
  return `
    <div class="col">
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <a
            class="btn btn-link text-decoration-none p-0 text-start h-100"
            href="/product/${product.id}"
          >
            <img src="${image}" class="card-img-top" alt="${product.name}" />
            <h5 class="card-title text-start text-muted">${product.name}</h5>
            <p class="card-text text-start text-muted">
              ${product.weight} g aprox.
            </p>
            <p class="fw-bold text-start text-muted">
            ${product.price}€
            </p>
            </a>
          <button
            type="button"
            href="#/store"
            class="btn btn-outline-warning w-100 mt-auto"
          >
            Add to cart
          </button>
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

async function displayProductDetail(product) {
  const productsRelated = await getListAllProductsByCategoryID(
    product.categoryID,
  );

  const listProductsRelatedCards = await Promise.all(
    productsRelated.map(async (pro) => {
      if (product.id != pro.id) {
        return await displayProductInCard(pro);
      }
    }),
  );
  const productDiv = document.createElement("div");
  const image = await getImageProduct(product.imageURL);
  productDiv.innerHTML = `
    <div class="container mt-4">
      <div class="row">
        <!-- Image Section -->
        <div class="col-md-7">
          <img
            src="${image}"
            class="img-fluid"
            alt="Hacendado Mediterranean fruit + milk"
          />
        </div>
        <!-- Product Details Section -->
        <div class="col-md-4">
          <h2 class="fw-bold">${product.name}</h2>
          <p class="text-muted">${product.description}</p>
          <h2 class="fw-bold text-success">${product.price}€</h2>
          <button class="btn btn-warning btn-lg w-100 mt-3">Add to cart</button>
        </div>
      </div>
    </div>

    <!-- Product Related Section -->
    <div class="container my-4">
      <h4 class="mb-4 text-sm">Related products</h4>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        <!-- Product Card 1 -->
        ${listProductsRelatedCards.join("")}
      </div>
    </div>
  `;
  return productDiv;
}
