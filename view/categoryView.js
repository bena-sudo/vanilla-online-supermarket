export {
  displayCategoryDetail,
  displayCategoriesInCardsLists,
  displayCategoriesInNavLists,
};
// VIEW
import { displayProductsInCardsLists } from "./productView";
// CONTROLLER
import { getImageCategory } from "../controller/imageController";

// UNUSED
async function displayCategoryInCard(category) {
  const image = await getImageCategory(category.imageURL);
  return `
    <div class="col">
      <div class="card h-100">
        <img src="${image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${category.name}</h5>
        </div>
      </div>
    </div>
  `;
}

// UNUSED
async function generateCategoryInCard(categories) {
  const listCategoriesCards = await Promise.all(
    categories.map(async (category) => {
      return await displayCategoryInCard(category);
    }),
  );
  return listCategoriesCards.join("");
}

// UNUSED
function generateCategoriesDiv(listCategoriesCards) {
  const categoriesDiv = document.createElement("div");
  categoriesDiv.innerHTML = `
    <div class="row row-cols-1 row-cols-md-6 g-4">
      ${listCategoriesCards}
    </div>
  `;
  return categoriesDiv;
}

// UNUSED
async function displayCategoriesInCardsLists(categories) {
  const listCategoriesCards = await generateCategoryInCard(categories);
  const categoriesDiv = generateCategoriesDiv(listCategoriesCards);
  return categoriesDiv;
}

// UNUSED
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
async function displayCategoryInLi(category) {
  //const image = await getImageCategory(category.imageURL);
  return `
      <li class="nav-item">
        <a class="nav-link active" href="/category/${category.id}" onclick="loadContent('categoria1')">
          ${category.name}
        </a>
      </li>
    `;
}

async function generateCategoryInLi(categories) {
  const listCategoriesCards = await Promise.all(
    categories.map(async (category) => {
      return await displayCategoryInLi(category);
    }),
  );
  return listCategoriesCards.join("");
}

function generateCategoriesNav(listCategoriesLi, porductsListDivs) {
  const categoriesDiv = document.createElement("div");
  categoriesDiv.innerHTML = `
    <div class="row">
      <!-- Nav categories -->
      <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div class="position-sticky">
          <ul class="nav flex-column">
            ${listCategoriesLi}
          </ul>
        </div>
      </nav>
      <!-- Container products -->
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div id="productsDiv"></div>
      </main>
    </div>
  `;
  const porductsDiv = categoriesDiv.querySelector("#productsDiv");
  porductsDiv.append(porductsListDivs);
  return categoriesDiv;
}

async function displayCategoriesInNavLists(categories, porductsListDivs) {
  const listCategoriesLi = await generateCategoryInLi(categories);
  const categoriesDiv = generateCategoriesNav(
    listCategoriesLi,
    porductsListDivs,
  );
  return categoriesDiv;
}
