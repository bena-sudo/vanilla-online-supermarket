export { displayCardList };

function displayCardList() {
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = `<!-- Offcanvas (Right Panel) -->
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
       <div class="container mt-5">
      <div class="border p-3 rounded d-flex align-items-center justify-content-between">
        <!-- Detalles del producto -->
        <div class="d-flex flex-column">
          <h6 class="mb-1">Light olive oil Hacendado</h6>
          <p class="mb-2 text-muted">6,75 € / unit</p>
          <div>
            <span class="fw-bold text-primary">1 unit</span>
          </div>
        </div>
        <!-- Imagen del producto -->
        <img
          src="https://via.placeholder.com/60"
          alt="Product Image"
          class="img-fluid rounded"
        />
      </div>
    </div>
      </div>
      </div>
    </div>`;
  return cardDiv;
}
