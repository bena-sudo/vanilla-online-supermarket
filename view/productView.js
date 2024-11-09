export { displayProductsInCardsLists, displayProductDetail };

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
