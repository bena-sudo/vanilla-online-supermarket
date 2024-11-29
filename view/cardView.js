export { displayCardList };
// SERVICE
import { getImageProduct } from "../controller/imageController";

  async function displayProductInCard(product){
  const image = await getImageProduct(product.imageURL);
  return `<div class="container">
          <div
            class="border p-3 rounded d-flex align-items-center justify-content-between"
          >
            <div class="d-flex flex-column">
              <h6 class="mb-1">${product.name}</h6>
              <p class="mb-2 text-muted">${product.price} € / unit</p>
              <div>
                <span class="fw-bold text-primary">1 unit</span>
              </div>
            </div>
            <img
              src="${image}"
              alt="${product.name}"
              class="img-fluid rounded w-50"
            />
          </div>
        </div>`
}

async function generateProductsInCard(products) {
  const listProductsCards = await Promise.all(
    products.map(async (product) => {
      return await displayProductInCard(product);
    }),
  );
  return listProductsCards.join("");
}

async function displayCardList(products) {
  const listProductsCards = await generateProductsInCard(products);
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="userOffcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Cart</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
      ${listProductsCards}
      </div>
    </div>
  `;
  return cardDiv;
}
