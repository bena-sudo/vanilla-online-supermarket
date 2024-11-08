export { displayProductsInCardsLists };

function displayProductInCard(product) {
  return `
    <div class="col">
      <div class="card h-100">
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <!--<img src="..." class="card-img-top" alt="...">-->
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.weight} g aprox.</p>
          <p class="card-text">${product.price} €/ud.</p>
        </div>
      </div>
    </div>
  `;
}

function displayProductsInCardsLists(products) {
  const productsDiv = document.createElement("div");
  productsDiv.innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4">
      ${products
        .map((product) => {
          return displayProductInCard(product);
        })
        .join("")}
    </div>
  `;

  return productsDiv;
}
