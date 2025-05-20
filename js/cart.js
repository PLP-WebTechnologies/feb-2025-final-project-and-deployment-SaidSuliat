// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartDiscount = document.getElementById('cart-discount');
  const cartShipping = document.getElementById('cart-shipping');
  const cartTax = document.getElementById('cart-tax');
  const cartTotal = document.getElementById('cart-total');
  const emptyCart = document.getElementById('empty-cart');
  const cartWithItems = document.getElementById('cart-with-items');
  const cartLoading = document.getElementById('cart-loading');
  const clearCartBtn = document.getElementById('clear-cart-btn');
  const confirmModal = document.getElementById('confirm-modal');
  const confirmRemoveBtn = document.getElementById('confirm-remove');
  const cancelRemoveBtn = document.getElementById('cancel-remove');
  
  let itemToRemove = null;

  // Load cart items
  function loadCartItems() {
    const cart = getCart();
    
    // Show/hide appropriate sections
    if (cart.length === 0) {
      emptyCart.style.display = 'block';
      cartWithItems.style.display = 'none';
    } else {
      emptyCart.style.display = 'none';
      cartWithItems.style.display = 'block';
      
      // Generate HTML for cart items
      let html = '';
      cart.forEach((item, index) => {
        html += `
          <div class="cart-item" data-index="${index}">
            <div class="cart-item-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
              <h3 class="cart-item-name">${item.name}</h3>
              ${item.options ? `
                <div class="cart-item-options">
                  ${Object.entries(item.options).map(([key, value]) => `
                    <span>${key}: ${value}</span>
                  `).join(', ')}
                </div>
              ` : ''}
            </div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="cart-item-quantity">
              <button class="quantity-btn decrease" ${item.quantity <= 1 ? 'disabled' : ''}>
                <i class="fas fa-minus"></i>
              </button>
              <input type="number" value="${item.quantity}" min="1" class="quantity-input">
              <button class="quantity-btn increase">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
            <div class="cart-item-actions">
              <button class="remove-item">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        `;
      });
      
      cartItemsContainer.innerHTML = html;
      
      // Add event listeners to cart items
      addCartItemEventListeners();
    }
    
    // Hide loading spinner
    cartLoading.style.display = 'none';
    
    // Update cart summary
    updateCartSummary();
  }

  // Add event listeners to cart items
  function addCartItemEventListeners() {
    // Quantity buttons
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const cartItem = this.closest('.cart-item');
        const index = parseInt(cartItem.getAttribute('data-index'));
        const input = cartItem.querySelector('.quantity-input');
        let quantity = parseInt(input.value);
        
        if (this.classList.contains('decrease')) {
          quantity = Math.max(1, quantity - 1);
        } else {
          quantity++;
        }
        
        updateCartItemQuantity(index, quantity);
        loadCartItems();
      });
    });
    
    // Quantity inputs
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
      input.addEventListener('change', function() {
        const cartItem = this.closest('.cart-item');
        const index = parseInt(cartItem.getAttribute('data-index'));
        let quantity = parseInt(this.value);
        
        if (isNaN(quantity) || quantity < 1) {
          quantity = 1;
        }
        
        updateCartItemQuantity(index, quantity);
        loadCartItems();
      });
    });
    
    // Remove buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const cartItem = this.closest('.cart-item');
        itemToRemove = parseInt(cartItem.getAttribute('data-index'));
        confirmModal.classList.add('active');
      });
    });
  }

  // Update cart summary
  function updateCartSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    let shipping = 0;
    
    // Get selected shipping option
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');
    shippingOptions.forEach(option => {
      if (option.checked) {
        switch (option.value) {
          case 'standard':
            shipping = 5.99;
            break;
          case 'express':
            shipping = 12.99;
            break;
        }
      }
    });
    
    const tax = subtotal * 0.08; // 8% tax rate
    const total = subtotal + shipping + tax;
    
    // Update summary values
    cartSubtotal.textContent = formatPrice(subtotal);
    cartShipping.textContent = formatPrice(shipping);
    cartTax.textContent = formatPrice(tax);
    cartTotal.textContent = formatPrice(total);
  }

  // Initialize cart functionality
  if (cartItemsContainer) {
    // Load cart items
    loadCartItems();
    
    // Clear cart button
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', function() {
        clearCart();
        loadCartItems();
      });
    }
    
    // Shipping options
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');
    shippingOptions.forEach(option => {
      option.addEventListener('change', updateCartSummary);
    });
    
    // Confirm remove modal
    if (confirmModal && confirmRemoveBtn && cancelRemoveBtn) {
      confirmRemoveBtn.addEventListener('click', function() {
        if (itemToRemove !== null) {
          removeFromCart(itemToRemove);
          loadCartItems();
          itemToRemove = null;
        }
        confirmModal.classList.remove('active');
      });
      
      cancelRemoveBtn.addEventListener('click', function() {
        itemToRemove = null;
        confirmModal.classList.remove('active');
      });
      
      // Close modal when clicking outside
      confirmModal.addEventListener('click', function(e) {
        if (e.target === this) {
          itemToRemove = null;
          confirmModal.classList.remove('active');
        }
      });
    }
  }
});