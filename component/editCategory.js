import { editCategory } from "../controller/categoryController";

export class EditCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const category = JSON.parse(this.getAttribute("data-category"));

    this.innerHTML = `
      <form id="editCategoryForm">
        <div class="form-group">
        <label for="InputName">ID</label>
          <input
            type="text"
            class="form-control"
            id="InputName"
            readonly
            name="id"
            value="${category.id}"
          />
          <label for="InputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="InputName"
            placeholder="Enter name"
            name="name"
            value="${category.name}"
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
            value="${category.description}"
          />
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
      </form>`;

    const botonForm = this.querySelector("#editCategoryForm button");
    botonForm.addEventListener("click", () => {
      const data = new FormData(document.querySelector("#editCategoryForm"));
      editCategory(Object.fromEntries(data));
    });
  }
}
customElements.define("edit-category", EditCategory);
