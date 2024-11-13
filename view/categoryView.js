export {
  displayCategoriesInToolbar,
  displayCategoryDetail,
  displayCategoriesInCardsLists,
};
// VIEW
import { displayProductsInCardsLists } from "./productView";
// CONTROLLER
import { getImageCategory } from "../controller/imageController";

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

async function displayCategoryInCard(category) {
  const image = await getImageCategory(category.imageURL);
  return `
    <div class="col">
      <div class="card h-100">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${category.name}</h5>
        </div>
      </div>
    </div>
  `;
}

async function generateCategoryInCard(categories) {
  const listCategoriesCards = await Promise.all(
    categories.map(async (category) => {
      return await displayCategoryInCard(category);
    })
  );
  return listCategoriesCards.join("");
}

function generateCategoriesDiv(listCategoriesCards) {
  const categoriesDiv = document.createElement("div");
  categoriesDiv.innerHTML = `
    <div class="row row-cols-1 row-cols-md-6 g-4">
      ${listCategoriesCards}
    </div>
  `;
  return categoriesDiv;
}

async function displayCategoriesInCardsLists(categories) {
  const listCategoriesCards = await generateCategoryInCard(categories);
  const categoriesDiv = generateCategoriesDiv(listCategoriesCards);
  return categoriesDiv;
}

function displayCategoryDetail(category, products) {
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
