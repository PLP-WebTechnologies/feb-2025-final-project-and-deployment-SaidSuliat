/**
 * HertzGiggles E-commerce - Product Detail Page JavaScript
 *
 * This script handles the product detail page functionality.
 */

// DOM Elements
const productDetailContainer = document.getElementById("product-detail");
const relatedProductsContainer = document.getElementById("related-products");
const recentlyViewedContainer = document.getElementById(
  "recently-viewed-products"
);
const descriptionPanel = document.getElementById("description-panel");
const featuresPanel = document.getElementById("features-panel");
const specificationsPanel = document.getElementById("specifications-panel");
const reviewsPanel = document.getElementById("reviews-panel");
const reviewsContainer = document.querySelector(".reviews-container");
const categoryBreadcrumb = document.getElementById("category-breadcrumb");
const categoryLink = document.getElementById("category-link");
const productNameBreadcrumb = document.getElementById(
  "product-name-breadcrumb"
);
const tabButtons = document.querySelectorAll(".tab-btn");
const averageRating = document.getElementById("average-rating");
const averageRatingStars = document.getElementById("average-rating-stars");
const totalReviews = document.getElementById("total-reviews");
const reviewsList = document.getElementById("reviews-list");
const reviewCount = document.getElementById("review-count");
const writeReviewBtn = document.getElementById("write-review-btn");
const reviewFormContainer = document.getElementById("review-form-container");
const cancelReviewBtn = document.getElementById("cancel-review");
const reviewForm = document.getElementById("review-form");
const ratingSelect = document.querySelectorAll(".rating-select i");
const ratingValue = document.getElementById("rating-value");

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Variables for product data
let currentProduct = null;
let currentQuantity = 1;
let selectedOptions = {};

