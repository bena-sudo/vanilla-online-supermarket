export { displayProductsInCardsLists, displayProductDetail };
// CONTROLLER
import { getImageProduct } from "../controller/imageController";

async function displayProductInCard(product) {
  const image = await getImageProduct(product.imageURL);
  return `
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <button
            class="btn btn-link text-decoration-none"
            data-toggle="modal"
            data-target="#ModalLong${product.id}"
          >
            <img src="${image}" class="card-img-top" alt="..." />
            <h5 class="card-title text-muted">${product.name}</h5>
            <p class="card-text text-muted">${product.weight} g aprox.</p>
            <p class="card-text text-muted">${product.price} €/ud.</p>
          </button>
          <button
            type="button"
            href="#/store"
            class="btn btn-outline-warning w-100"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <!-- Modal --->
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      id="ModalLong${product.id}"
      aria-labelledby="ModalLongTitle${product.id}"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            
              <div>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
              </div>
              
            
          </div>
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
