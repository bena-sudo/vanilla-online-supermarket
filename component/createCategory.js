import { createCategory } from "../controller/categoryController";

export class CreateCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const categoriesList = JSON.parse(this.getAttribute("data-categorieslist"));

    this.innerHTML = `
      <form id="editCategoryForm">
        <div class="form-group">
          <label for="InputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="InputName"
            placeholder="Enter name"
            name="name"
          />
          <small id="nameHelp" class="form-text text-muted"
            >You need to enter a valid name.</small
          >
        </div>
        <div class="form-group">
          <label for="InputDescription">Description</label>
          <input
            type="textarea"
            class="form-control"
            id="InputDescription"
            placeholder="Enter description"
            name="description"
          />
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
      </form>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Desciption</th>
          </tr>
        </thead>
        <tbody>
          ${categoriesList
            .map((product) => {
              return `
            <tr>
              <th scope="row">${product.id}</th>
              <td>${product.name}</td>
              <td>${product.description}</td>
            </tr>`;
            })
            .join("")}
        </tbody>
      </table>`;

    const butonForm = this.querySelector("#editCategoryForm button");
    butonForm.addEventListener("click", () => {
      const data = new FormData(document.querySelector("#editCategoryForm"));
      createCategory(Object.fromEntries(data));
    });
  }
}
customElements.define("create-category", CreateCategory);