// Mock data for the current product (in real app, this would come from a server API)
// Using same product data from products.js
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Interactive Learning Robot",
    description:
      "A fun educational robot that teaches children coding, math, and language through interactive games and challenges.",
    price: 59.99,
    images: [
      "../assets/product-imgs/Interactive-Learning-Robot.jpeg",
      "../assets/product-imgs/Interactive-Learning-Robot2.jpeg",
      "../assets/product-imgs/Interactive-Learning-Robot3.webp",
      "",
    ],
    category: "educational",
    brand: "LittleExplorers",
    ageGroup: "6-8",
    rating: 4.8,
    reviewCount: 124,
    stockCount: 32,
    onSale: false,
    isNew: true,
    features: [
      "Teaches basic coding concepts",
      "Multiple learning games",
      "Voice recognition",
      "Screen-free play option",
      "Rechargeable battery",
    ],
  },
  {
    id: 2,
    name: "Cuddly Teddy Bear",
    description:
      "Super soft and huggable teddy bear with embroidered features, perfect for bedtime cuddles and imaginative play.",
    price: 24.99,
    images: [
      "../assets/product-imgs/Cuddly-Teddy-Bear1.webp",
      "../assets/product-imgs/Cuddly-Teddy-Bear2.jpeg",
      "../assets/product-imgs/Cuddly-Teddy-Bear3.jpeg",
    ],
    category: "plush",
    brand: "ToyWonder",
    ageGroup: "0-2",
    rating: 4.9,
    reviewCount: 287,
    stockCount: 87,
    onSale: false,
    isNew: false,
    colors: ["Brown", "White", "Honey"],
    sizes: ['Small (8")', 'Medium (12")', 'Large (16")'],
    features: [
      "Super soft plush material",
      "Hypoallergenic filling",
      "Machine washable",
      "Embroidered safety eyes",
      "Suitable from birth",
    ],
  },
  {
    id: 3,
    name: "Outdoor Adventure Playset",
    description:
      "Complete backyard playset with swings, slide, climbing wall, and playhouse - everything kids need for outdoor fun.",
    price: 399.99,
    salePrice: 349.99,
    images: [
      "../assets/product-imgs/Outdoor-Adventure-Playset1.jpeg",
      "../assets/product-imgs/Outdoor-Adventure-Playset2.jpeg",
      "../assets/product-imgs/Outdoor-Adventure-Playset3.jpeg",
    ],
    category: "outdoor",
    brand: "KidKraft",
    ageGroup: "3-12",
    rating: 4.7,
    reviewCount: 96,
    stockCount: 12,
    onSale: true,
    isNew: false,
    features: [
      "Weather-resistant construction",
      "2 swings and 1 glider",
      "10ft wavy slide",
      "Climbing wall with colorful rocks",
      "Covered playhouse area",
      "Meets ASTM safety standards",
    ],
  },
  {
    id: 4,
    name: "Ultimate Art Studio Set",
    description:
      "Comprehensive art set with everything young artists need - paints, colored pencils, markers, sketchpad, and more in a portable case.",
    price: 45.99,
    images: [
      "../assets/product-imgs/Ultimate-Art-Studio-Set1.jpeg",
      "../assets/product-imgs/Ultimate-Art-Studio-Set2.webp",
      "../assets/product-imgs/Ultimate-Art-Studio-Set3.jpeg",
    ],
    category: "creative",
    brand: "CreativeMinds",
    ageGroup: "6+",
    rating: 4.5,
    reviewCount: 153,
    stockCount: 42,
    onSale: false,
    isNew: true,
    features: [
      "168 piece art set",
      "24 watercolor paints",
      "36 colored pencils",
      "48 crayons",
      "24 oil pastels",
      "12 markers",
      "2 sketchpads",
      "Portable carrying case",
    ],
  },
  {
    id: 5,
    name: "Wooden Building Blocks Set",
    description:
      "Classic wooden building blocks in various shapes, colors, and sizes to help develop spatial awareness and creativity.",
    price: 34.99,
    salePrice: 28.99,
    images: [
      "../assets/product-imgs/Wooden-Building-Blocks-Set1.webp",
      "../assets/product-imgs/Wooden-Building-Blocks-Set2.webp",
      "../assets/product-imgs/Wooden-Building-Blocks-Set3.webp",
    ],
    category: "educational",
    brand: "ToyWonder",
    ageGroup: "2-5",
    rating: 4.6,
    reviewCount: 201,
    stockCount: 56,
    onSale: true,
    isNew: false,
    features: [
      "100 wooden blocks",
      "10 different shapes",
      "Non-toxic paint",
      "Smooth, sanded edges",
      "Storage bucket included",
      "Made from sustainable wood",
    ],
  },
  {
    id: 6,
    name: "Plush Unicorn with Sound",
    description:
      "Magical unicorn plush toy with rainbow mane and tail that plays enchanting music when its hoof is pressed.",
    price: 29.99,
    images: [
      "../assets/product-imgs/Plush-Unicorn1.webp",
      "../assets/product-imgs/Plush-Unicorn2.webp",
      "../assets/product-imgs/Plush-Unicorn3.webp",
    ],
    category: "plush",
    brand: "FunPlay",
    ageGroup: "3-8",
    rating: 4.7,
    reviewCount: 167,
    stockCount: 38,
    onSale: false,
    isNew: true,
    colors: ["White", "Pink", "Purple"],
    features: [
      "Super soft plush material",
      "Rainbow mane and tail",
      "Plays enchanting melody",
      "Glittery horn and hooves",
      "Requires 2 AAA batteries (included)",
    ],
  },
  {
    id: 7,
    name: "Junior Basketball Hoop",
    description:
      "Adjustable indoor/outdoor basketball hoop that grows with your child, helping develop coordination and active play habits.",
    price: 39.99,
    images: [
      "../assets/product-imgs/Junior-Basketball-Hoop1.webp",
      "../assets/product-imgs/Junior-Basketball-Hoop2.webp",
      "../assets/product-imgs/Junior-Basketball-Hoop3.webp",
    ],
    category: "outdoor",
    brand: "FunPlay",
    ageGroup: "3-10",
    rating: 4.4,
    reviewCount: 89,
    stockCount: 24,
    onSale: false,
    isNew: false,
    features: [
      "Adjustable height from 2.5 to 6 feet",
      "Weather-resistant materials",
      "Stable base (can be filled with water or sand)",
      "Includes junior size basketball",
      "Easy assembly",
    ],
  },
  {
    id: 8,
    name: "Science Experiment Kit",
    description:
      "Fun and educational science kit with 40+ experiments to explore chemistry, physics, and biology concepts.",
    price: 49.99,
    images: [
      "../assets/product-imgs/Science-Experiment-Kit1.jpeg",
      "../assets/product-imgs/Science-Experiment-Kit2.jpeg",
      "../assets/product-imgs/Science-Experiment-Kit3.webp",
    ],
    category: "educational",
    brand: "LittleExplorers",
    ageGroup: "8-12",
    rating: 4.8,
    reviewCount: 112,
    stockCount: 35,
    onSale: false,
    isNew: false,
    features: [
      "40+ science experiments",
      "Full-color instruction manual",
      "Real lab equipment",
      "Safe and non-toxic materials",
      "Storage container for all components",
    ],
  },
  {
    id: 9,
    name: "Musical Keyboard for Kids",
    description:
      "Colorful electronic keyboard with 37 keys, various instrument sounds, demo songs, and recording function.",
    price: 42.99,
    salePrice: 36.99,
    images: [
      "../assets/product-imgs/Musical-Keyboard-for-Kids1.webp",
      "../assets/product-imgs/Musical-Keyboard-for-Kids2.webp",
      "../assets/product-imgs/Musical-Keyboard-for-Kids3.webp",
    ],
    category: "creative",
    brand: "FunPlay",
    ageGroup: "3-10",
    rating: 4.3,
    reviewCount: 78,
    stockCount: 20,
    onSale: true,
    isNew: false,
    colors: ["Rainbow", "Blue", "Pink"],
    features: [
      "37 keys with color coding",
      "8 different instrument sounds",
      "10 demo songs",
      "Recording and playback function",
      "Volume control",
      "Headphone jack",
      "Can be powered by batteries or AC adapter (included)",
    ],
  },
  {
    id: 10,
    name: "Dinosaur Figure Set",
    description:
      "Set of 12 realistic dinosaur figures with educational fact cards about each prehistoric creature.",
    price: 24.99,
    images: [
      "../assets/product-imgs/Dinosaur-Figure-Set1.webp",
      "../assets/product-imgs/Dinosaur-Figure-Set2.jpeg",
      "../assets/product-imgs/Dinosaur-Figure-Set3.webp",
    ],
    category: "educational",
    brand: "LittleExplorers",
    ageGroup: "3-12",
    rating: 4.7,
    reviewCount: 156,
    stockCount: 47,
    onSale: false,
    isNew: true,
    features: [
      "12 realistic dinosaur figures",
      "Educational fact cards",
      "Durable non-toxic plastic",
      "Detailed hand-painted designs",
      "Storage container included",
    ],
  },
  {
    id: 11,
    name: "Remote Control Race Car",
    description:
      "High-speed remote control race car with realistic engine sounds, working headlights, and durable construction.",
    price: 49.99,
    salePrice: 39.99,
    images: [
      "../assets/product-imgs/Remote-Control-Race-Car1.webp",
      "../assets/product-imgs/Remote-Control-Race-Car2.webp",
      "../assets/product-imgs/Remote-Control-Race-Car3.jpeg",
    ],
    category: "outdoor",
    brand: "FunPlay",
    ageGroup: "6+",
    rating: 4.5,
    reviewCount: 92,
    stockCount: 18,
    onSale: true,
    isNew: false,
    colors: ["Red", "Blue", "Black"],
    features: [
      "2.4GHz remote control technology",
      "Up to 30 minutes play time",
      "Rechargeable battery",
      "Working LED headlights",
      "Realistic engine sounds",
      "All-terrain tires",
      "Impact-resistant body",
    ],
  },
  {
    id: 12,
    name: "Plush Baby Elephant",
    description:
      "Adorable elephant plush toy with super soft fabric, crinkle ears, and gentle rattle sound - perfect for babies and toddlers.",
    price: 19.99,
    images: [
      "../assets/product-imgs/Plush-Baby-Elephant1.jpeg",
      "../assets/product-imgs/Plush-Baby-Elephant2.jpeg",
      "../assets/product-imgs/Plush-Baby-Elephant3.jpeg",
    ],
    category: "plush",
    brand: "ToyWonder",
    ageGroup: "0-3",
    rating: 4.9,
    reviewCount: 215,
    stockCount: 63,
    onSale: false,
    isNew: false,
    colors: ["Gray", "Pink", "Blue"],
    features: [
      "Ultra-soft plush material",
      "Crinkle ears for sensory development",
      "Gentle rattle inside",
      "Machine washable",
      "Safe for newborns",
      "Hypoallergenic filling",
    ],
  },
];

