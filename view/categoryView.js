export { displayCategoriesInToolbar, displayCategoryDetail };
// VIEW
import { displayProductsInCardsLists } from "./productView";

function displayCategoryInButton(category) {
  return `
    <button type="button" class="btn btn-secondary">${category.name}</button>
  `;
}

function displayCategoriesInToolbar(categories) {
  const productsDiv = document.createElement("div");
  productsDiv.innerHTML = `
    <div
      class="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div class="btn-group mr-2" role="group" aria-label="First group">
        ${categories
          .map((category) => {
            return displayCategoryInButton(category);
          })
          .join("")}
      </div>
    </div>
  `;
  return productsDiv;
}

function displayCategoryDetail(category,products) {
  const categoryDiv = document.createElement("div");
  categoryDiv.innerHTML = `
    <div
      class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
    >
      <div class="my-3 p-3">
        <h2 class="display-5">${category.name}</h2>
        <p class="lead">${category.description}</p>
      </div>
      <div id="porductsList"
        class="bg-white box-shadow mx-auto"
        style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
      ></div>
    </div>
  `;

  const productsDiv = categoryDiv.querySelector("#porductsList");
  productsDiv.append(displayProductsInCardsLists(products));
  return categoryDiv;
}
