export { displayCategoriesInToolbar };

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