// Mock data for product reviews
const REVIEWS_DATA = {
  1: [
    {
      id: 1,
      productId: 1,
      name: "Jennifer Smith",
      email: "jennifer.smith@example.com",
      rating: 5,
      title: "Amazing educational toy!",
      content:
        "My 7-year-old absolutely loves this learning robot. He spends hours coding and solving puzzles with it. The voice recognition feature works surprisingly well, and the screen-free play option is perfect for limiting screen time while still engaging with technology.",
      date: "2023-03-15",
      verified: true,
    },
    {
      id: 2,
      productId: 1,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      rating: 4,
      title: "Great educational value",
      content:
        "This robot has been a hit with my daughter. She's learning basic coding concepts without even realizing it. The only reason I'm giving it 4 stars instead of 5 is that battery life could be better - we get about 3 hours of play before needing to recharge.",
      date: "2023-02-28",
      verified: true,
    },
    {
      id: 3,
      productId: 1,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      rating: 5,
      title: "Worth every penny",
      content:
        "As an elementary school teacher, I appreciate toys that actually deliver on educational promises. This robot does exactly that! It's intuitive enough for kids to use independently but complex enough to grow with them. The multiple learning games keep it fresh and interesting.",
      date: "2023-01-10",
      verified: true,
    },
  ],
  2: [
    {
      id: 4,
      productId: 2,
      name: "Emily Davis",
      email: "emily.d@example.com",
      rating: 5,
      title: "The perfect bedtime companion",
      content:
        "This teddy bear is incredibly soft and well-made. My 2-year-old refuses to sleep without it now! I love that it's machine washable - we've already had to clean it twice and it comes out looking brand new. Very durable stitching too.",
      date: "2023-04-05",
      verified: true,
    },
    {
      id: 5,
      productId: 2,
      name: "Robert Miller",
      email: "robert.m@example.com",
      rating: 5,
      title: "High-quality plush toy",
      content:
        "I've bought a lot of stuffed animals over the years, and this is one of the best. The material is super soft but durable, and the embroidered features mean no plastic parts that could potentially come loose. We got the medium size and it's perfect.",
      date: "2023-03-22",
      verified: true,
    },
  ],
};

