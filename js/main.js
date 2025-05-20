/**
 * HertzGiggles Ecommerce - Main JavaScript
 * 
 * This script contains common functionality used across the website.
 */

// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const searchToggle = document.getElementById('search-toggle');
const searchForm = document.getElementById('search-form');
const cartCountElement = document.getElementById('cart-count');
const wishlistCountElement = document.getElementById('wishlist-count');
const currentYearElements = document.querySelectorAll('#current-year');

// Mobile dropdown toggles
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

// Store data structure
const STORAGE_KEYS = {
  CART: 'hertzgiggles_cart',
  WISHLIST: 'hertzgiggles_wishlist',
  RECENTLY_VIEWED: 'hertzgiggles_recently_viewed'
};

/**
 * Initialize the main functionality when DOM content is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  setCurrentYear();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize search functionality
  initSearch();
  
  // Initialize cart and wishlist counts
  updateCartCount();
  updateWishlistCount();
  
  // Initialize any modals present on the page
  initModals();
});

/**
 * Set the current year in the footer copyright
 */
function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  
  if (currentYearElements) {
    currentYearElements.forEach(element => {
      element.textContent = currentYear;
    });
  }
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Update icon based on menu state
      if (mobileMenu.classList.contains('active')) {
        mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
  
  // Mobile dropdown functionality
  if (mobileDropdownToggles) {
    mobileDropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the parent mobile-dropdown element
        const parent = this.closest('.mobile-dropdown');
        
        // Toggle active class
        parent.classList.toggle('active');
        
        // Update icon based on dropdown state
        const icon = this.querySelector('i');
        if (parent.classList.contains('active')) {
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
        } else {
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        }
      });
    });
  }
}

/**
 * Initialize search functionality
 */
function initSearch() {
  if (searchToggle && searchForm) {
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      searchForm.classList.toggle('active');
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchToggle.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
      }
    });
  }
}

/**
 * Initialize modal functionality
 */
function initModals() {
  const modals = document.querySelectorAll('.modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  
  // Close modal when clicking the close button
  if (closeModalButtons) {
    closeModalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
        }
      });
    });
  }
  
  // Close modal when clicking outside the modal content
  if (modals) {
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('active');
        }
      });
    });
  }
}

/**
 * Cart functionality
 */

// Get cart items from localStorage
function getCart() {
  const cart = localStorage.getItem(STORAGE_KEYS.CART);
  return cart ? JSON.parse(cart) : [];
}

// Save cart items to localStorage
function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartCount();
}

// Add item to cart
function addToCart(product, quantity = 1, options = {}) {
  const cart = getCart();
  
  // Check if product is already in cart
  const existingItemIndex = cart.findIndex(item => 
    item.id === product.id && 
    JSON.stringify(item.options) === JSON.stringify(options)
  );
  
  if (existingItemIndex !== -1) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new item to cart
    cart.push({
      id: product.id,
      name: product.name,
      price: product.onSale ? product.salePrice : product.price,
      image: product.images[0],
      quantity: quantity,
      options: options
    });
  }
  
  saveCart(cart);
  
  // Show success message or update UI
  showToast('Item added to cart!', 'success');
  
  return cart;
}

// Remove item from cart
function removeFromCart(itemIndex) {
  const cart = getCart();
  
  if (itemIndex >= 0 && itemIndex < cart.length) {
    cart.splice(itemIndex, 1);
    saveCart(cart);
    
    // Show success message or update UI
    showToast('Item removed from cart!', 'success');
  }
  
  return cart;
}

// Update cart item quantity
function updateCartItemQuantity(itemIndex, quantity) {
  const cart = getCart();
  
  if (itemIndex >= 0 && itemIndex < cart.length) {
    if (quantity <= 0) {
      // Remove item if quantity is zero or negative
      return removeFromCart(itemIndex);
    } else {
      cart[itemIndex].quantity = quantity;
      saveCart(cart);
    }
  }
  
  return cart;
}

// Clear entire cart
function clearCart() {
  localStorage.removeItem(STORAGE_KEYS.CART);
  updateCartCount();
  
  // Show success message or update UI
  showToast('Cart cleared!', 'success');
  
  return [];
}

// Calculate cart total
function calculateCartTotal() {
  const cart = getCart();
  
  return cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

// Update cart count in the header
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  
  if (cartCountElement) {
    cartCountElement.textContent = count;
    
    if (count > 0) {
      cartCountElement.style.display = 'flex';
    } else {
      cartCountElement.style.display = 'none';
    }
  }
}

/**
 * Wishlist functionality
 */

// Get wishlist items from localStorage
function getWishlist() {
  const wishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
  return wishlist ? JSON.parse(wishlist) : [];
}

