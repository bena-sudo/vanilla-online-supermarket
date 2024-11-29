export { displayProductsInCardsLists, displayProductDetail };
// CONTROLLER
import { getImageProduct } from "../controller/imageController";
// SERVICE
import { getListAllProductsByCategoryID } from "../service/productService";

async function displayProductRelatedInCard(product) {
  const image = await getImageProduct(product.imageURL);
  return ` <div class="col">
    <div class="card text-center">
      <img src="${image}" class="card-img-top" alt="Beef chunk for stew" />
      <div class="card-body text-sm small">
        <h6 class="card-title text-start">${product.name}</h6>
        <p class="card-text text-start">Tray 300 g approx.</p>
        <p class="fw-bold text-start">4,11 € /unit</p>
        <button class="btn btn-outline-warning w-100 mt-auto">
          Add to cart
        </button>
      </div>
    </div>
  </div>`;
}

async function displayProductInCard(product) {
  const productsRelated = await getListAllProductsByCategoryID(
    product.categoryID
  );

  const listProductsRelatedCards = await Promise.all(
    productsRelated.map(async (pro) => {
      if (product.id != pro.id) {
        return await displayProductRelatedInCard(pro);
      }
    })
  );

  const image = await getImageProduct(product.imageURL);
  return `
    <div class="col">
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <button
            class="btn btn-link text-decoration-none p-0 text-start"
            data-toggle="modal"
            data-target="#ModalLong${product.id}"
          >
            <img src="${image}" class="card-img-top" alt="..." />
            <h5 class="card-title text-start text-muted">${product.name}</h5>
            <p class="card-text text-start text-muted">
              ${product.weight} g aprox.
            </p>
          </button>
          <p class="fw-bold text-start text-muted mt-auto">
            ${product.price} /unit
          </p>
          <button
            type="button"
            href="#/store"
            class="btn btn-outline-warning w-100 mt-2"
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
                  <h4 class="fw-bold">${product.name}</h4>
                  <p class="text-muted">${product.description}</p>
                  <h2 class="fw-bold text-success">${product.price}/unit</h2>
                  <button class="btn btn-warning btn-lg w-100 mt-3">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div class="container my-4">
              <h5 class="mb-4 text-sm">Related products</h5>
              <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <!-- Product Card 1 -->
                ${listProductsRelatedCards.join("")}
              </div>
              <p class="mt-4 text-muted small">
                This project is a test application developed solely for
                educational purposes as part of a learning project. It is not a
                functional application and has no commercial or profit-oriented
                intent. The content and design are purely recreations created to
                practice technical skills and do not represent a real product.
              </p>
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
    })
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
