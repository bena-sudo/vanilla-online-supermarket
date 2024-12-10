import { createProduct } from "../controller/productController";

export class CreateProduct extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <form id="editProductForm">
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
    `;

    const butonForm = this.querySelector("#editProductForm button");
    butonForm.addEventListener("click", () => {
      const data = new FormData(document.querySelector("#editProductForm"));
      createProduct(Object.fromEntries(data));
    });
  }
}
customElements.define("create-product", CreateProduct);