// Save wishlist items to localStorage
function saveWishlist(wishlist) {
  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  updateWishlistCount();
}

// Add item to wishlist
function addToWishlist(product) {
  const wishlist = getWishlist();
  
  // Check if product is already in wishlist
  const exists = wishlist.some(item => item.id === product.id);
  
  if (!exists) {
    // Add new item to wishlist
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.onSale ? product.salePrice : product.price,
      image: product.images[0],
      onSale: product.onSale || false,
      salePrice: product.salePrice || 0
    });
    
    saveWishlist(wishlist);
    
    // Show success message or update UI
    showToast('Item added to wishlist!', 'success');
    return true;
  } else {
    // Show message that item is already in wishlist
    showToast('Item is already in your wishlist!', 'info');
    return false;
  }
}

// Remove item from wishlist
function removeFromWishlist(productId) {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(item => item.id !== productId);
  
  if (updatedWishlist.length !== wishlist.length) {
    saveWishlist(updatedWishlist);
    
    // Show success message or update UI
    showToast('Item removed from wishlist!', 'success');
    return true;
  }
  
  return false;
}

// Check if an item is in wishlist
function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}

// Toggle wishlist status for an item
function toggleWishlist(product) {
  if (isInWishlist(product.id)) {
    return removeFromWishlist(product.id);
  } else {
    return addToWishlist(product);
  }
}

// Clear entire wishlist
function clearWishlist() {
  localStorage.removeItem(STORAGE_KEYS.WISHLIST);
  updateWishlistCount();
  
  // Show success message or update UI
  showToast('Wishlist cleared!', 'success');
  
  return [];
}

// Update wishlist count in the header
function updateWishlistCount() {
  const wishlist = getWishlist();
  const count = wishlist.length;
  
  if (wishlistCountElement) {
    wishlistCountElement.textContent = count;
    
    if (count > 0) {
      wishlistCountElement.style.display = 'flex';
    } else {
      wishlistCountElement.style.display = 'none';
    }
  }
}

/**
 * Recently Viewed Products functionality
 */

// Get recently viewed products from localStorage
function getRecentlyViewed() {
  const recentlyViewed = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
  return recentlyViewed ? JSON.parse(recentlyViewed) : [];
}

// Save recently viewed products to localStorage
function saveRecentlyViewed(products) {
  localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(products));
}

// Add product to recently viewed
function addToRecentlyViewed(product) {
  const recentlyViewed = getRecentlyViewed();
  
  // Remove product if it's already in the list
  const filteredProducts = recentlyViewed.filter(item => item.id !== product.id);
  
  // Add product to the beginning of the list
  filteredProducts.unshift({
    id: product.id,
    name: product.name,
    price: product.price,
    salePrice: product.salePrice,
    onSale: product.onSale,
    image: product.images[0],
    category: product.category
  });
  
  // Limit to 8 most recent products
  const limitedProducts = filteredProducts.slice(0, 8);
  
  saveRecentlyViewed(limitedProducts);
  
  return limitedProducts;
}

/**
 * Helper functions
 */

// Format price as currency
function formatPrice(price) {
  return '$' + price.toFixed(2);
}

// Get URL parameters
function getUrlParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  
  return params;
}

// Show toast notification
function showToast(message, type = 'info') {
  // Check if toast container exists, if not create it
  let toastContainer = document.querySelector('.toast-container');
  
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    
    // Add styles if not already present
    if (!document.getElementById('toast-styles')) {
      const style = document.createElement('style');
      style.id = 'toast-styles';
      style.textContent = `
        .toast-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
        }
        
        .toast {
          min-width: 250px;
          margin-top: 10px;
          padding: 12px 16px;
          border-radius: 4px;
          background-color: #333;
          color: white;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          font-size: 14px;
          animation: slideIn 0.3s ease, fadeOut 0.5s ease 2.5s forwards;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .toast.success {
          background-color: #28a745;
        }
        
        .toast.error {
          background-color: #dc3545;
        }
        
        .toast.info {
          background-color: #17a2b8;
        }
        
        .toast.warning {
          background-color: #ffc107;
          color: #333;
        }
        
        .toast-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 16px;
          margin-left: 10px;
        }
        
        .toast.warning .toast-close {
          color: #333;
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Create message element
  const messageEl = document.createElement('span');
  messageEl.textContent = message;
  
  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'toast-close';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', function() {
    toast.remove();
  });
  
  // Add message and close button to toast
  toast.appendChild(messageEl);
  toast.appendChild(closeButton);
  
  // Add toast to container
  toastContainer.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(function() {
    toast.remove();
  }, 3000);
}