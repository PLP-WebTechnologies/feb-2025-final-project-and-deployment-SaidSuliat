// Wishlist functionality
document.addEventListener("DOMContentLoaded", function () {
  const wishlistGrid = document.getElementById("wishlist-grid");
  const emptyWishlist = document.getElementById("empty-wishlist");
  const wishlistItems = document.getElementById("wishlist-items");
  const wishlistLoading = document.getElementById("wishlist-loading");
  const wishlistActions = document.getElementById("wishlist-actions");
  const addAllToCartBtn = document.getElementById("add-all-to-cart");
  const clearWishlistBtn = document.getElementById("clear-wishlist");
  const confirmModal = document.getElementById("confirm-modal");
  const confirmRemoveBtn = document.getElementById("confirm-remove");
  const cancelRemoveBtn = document.getElementById("cancel-remove");
  const confirmClearModal = document.getElementById("confirm-clear-modal");
  const confirmClearBtn = document.getElementById("confirm-clear");
  const cancelClearBtn = document.getElementById("cancel-clear");

  let itemToRemove = null;

  // Load wishlist items
  function loadWishlistItems() {
    const wishlist = getWishlist();

    // Show/hide appropriate sections
    if (wishlist.length === 0) {
      emptyWishlist.style.display = "block";
      wishlistItems.style.display = "none";
      wishlistActions.style.display = "none";
    } else {
      emptyWishlist.style.display = "none";
      wishlistItems.style.display = "block";
      wishlistActions.style.display = "flex";

      // Generate HTML for wishlist items
      let html = "";
      wishlist.forEach((item) => {
        html += `
          <div class="product-card" data-product-id="${item.id}">
            <div class="product-card-image">
              <a href="../pages/product-detail.html?id=${item.id}">
                <img src="${item.image}" alt="${item.name}">
              </a>
              
              <div class="product-card-badges">
                ${item.isNew ? '<span class="badge badge-new">New</span>' : ""}
                ${
                  item.onSale
                    ? '<span class="badge badge-sale">Sale</span>'
                    : ""
                }
              </div>
              
              <div class="product-card-actions">
                <button class="product-action remove-from-wishlist" title="Remove from Wishlist">
                  <i class="fas fa-heart"></i>
                </button>
                <button class="product-action quick-view" title="Quick View">
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>
            
            <div class="product-card-content">
              <div class="product-card-category"></div>
              
              <h3 class="product-card-title">
                <a href="../pages/product-detail.html?id=${item.id}">${
          item.name
        }</a>
              </h3>
              
              <div class="product-card-price">
                <span class="current-price">${formatPrice(
                  item.onSale ? item.salePrice : item.price
                )}</span>
                ${
                  item.onSale
                    ? `<span class="old-price">${formatPrice(
                        item.price
                      )}</span>`
                    : ""
                }
              </div>
              
              <div class="product-card-footer">
                <button class="add-to-cart" data-product-id="${item.id}">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        `;
      });

      wishlistGrid.innerHTML = html;

      // Add event listeners to wishlist items
      addWishlistItemEventListeners();
    }

    // Hide loading spinner
    wishlistLoading.style.display = "none";
  }

  // Add event listeners to wishlist items
  function addWishlistItemEventListeners() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          addToCart(product);
          removeFromWishlist(productId); /////////////////modified
          loadWishlistItems();
        }
      });
    });

    // Remove from wishlist buttons
    const removeButtons = document.querySelectorAll(".remove-from-wishlist");
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(
          this.closest(".product-card").getAttribute("data-product-id")
        );
        itemToRemove = productId;
        confirmModal.classList.add("active");
      });
    });

    // Quick view buttons
    const quickViewButtons = document.querySelectorAll(".quick-view");
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(
          this.closest(".product-card").getAttribute("data-product-id")
        );
        window.location.href = `../pages/product-detail.html?id=${productId}`;
      });
    });
  }

  // Initialize wishlist functionality
  if (wishlistGrid) {
    // Load wishlist items
    loadWishlistItems();

    // Add all to cart button
    if (addAllToCartBtn) {
      addAllToCartBtn.addEventListener("click", function () {
        const wishlist = getWishlist();
        wishlist.forEach((item) => {
          const product = PRODUCTS_DATA.find((p) => p.id === item.id);
          if (product) {
            addToCart(product);
            removeFromWishlist(product.id);
          }
        });
        loadWishlistItems();
      });
    }

    // Clear wishlist button
    if (clearWishlistBtn) {
      clearWishlistBtn.addEventListener("click", function () {
        confirmClearModal.classList.add("active");
      });
    }

    // Confirm remove modal
    if (confirmModal && confirmRemoveBtn && cancelRemoveBtn) {
      confirmRemoveBtn.addEventListener("click", function () {
        if (itemToRemove !== null) {
          removeFromWishlist(itemToRemove);
          loadWishlistItems();
          itemToRemove = null;
        }
        confirmModal.classList.remove("active");
      });

      cancelRemoveBtn.addEventListener("click", function () {
        itemToRemove = null;
        confirmModal.classList.remove("active");
      });
    }

    // Confirm clear modal
    if (confirmClearModal && confirmClearBtn && cancelClearBtn) {
      confirmClearBtn.addEventListener("click", function () {
        clearWishlist();
        loadWishlistItems();
        confirmClearModal.classList.remove("active");
      });

      cancelClearBtn.addEventListener("click", function () {
        confirmClearModal.classList.remove("active");
      });
    }
  }
});