// Initialize product detail page
document.addEventListener("DOMContentLoaded", function () {
  // Check if we have a valid product ID
  if (!productId) {
    showErrorMessage("Product not found. Please try another product.");
    return;
  }

  // Get product data
  const product = PRODUCTS_DATA.find((p) => p.id === productId);

  if (!product) {
    showErrorMessage("Product not found. Please try another product.");
    return;
  }

  // Save current product
  currentProduct = product;

  // Add to recently viewed
  addToRecentlyViewed(product);

  // Display product details
  displayProductDetails(product);

  // Display product description, features, etc.
  displayProductTabs(product);

  // Display product reviews
  displayProductReviews(product);

  // Load related products
  loadRelatedProducts(product);

  // Load recently viewed products
  loadRecentlyViewedProducts();

  // Setup tab navigation
  setupTabNavigation();

  // Setup review form
  setupReviewForm();
});

/**
 * Display error message when product not found
 */
function showErrorMessage(message) {
  if (productDetailContainer) {
    productDetailContainer.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        <h2>Oops!</h2>
        <p>${message}</p>
        <a href="../pages/products.html" class="btn btn-primary">Browse Products</a>
      </div>
    `;
  }
}

/**
 * Display product details
 */
function displayProductDetails(product) {
  // Update page title
  document.title = `${product.name} - HertzGiggles`;

  // Update breadcrumb
  if (categoryBreadcrumb && categoryLink && productNameBreadcrumb) {
    // Format category name
    const formattedCategory =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);

    categoryLink.textContent = formattedCategory;
    categoryLink.href = `../pages/products.html?category=${product.category}`;
    productNameBreadcrumb.textContent = product.name;
  }

  // Display product details
  if (productDetailContainer) {
    const isOnSale = product.onSale;
    const displayPrice = isOnSale ? product.salePrice : product.price;
    const discount = isOnSale
      ? Math.round((1 - product.salePrice / product.price) * 100)
      : 0;
    const isInWish = isInWishlist(product.id);

    productDetailContainer.innerHTML = `
      <div class="product-images">
        <div class="product-image-main">
          <img src="${product.images[0]}" alt="${
      product.name
    }" id="main-product-image">
          
          ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
          ${
            isOnSale
              ? `<span class="badge badge-sale">Sale ${discount}% Off</span>`
              : ""
          }
        </div>
        
        <div class="product-image-thumbnails">
          ${product.images
            .map(
              (image, index) => `
            <div class="thumbnail ${
              index === 0 ? "active" : ""
            }" data-image="${image}">
              <img src="${image}" class="thumbnail-img" alt="${product.name} - Image ${index + 1}">
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="product-info">
        <h1 class="product-title">${product.name}</h1>
        
        <div class="product-meta">
          <div class="product-rating">
            <div class="rating-stars">
              ${createStarRating(product.rating)}
            </div>
            <span class="rating-count">${product.reviewCount} Reviews</span>
          </div>
          
          <div class="product-brand">
            <span>Brand:</span> <a href="products.html?brand=${
              product.brand
            }">${product.brand}</a>
          </div>
          
          <div class="product-sku">
            <span>SKU:</span> TOY-${product.id.toString().padStart(4, "0")}
          </div>
        </div>
        
        <div class="product-price">
          <span class="current-price">${formatPrice(displayPrice)}</span>
          ${
            isOnSale
              ? `
            <span class="old-price">${formatPrice(product.price)}</span>
            <span class="price-save">You save: ${formatPrice(
              product.price - product.salePrice
            )}</span>
          `
              : ""
          }
        </div>
        
        <div class="product-short-description">
          ${product.description}
        </div>
        
        ${
          product.colors
            ? `
          <div class="product-options">
            <div class="option-label">Color: <span id="selected-color">${
              product.colors[0]
            }</span></div>
            <div class="color-options">
              ${product.colors
                .map(
                  (color, index) => `
                <button class="color-option ${
                  index === 0 ? "active" : ""
                }" data-color="${color}" 
                  style="background-color: ${getColorCode(color)};">
                  ${index === 0 ? '<i class="fas fa-check"></i>' : ""}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        
        ${
          product.sizes
            ? `
          <div class="product-options">
            <div class="option-label">Size: <span id="selected-size">${
              product.sizes[0]
            }</span></div>
            <div class="size-options">
              ${product.sizes
                .map(
                  (size, index) => `
                <button class="size-option ${
                  index === 0 ? "active" : ""
                }" data-size="${size}">
                  ${size}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        
        <div class="product-quantity">
          <div class="option-label">Quantity:</div>
          <div class="quantity-selector">
            <button id="decrease-quantity" class="quantity-btn" ${
              currentQuantity <= 1 ? "disabled" : ""
            }>
              <i class="fas fa-minus"></i>
            </button>
            <input type="number" id="quantity-input" value="${currentQuantity}" min="1" max="${
      product.stockCount
    }">
            <button id="increase-quantity" class="quantity-btn" ${
              currentQuantity >= product.stockCount ? "disabled" : ""
            }>
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="stock-status">
            ${
              product.stockCount > 10
                ? '<span class="in-stock">In Stock</span>'
                : product.stockCount > 0
                ? `<span class="low-stock">Only ${product.stockCount} left!</span>`
                : '<span class="out-of-stock">Out of Stock</span>'
            }
          </div>
        </div>
        
        <div class="product-actions">
          <button id="add-to-cart" class="btn btn-primary btn-add-to-cart" ${
            product.stockCount === 0 ? "disabled" : ""
          }>
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          
          <button id="add-to-wishlist" class="btn btn-outline btn-wishlist ${
            isInWish ? "active" : ""
          }">
            <i class="fas fa-heart"></i> ${
              isInWish ? "Remove from Wishlist" : "Add to Wishlist"
            }
          </button>
        </div>
        
        <div class="product-info-extra">
          <div class="shipping-info">
            <i class="fas fa-truck"></i>
            <span>Free shipping for orders over $50</span>
          </div>
          
          <div class="return-info">
            <i class="fas fa-undo"></i>
            <span>30-day easy returns</span>
          </div>
          
          <div class="age-info">
            <i class="fas fa-child"></i>
            <span>Recommended age: ${product.ageGroup}</span>
          </div>
        </div>
        
        <div class="social-share">
          <span class="share-label">Share:</span>
          <div class="share-buttons">
            <a href="#" class="share-button" title="Share on Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="share-button" title="Share on Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="share-button" title="Share on Pinterest">
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a href="#" class="share-button" title="Share via Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    // Initialize product options
    if (product.colors) {
      selectedOptions.color = product.colors[0];
    }

    if (product.sizes) {
      selectedOptions.size = product.sizes[0];
    }

    // Add event listeners
    setupProductEventListeners(product);
  }
}

/**
 * Set up product event listeners
 */
function setupProductEventListeners(product) {
  // Image thumbnails
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main-product-image");

  if (thumbnails && mainImage) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Update active thumbnail
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Update main image
        const imageUrl = this.getAttribute("data-image");
        mainImage.src = imageUrl;

        // Add smooth transition
        mainImage.style.opacity = "0";
        setTimeout(() => {
          mainImage.style.opacity = "1";
        }, 50);
      });
    });
  }

  // Color options
  const colorOptions = document.querySelectorAll(".color-option");
  const selectedColorText = document.getElementById("selected-color");

  if (colorOptions && selectedColorText) {
    colorOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Update active color
        colorOptions.forEach((o) => {
          o.classList.remove("active");
          o.innerHTML = "";
        });
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-check"></i>';

        // Update selected color text
        const color = this.getAttribute("data-color");
        selectedColorText.textContent = color;

        // Update selected options
        selectedOptions.color = color;
      });
    });
  }

  // Size options
  const sizeOptions = document.querySelectorAll(".size-option");
  const selectedSizeText = document.getElementById("selected-size");

  if (sizeOptions && selectedSizeText) {
    sizeOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Update active size
        sizeOptions.forEach((o) => o.classList.remove("active"));
        this.classList.add("active");

        // Update selected size text
        const size = this.getAttribute("data-size");
        selectedSizeText.textContent = size;

        // Update selected options
        selectedOptions.size = size;
      });
    });
  }

  // Quantity selector
  const decreaseBtn = document.getElementById("decrease-quantity");
  const increaseBtn = document.getElementById("increase-quantity");
  const quantityInput = document.getElementById("quantity-input");

  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener("click", function () {
      if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;

        // Enable/disable buttons
        decreaseBtn.disabled = currentQuantity <= 1;
        increaseBtn.disabled = false;
      }
    });

    increaseBtn.addEventListener("click", function () {
      if (currentQuantity < product.stockCount) {
        currentQuantity++;
        quantityInput.value = currentQuantity;

        // Enable/disable buttons
        decreaseBtn.disabled = false;
        increaseBtn.disabled = currentQuantity >= product.stockCount;
      }
    });

    quantityInput.addEventListener("change", function () {
      let value = parseInt(this.value);

      // Validate quantity
      if (isNaN(value) || value < 1) {
        value = 1;
      } else if (value > product.stockCount) {
        value = product.stockCount;
      }

      currentQuantity = value;
      this.value = currentQuantity;

      // Enable/disable buttons
      decreaseBtn.disabled = currentQuantity <= 1;
      increaseBtn.disabled = currentQuantity >= product.stockCount;
    });
  }

  // Add to cart button
  const addToCartBtn = document.getElementById("add-to-cart");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      addToCart(product, currentQuantity, selectedOptions);
    });
  }

  // Add to wishlist button
  const addToWishlistBtn = document.getElementById("add-to-wishlist");

  if (addToWishlistBtn) {
    addToWishlistBtn.addEventListener("click", function () {
      const result = toggleWishlist(product);

      // Update button text and style
      if (result) {
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
      } else {
        this.classList.remove("active");
        this.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
      }
    });
  }
}

/**
 * Display product tabs (description, features, specs, reviews)
 */
function displayProductTabs(product) {
  // Display description tab
  if (descriptionPanel) {
    descriptionPanel.innerHTML = `
      <div class="tab-content">
        <p>${product.description}</p>
      </div>
    `;
  }

  // Display features tab
  if (featuresPanel) {
    featuresPanel.innerHTML = `
      <div class="tab-content">
        <ul class="features-list">
          ${product.features
            .map(
              (feature) => `
            <li><i class="fas fa-check-circle"></i> ${feature}</li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;
  }

  // Display specifications tab
  if (specificationsPanel) {
    specificationsPanel.innerHTML = `
      <div class="tab-content">
        <table class="specs-table">
          <tr>
            <th>Brand</th>
            <td>${product.brand}</td>
          </tr>
          <tr>
            <th>Age Group</th>
            <td>${product.ageGroup}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>${
              product.category.charAt(0).toUpperCase() +
              product.category.slice(1)
            }</td>
          </tr>
          <tr>
            <th>Item Weight</th>
            <td>1.5 lbs</td>
          </tr>
          <tr>
            <th>Dimensions</th>
            <td>10 x 5 x 7 inches</td>
          </tr>
          <tr>
            <th>Materials</th>
            <td>High-quality plastic, non-toxic</td>
          </tr>
          <tr>
            <th>Battery Required</th>
            <td>${product.id % 2 === 0 ? "No" : "Yes (included)"}</td>
          </tr>
          <tr>
            <th>Package Contents</th>
            <td>${product.name}, user manual, warranty card</td>
          </tr>
          <tr>
            <th>Warranty</th>
            <td>1 year manufacturer warranty</td>
          </tr>
        </table>
      </div>
    `;
  }
}

/**
 * Setup tab navigation
 */
function setupTabNavigation() {
  if (tabButtons) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all tabs
        tabButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked tab
        this.classList.add("active");

        // Get tab name
        const tabName = this.getAttribute("data-tab");

        // Hide all tab panels
        const tabPanels = document.querySelectorAll(".tab-panel");
        tabPanels.forEach((panel) => panel.classList.remove("active"));

        // Show selected tab panel
        const activePanel = document.getElementById(`${tabName}-panel`);
        if (activePanel) {
          activePanel.classList.add("active");
        }
      });
    });
  }
}

/**
 * Display product reviews
 */
function displayProductReviews(product) {
  if (reviewsPanel && reviewCount) {
    reviewCount.textContent = `(${product.reviewCount})`;

    // Get reviews for this product
    const productReviews = REVIEWS_DATA[product.id] || [];

    // Show reviews container if we have reviews
    if (reviewsContainer) {
      reviewsContainer.style.display = "block";
    }

    // Update average rating
    if (averageRating && averageRatingStars && totalReviews) {
      averageRating.textContent = product.rating.toFixed(1);
      averageRatingStars.innerHTML = createStarRating(product.rating);
      totalReviews.textContent = `Based on ${product.reviewCount} reviews`;
    }

    // Update review rating bars
    const ratingBars = document.querySelectorAll(".rating-bar .progress");
    if (ratingBars && ratingBars.length === 5) {
      // Calculate ratings distribution (simplified)
      const distribution = [10, 15, 25, 35, product.reviewCount - 85]; // 1, 2, 3, 4, 5 stars

      // Update progress bars and counts
      ratingBars.forEach((bar, index) => {
        const percent = (distribution[4 - index] / product.reviewCount) * 100;
        bar.style.width = `${percent}%`;

        // Update count
        const countElement = bar.parentElement.nextElementSibling;
        if (countElement) {
          countElement.textContent = distribution[4 - index];
        }
      });
    }

    // Display reviews
    if (reviewsList) {
      if (productReviews.length === 0) {
        reviewsList.innerHTML = `
          <div class="no-reviews">
            <p></p>
          </div>
        `;
      } else {
        reviewsList.innerHTML = productReviews
          .map(
            (review) => `
          <div class="review">
            <div class="review-header">
              <div class="review-meta">
                <h4 class="review-title">${review.title}</h4>
                <div class="review-rating">
                  <div class="rating-stars">
                    ${createStarRating(review.rating)}
                  </div>
                </div>
              </div>
              <div class="review-author">
                <span class="review-name">${review.name}</span>
                <span class="review-date">${formatDate(review.date)}</span>
                ${
                  review.verified
                    ? '<span class="verified-badge">Verified Purchase</span>'
                    : ""
                }
              </div>
            </div>
            <div class="review-content">
              <p>${review.content}</p>
            </div>
          </div>
        `
          )
          .join("");
      }
    }
  }
}

/**
 * Setup review form
 */
function setupReviewForm() {
  if (writeReviewBtn && reviewFormContainer && cancelReviewBtn && reviewForm) {
    // Show review form
    writeReviewBtn.addEventListener("click", function () {
      reviewFormContainer.style.display = "block";
      writeReviewBtn.style.display = "none";

      // Scroll to review form
      reviewFormContainer.scrollIntoView({ behavior: "smooth" });
    });

    // Hide review form
    cancelReviewBtn.addEventListener("click", function () {
      reviewFormContainer.style.display = "none";
      writeReviewBtn.style.display = "block";
    });

    // Star rating selection
    if (ratingSelect && ratingValue) {
      ratingSelect.forEach((star) => {
        // Hover effect
        star.addEventListener("mouseover", function () {
          const rating = parseInt(this.getAttribute("data-rating"));

          ratingSelect.forEach((s, index) => {
            if (index < rating) {
              s.classList.remove("far");
              s.classList.add("fas");
            } else {
              s.classList.remove("fas");
              s.classList.add("far");
            }
          });
        });

        // Click to select
        star.addEventListener("click", function () {
          const rating = parseInt(this.getAttribute("data-rating"));
          ratingValue.value = rating;

          ratingSelect.forEach((s, index) => {
            if (index < rating) {
              s.classList.remove("far");
              s.classList.add("fas");
            } else {
              s.classList.remove("fas");
              s.classList.add("far");
            }
          });
        });
      });

      // Mouse leave
      const ratingSelectContainer = document.querySelector(".rating-select");
      if (ratingSelectContainer) {
        ratingSelectContainer.addEventListener("mouseleave", function () {
          const rating = parseInt(ratingValue.value);

          ratingSelect.forEach((s, index) => {
            if (index < rating) {
              s.classList.remove("far");
              s.classList.add("fas");
            } else {
              s.classList.remove("fas");
              s.classList.add("far");
            }
          });
        });
      }
    }

    // Submit review form
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const rating = parseInt(ratingValue.value);
      const title = document.getElementById("review-title").value;
      const name = document.getElementById("review-name").value;
      const email = document.getElementById("review-email").value;
      const content = document.getElementById("review-content").value;

      // Validate form
      if (rating === 0) {
        showToast("Please select a rating", "error");
        return;
      }

      if (!title || !name || !email || !content) {
        showToast("Please fill in all required fields", "error");
        return;
      }

      // In a real app, we would submit this to a server
      // Here we'll just show a success message
      showToast(
        "Thank you for your review! It will be published after moderation.",
        "success"
      );

      // Reset form
      reviewForm.reset();
      ratingValue.value = 0;
      ratingSelect.forEach((star) => {
        star.classList.remove("fas");
        star.classList.add("far");
      });

      // Hide form
      reviewFormContainer.style.display = "none";
      writeReviewBtn.style.display = "block";
    });
  }
}

/**
 * Load related products
 */
function loadRelatedProducts(product) {
  if (!relatedProductsContainer) return;

  // Get products in the same category
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  if (relatedProducts.length === 0) {
    const sectionContainer = relatedProductsContainer.closest(
      ".related-products-section"
    );
    if (sectionContainer) {
      sectionContainer.style.display = "none";
    }
    return;
  }

  // Generate HTML for related products
  const html = relatedProducts
    .map((product) => {
      const isOnSale = product.onSale;
      const displayPrice = isOnSale ? product.salePrice : product.price;
      const isInWish = isInWishlist(product.id);

      return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="../pages/product-detail.html?id=${product.id}">
            <img src="${product.images[0]}" alt="${product.name}">
          </a>
          
          <div class="product-card-badges">
            ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
            ${isOnSale ? '<span class="badge badge-sale">Sale</span>' : ""}
          </div>
          
          <div class="product-card-actions">
            <button class="product-action wishlist-toggle ${
              isInWish ? "active" : ""
            }" data-product-id="${product.id}" title="Add to Wishlist">
              <i class="fas fa-heart"></i>
            </button>
            <button class="product-action quick-view" data-product-id="${
              product.id
            }" title="Quick View">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        
        <div class="product-card-content">
          <div class="product-card-category">${product.category}</div>
          
          <h3 class="product-card-title">
            <a href="../pages/product-detail.html?id=${product.id}">${
        product.name
      }</a>
          </h3>
          
          <div class="product-card-rating">
            <div class="rating-stars">
              ${createStarRating(product.rating)}
            </div>
            <div class="rating-count">(${product.reviewCount})</div>
          </div>
          
          <div class="product-card-price">
            <span class="current-price">${formatPrice(displayPrice)}</span>
            ${
              isOnSale
                ? `<span class="old-price">${formatPrice(product.price)}</span>`
                : ""
            }
          </div>
          
          <div class="product-card-footer">
            <button class="add-to-cart" data-product-id="${product.id}">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  relatedProductsContainer.innerHTML = html;

  // Add event listeners to product cards
  const addToCartButtons =
    relatedProductsContainer.querySelectorAll(".add-to-cart");
  if (addToCartButtons) {
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          addToCart(product);
        }
      });
    });
  }

  const wishlistButtons =
    relatedProductsContainer.querySelectorAll(".wishlist-toggle");
  if (wishlistButtons) {
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          const result = toggleWishlist(product);

          if (result) {
            this.classList.add("active");
          } else {
            this.classList.remove("active");
          }
        }
      });
    });
  }

  const quickViewButtons =
    relatedProductsContainer.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Load recently viewed products
 */
function loadRecentlyViewedProducts() {
  if (!recentlyViewedContainer) return;

  const recentlyViewedProducts = getRecentlyViewed().filter(
    (p) => p.id !== productId
  );

  if (recentlyViewedProducts.length === 0) {
    const sectionContainer = recentlyViewedContainer.closest(
      ".recently-viewed-section"
    );
    if (sectionContainer) {
      sectionContainer.style.display = "none";
    }
    return;
  }

  // Generate HTML for recently viewed products
  const html = recentlyViewedProducts
    .slice(0, 4)
    .map((product) => {
      const isOnSale = product.onSale;
      const displayPrice = isOnSale ? product.salePrice : product.price;
      const isInWish = isInWishlist(product.id);

      return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="../pages/product-detail.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          
          <div class="product-card-badges">
            ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
            ${isOnSale ? '<span class="badge badge-sale">Sale</span>' : ""}
          </div>
          
          <div class="product-card-actions">
            <button class="product-action wishlist-toggle ${
              isInWish ? "active" : ""
            }" data-product-id="${product.id}" title="Add to Wishlist">
              <i class="fas fa-heart"></i>
            </button>
            <button class="product-action quick-view" data-product-id="${
              product.id
            }" title="Quick View">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        
        <div class="product-card-content">
          <div class="product-card-category">${product.category}</div>
          
          <h3 class="product-card-title">
            <a href="../pages/product-detail.html?id=${product.id}">${
        product.name
      }</a>
          </h3>
          
          <div class="product-card-price">
            <span class="current-price">${formatPrice(displayPrice)}</span>
            ${
              isOnSale
                ? `<span class="old-price">${formatPrice(product.price)}</span>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  recentlyViewedContainer.innerHTML = html;

  // Add event listeners to product cards
  const wishlistButtons =
    recentlyViewedContainer.querySelectorAll(".wishlist-toggle");
  if (wishlistButtons) {
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          const result = toggleWishlist(product);

          if (result) {
            this.classList.add("active");
          } else {
            this.classList.remove("active");
          }
        }
      });
    });
  }

  const quickViewButtons =
    recentlyViewedContainer.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Helper functions
 */

// Create star rating HTML
function createStarRating(rating) {
  let starsHtml = "";

  // Full stars
  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
  }

  // Half star
  if (rating % 1 >= 0.5) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>';
  }

  // Empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>';
  }

  return starsHtml;
}

// Format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Get color code from color name
function getColorCode(colorName) {
  const colorMap = {
    Red: "#dc3545",
    Blue: "#0d6efd",
    Green: "#198754",
    Yellow: "#ffc107",
    Purple: "#6f42c1",
    Pink: "#d63384",
    Orange: "#fd7e14",
    Brown: "#794f45",
    Black: "#000000",
    White: "#ffffff",
    Gray: "#6c757d",
    Honey: "#e8a04b",
    Rainbow:
      "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
  };

  return colorMap[colorName] || "#cccccc";
}
