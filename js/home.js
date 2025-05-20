/**
 * HertzGiggles E-commerce - Home Page JavaScript
 *
 * This script handles the home page functionality.
 */

// DOM Elements
const featuredProductsContainer = document.getElementById("featured-products");
const newArrivalsContainer = document.getElementById("new-arrivals");
const newsletterForm = document.getElementById("newsletter-form");

// Using the mock data from products.js
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Interactive Learning Robot",
    description:
      "A fun educational robot that teaches children coding, math, and language through interactive games and challenges.",
    price: 59.99,
    images: [
      "assets/product-imgs/Interactive-Learning-Robot.jpeg",
      "assets/product-imgs/Interactive-Learning-Robot2.jpeg",
      "assets/product-imgs/Interactive-Learning-Robot3.webp",
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
      "assets/product-imgs/Cuddly-Teddy-Bear1.webp",
      "assets/product-imgs/Cuddly-Teddy-Bear2.jpeg",
      "assets/product-imgs/Cuddly-Teddy-Bear3.jpeg",
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
      "assets/product-imgs/Outdoor-Adventure-Playset1.jpeg",
      "assets/product-imgs/Outdoor-Adventure-Playset2.jpeg",
      "assets/product-imgs/Outdoor-Adventure-Playset3.jpeg",
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
      "assets/product-imgs/Ultimate-Art-Studio-Set1.jpeg",
      "assets/product-imgs/Ultimate-Art-Studio-Set2.webp",
      "assets/product-imgs/Ultimate-Art-Studio-Set3.jpeg",
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
      "assets/product-imgs/Wooden-Building-Blocks-Set1.webp",
      "assets/product-imgs/Wooden-Building-Blocks-Set2.webp",
      "assets/product-imgs/Wooden-Building-Blocks-Set3.webp",
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
      "assets/product-imgs/Plush-Unicorn1.webp",
      "assets/product-imgs/Plush-Unicorn2.webp",
      "assets/product-imgs/Plush-Unicorn3.webp",
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
      "assets/product-imgs/Junior-Basketball-Hoop1.webp",
      "assets/product-imgs/Junior-Basketball-Hoop2.webp",
      "assets/product-imgs/Junior-Basketball-Hoop3.webp",
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
      "assets/product-imgs/Science-Experiment-Kit1.jpeg",
      "assets/product-imgs/Science-Experiment-Kit2.jpeg",
      "assets/product-imgs/Science-Experiment-Kit3.webp",
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
      "assets/product-imgs/Musical-Keyboard-for-Kids1.webp",
      "assets/product-imgs/Musical-Keyboard-for-Kids2.webp",
      "assets/product-imgs/Musical-Keyboard-for-Kids3.webp",
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
      "assets/product-imgs/Dinosaur-Figure-Set1.webp",
      "assets/product-imgs/Dinosaur-Figure-Set2.jpeg",
      "assets/product-imgs/Dinosaur-Figure-Set3.webp",
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
      "assets/product-imgs/Remote-Control-Race-Car1.webp",
      "assets/product-imgs/Remote-Control-Race-Car2.webp",
      "assets/product-imgs/Remote-Control-Race-Car3.jpeg",
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
      "assets/product-imgs/Plush-Baby-Elephant1.jpeg",
      "assets/product-imgs/Plush-Baby-Elephant2.jpeg",
      "assets/product-imgs/Plush-Baby-Elephant3.jpeg",
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

/**
 * Initialize the home page functionality
 */
document.addEventListener("DOMContentLoaded", function () {
  // Load featured products
  loadFeaturedProducts();

  // Load new arrivals
  loadNewArrivals();

  // Setup newsletter form
  setupNewsletterForm();
});

/**
 * Load featured products
 */
function loadFeaturedProducts() {
  if (!featuredProductsContainer) return;

  // Get top rated products
  const featuredProducts = [...PRODUCTS_DATA]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  displayProducts(featuredProducts, featuredProductsContainer);
}

/**
 * Load new arrivals
 */
function loadNewArrivals() {
  if (!newArrivalsContainer) return;

  // Get new products
  const newProducts = PRODUCTS_DATA.filter((product) => product.isNew).slice(
    0,
    4
  );

  displayProducts(newProducts, newArrivalsContainer);
}

/**
 * Display products in a container
 */
function displayProducts(products, container) {
  // Generate HTML for products
  const html = products
    .map((product) => {
      const isOnSale = product.onSale;
      const displayPrice = isOnSale ? product.salePrice : product.price;
      const isInWish = isInWishlist(product.id);

      return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="pages/product-detail.html?id=${product.id}">
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
            <a href="pages/product-detail.html?id=${product.id}">${
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

  container.innerHTML = html;

  // Add event listeners to product cards
  addProductCardEventListeners(container);
}

/**
 * Add event listeners to product cards
 */
function addProductCardEventListeners(container) {
  // Add to cart buttons
  const addToCartButtons = container.querySelectorAll(".add-to-cart");
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

  // Wishlist toggle buttons
  const wishlistButtons = container.querySelectorAll(".wishlist-toggle");
  if (wishlistButtons) {
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          const result = toggleWishlist(product);

          // Update button appearance
          if (result) {
            this.classList.add("active");
          } else {
            this.classList.remove("active");
          }
        }
      });
    });
  }

  // Quick view buttons
  const quickViewButtons = container.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `pages/product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Setup newsletter form
 */
function setupNewsletterForm() {
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;

      if (!email) {
        showToast("Please enter your email address", "error");
        return;
      }

      // In a real app, we would submit this to a server
      // Here we'll just show a success message
      showToast("Thank you for subscribing to our newsletter!", "success");

      // Reset form
      this.reset();
    });
  }
}

/**
 * Create star rating HTML
 */
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
