/**
 * HertzGiggles E-commerce - Products Page JavaScript
 *
 * This script handles the product listing page functionality.
 */

// Mock data for products
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

// DOM elements
const productsContainer = document.getElementById("products-container");
const productsTitle = document.getElementById("products-title");
const productsCount = document.getElementById("products-count");
const sortBySelect = document.getElementById("sort-by");
const gridViewBtn = document.getElementById("grid-view");
const listViewBtn = document.getElementById("list-view");
const filterCheckboxes = document.querySelectorAll(
  '.filter-options input[type="checkbox"]'
);
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const priceRangeMin = document.getElementById("price-range-min");
const priceRangeMax = document.getElementById("price-range-max");
const clearFiltersBtn = document.getElementById("clear-filters");
const mobileFilterBtn = document.getElementById("mobile-filter-btn");
const filtersSidebar = document.getElementById("filters-sidebar");
const closeFiltersBtn = document.getElementById("close-filters");
const applyFiltersBtn = document.getElementById("apply-filters");
const paginationContainer = document.getElementById("pagination");
const categoryBreadcrumb = document.getElementById("category-breadcrumb");
const categoryName = document.getElementById("category-name");
const recentlyViewedContainer = document.getElementById(
  "recently-viewed-products"
);

// Pagination settings
const productsPerPage = 8;
let currentPage = 1;

// Current filters state
let filters = {
  category: [],
  age: [],
  brand: [],
  special: [],
  minPrice: 0,
  maxPrice: 200,
  search: "",
  sort: "featured",
};

/**
 * Initialize the product listing page
 */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize filters from URL parameters
  initFiltersFromUrl();

  // Set up event listeners
  setupEventListeners();

  // Load products based on filters
  loadProducts();

  // Load recently viewed products
  loadRecentlyViewed();
});

/**
 * Initialize filters from URL parameters
 */
function initFiltersFromUrl() {
  const params = getUrlParams();

  // Set category filter if specified in URL
  if (params.category) {
    filters.category = [params.category];

    // Update checkbox for the category
    const categoryCheckbox = document.querySelector(
      `.filter-option input[value="${params.category}"]`
    );
    if (categoryCheckbox) {
      categoryCheckbox.checked = true;
    }

    // Update breadcrumb and title
    updateCategoryDisplay(params.category);
  }

  // Set search filter if specified in URL
  if (params.search) {
    filters.search = params.search;
    productsTitle.textContent = `Search Results for "${params.search}"`;
  }

  // Set special filters (onSale, isNew)
  if (params.onSale === "true") {
    filters.special.push("onSale");
    const onSaleCheckbox = document.querySelector(
      '.filter-option input[value="onSale"]'
    );
    if (onSaleCheckbox) {
      onSaleCheckbox.checked = true;
    }

    if (!params.category && !params.search) {
      productsTitle.textContent = "Sale Items";
    }
  }

  if (params.isNew === "true") {
    filters.special.push("isNew");
    const isNewCheckbox = document.querySelector(
      '.filter-option input[value="isNew"]'
    );
    if (isNewCheckbox) {
      isNewCheckbox.checked = true;
    }

    if (!params.category && !params.search) {
      productsTitle.textContent = "New Arrivals";
    }
  }

  // Set price range if specified in URL
  if (params.minPrice) {
    filters.minPrice = parseInt(params.minPrice);
    if (minPriceInput) minPriceInput.value = filters.minPrice;
    if (priceRangeMin) priceRangeMin.value = filters.minPrice;
  }

  if (params.maxPrice) {
    filters.maxPrice = parseInt(params.maxPrice);
    if (maxPriceInput) maxPriceInput.value = filters.maxPrice;
    if (priceRangeMax) priceRangeMax.value = filters.maxPrice;
  }

  // Set sort if specified in URL
  if (params.sort) {
    filters.sort = params.sort;
    if (sortBySelect) sortBySelect.value = filters.sort;
  }

  // Set page if specified in URL
  if (params.page) {
    currentPage = parseInt(params.page);
  }
}

/**
 * Update category display in breadcrumb and title
 */
function updateCategoryDisplay(category) {
  // Format category name for display
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // Update breadcrumb
  if (categoryBreadcrumb && categoryName) {
    categoryBreadcrumb.style.display = "list-item";
    categoryName.textContent = formattedCategory;
  }

  // Update page title
  if (productsTitle) {
    productsTitle.textContent = `${formattedCategory} Toys`;
  }
}

/**
 * Set up event listeners for filters, sorting, etc.
 */
function setupEventListeners() {
  // Sort by change
  if (sortBySelect) {
    sortBySelect.addEventListener("change", function () {
      filters.sort = this.value;
      currentPage = 1;
      loadProducts();
      updateUrlParams();
    });
  }

  // View mode (grid/list) toggle
  if (gridViewBtn && listViewBtn && productsContainer) {
    gridViewBtn.addEventListener("click", function () {
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
      productsContainer.classList.remove("view-mode-list");
      productsContainer.classList.add("view-mode-grid");
      localStorage.setItem("products_view_mode", "grid");
    });

    listViewBtn.addEventListener("click", function () {
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
      productsContainer.classList.remove("view-mode-grid");
      productsContainer.classList.add("view-mode-list");
      localStorage.setItem("products_view_mode", "list");
    });

    // Load saved view mode preference
    const savedViewMode = localStorage.getItem("products_view_mode");
    if (savedViewMode === "list") {
      listViewBtn.click();
    }
  }

  // Category, age, brand, and special filters
  if (filterCheckboxes) {
    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const filterType = this.name;
        const filterValue = this.value;

        if (this.checked) {
          // Add filter value if it doesn't exist
          if (!filters[filterType].includes(filterValue)) {
            filters[filterType].push(filterValue);
          }
        } else {
          // Remove filter value
          filters[filterType] = filters[filterType].filter(
            (value) => value !== filterValue
          );
        }

        currentPage = 1;
        loadProducts();
        updateUrlParams();
      });
    });
  }

  // Price range inputs
  if (minPriceInput && maxPriceInput && priceRangeMin && priceRangeMax) {
    // Min price input change
    minPriceInput.addEventListener("change", function () {
      let value = parseInt(this.value);

      // Validate min price
      if (isNaN(value) || value < 0) {
        value = 0;
      } else if (value > filters.maxPrice) {
        value = filters.maxPrice;
      }

      filters.minPrice = value;
      this.value = value;
      priceRangeMin.value = value;
      updatePriceRangeSlider();
      loadProducts();
      updateUrlParams();
    });

    // Max price input change
    maxPriceInput.addEventListener("change", function () {
      let value = parseInt(this.value);

      // Validate max price
      if (isNaN(value) || value < filters.minPrice) {
        value = filters.minPrice;
      } else if (value > 500) {
        value = 500;
      }

      filters.maxPrice = value;
      this.value = value;
      priceRangeMax.value = value;
      updatePriceRangeSlider();
      loadProducts();
      updateUrlParams();
    });

    // Min price range slider change
    priceRangeMin.addEventListener("input", function () {
      let value = parseInt(this.value);

      if (value > filters.maxPrice) {
        value = filters.maxPrice;
        this.value = value;
      }

      filters.minPrice = value;
      minPriceInput.value = value;
      updatePriceRangeSlider();
    });

    priceRangeMin.addEventListener("change", function () {
      loadProducts();
      updateUrlParams();
    });

    // Max price range slider change
    priceRangeMax.addEventListener("input", function () {
      let value = parseInt(this.value);

      if (value < filters.minPrice) {
        value = filters.minPrice;
        this.value = value;
      }

      filters.maxPrice = value;
      maxPriceInput.value = value;
      updatePriceRangeSlider();
    });

    priceRangeMax.addEventListener("change", function () {
      loadProducts();
      updateUrlParams();
    });

    // Initialize price range slider
    updatePriceRangeSlider();
  }

  // Clear filters button
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", function () {
      clearFilters();
    });
  }

  // Mobile filter toggle
  if (mobileFilterBtn && filtersSidebar) {
    mobileFilterBtn.addEventListener("click", function () {
      filtersSidebar.classList.add("active");
      document.body.classList.add("filters-open");
    });
  }

  // Close filters button (mobile)
  if (closeFiltersBtn && filtersSidebar) {
    closeFiltersBtn.addEventListener("click", function () {
      filtersSidebar.classList.remove("active");
      document.body.classList.remove("filters-open");
    });
  }

  // Apply filters button (mobile)
  if (applyFiltersBtn && filtersSidebar) {
    applyFiltersBtn.addEventListener("click", function () {
      filtersSidebar.classList.remove("active");
      document.body.classList.remove("filters-open");
      loadProducts();
      updateUrlParams();
    });
  }
}

/**
 * Update the price range slider appearance
 */
function updatePriceRangeSlider() {
  const minValue = parseInt(priceRangeMin.value);
  const maxValue = parseInt(priceRangeMax.value);
  const track = document.querySelector(".slider-track");

  if (track) {
    const percent1 = (minValue / 500) * 100;
    const percent2 = (maxValue / 500) * 100;
    track.style.background = `linear-gradient(to right, var(--color-gray-300) ${percent1}%, var(--color-primary) ${percent1}%, var(--color-primary) ${percent2}%, var(--color-gray-300) ${percent2}%)`;
  }
}

/**
 * Clear all filters
 */
function clearFilters() {
  // Reset filters object
  filters = {
    category: [],
    age: [],
    brand: [],
    special: [],
    minPrice: 0,
    maxPrice: 200,
    search: "",
    sort: "featured",
  };

  // Reset filter checkboxes
  if (filterCheckboxes) {
    filterCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  // Reset price inputs
  if (minPriceInput && maxPriceInput) {
    minPriceInput.value = filters.minPrice;
    maxPriceInput.value = filters.maxPrice;
  }

  // Reset price range sliders
  if (priceRangeMin && priceRangeMax) {
    priceRangeMin.value = filters.minPrice;
    priceRangeMax.value = filters.maxPrice;
    updatePriceRangeSlider();
  }

  // Reset sort select
  if (sortBySelect) {
    sortBySelect.value = filters.sort;
  }

  // Reset page
  currentPage = 1;

  // Reset title
  if (productsTitle) {
    productsTitle.textContent = "All Products";
  }

  // Hide category breadcrumb
  if (categoryBreadcrumb) {
    categoryBreadcrumb.style.display = "none";
  }

  // Load products with reset filters
  loadProducts();

  // Update URL parameters
  updateUrlParams();
}

/**
 * Update URL parameters based on current filters
 */
function updateUrlParams() {
  const params = new URLSearchParams();

  // Add category filter if present
  if (filters.category.length > 0) {
    params.set("category", filters.category[0]);
  }

  // Add search query if present
  if (filters.search) {
    params.set("search", filters.search);
  }

  // Add special filters
  if (filters.special.includes("onSale")) {
    params.set("onSale", "true");
  }

  if (filters.special.includes("isNew")) {
    params.set("isNew", "true");
  }

  // Add price range if not default
  if (filters.minPrice > 0) {
    params.set("minPrice", filters.minPrice.toString());
  }

  if (filters.maxPrice < 200) {
    params.set("maxPrice", filters.maxPrice.toString());
  }

  // Add sort if not default
  if (filters.sort !== "featured") {
    params.set("sort", filters.sort);
  }

  // Add page if not first page
  if (currentPage > 1) {
    params.set("page", currentPage.toString());
  }

  // Update URL
  const newUrl = `${window.location.pathname}${
    params.toString() ? "?" + params.toString() : ""
  }`;
  window.history.replaceState({}, "", newUrl);
}

/**
 * Load products based on current filters
 */
function loadProducts() {
  if (!productsContainer) return;

  // Show loading spinner
  productsContainer.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
    </div>
  `;

  // Filter products based on current filters
  let filteredProducts = PRODUCTS_DATA.filter((product) => {
    // Category filter
    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    // Age group filter
    if (filters.age.length > 0 && !filters.age.includes(product.ageGroup)) {
      return false;
    }

    // Brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    // Special filters (sale, new)
    if (filters.special.includes("onSale") && !product.onSale) {
      return false;
    }

    if (filters.special.includes("isNew") && !product.isNew) {
      return false;
    }

    // Price range filter
    const productPrice = product.onSale ? product.salePrice : product.price;
    if (productPrice < filters.minPrice || productPrice > filters.maxPrice) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    }

    return true;
  });

  // Sort products
  filteredProducts = sortProducts(filteredProducts, filters.sort);

  // Update products count
  if (productsCount) {
    productsCount.textContent = `Showing ${filteredProducts.length} products`;
  }

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, end);

  // Create HTML for products
  let productsHtml = "";

  if (paginatedProducts.length === 0) {
    productsHtml = `
      <div class="no-products">
        <div class="no-products-icon">
          <i class="fas fa-search"></i>
        </div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search criteria.</p>
        <button id="reset-filters" class="btn btn-primary">Clear Filters</button>
      </div>
    `;
  } else {
    // Generate HTML for each product
    paginatedProducts.forEach((product) => {
      productsHtml += createProductCardHtml(product);
    });
  }

  // Update products container
  productsContainer.innerHTML = productsHtml;

  // Add event listeners to product cards
  addProductCardEventListeners();

  // Update pagination
  if (paginationContainer) {
    updatePagination(filteredProducts.length, totalPages);
  }

  // Add event listener to reset filters button if no products found
  const resetFiltersBtn = document.getElementById("reset-filters");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", clearFilters);
  }
}

/**
 * Create HTML for a product card
 */
function createProductCardHtml(product) {
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
      
      <div class="product-card-list-content">
        <p class="product-card-description">${product.description}</p>
        <div class="product-card-features">
          <ul>
            ${
              product.features
                ? product.features
                    .slice(0, 3)
                    .map(
                      (feature) =>
                        `<li><i class="fas fa-check"></i> ${feature}</li>`
                    )
                    .join("")
                : ""
            }
          </ul>
        </div>
      </div>
    </div>
  `;
}

/**
 * Create HTML for star rating
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

/**
 * Add event listeners to product cards
 */
function addProductCardEventListeners() {
  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
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

  //  Wishlist toggle buttons
  const wishlistButtons = document.querySelectorAll(".wishlist-toggle");
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
  const quickViewButtons = document.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `../pages/product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Sort products based on sort option
 */
function sortProducts(products, sortOption) {
  const sortedProducts = [...products];

  switch (sortOption) {
    case "newest":
      return sortedProducts.sort((a, b) => b.id - a.id);

    case "price-low":
      return sortedProducts.sort((a, b) => {
        const priceA = a.onSale ? a.salePrice : a.price;
        const priceB = b.onSale ? b.salePrice : b.price;
        return priceA - priceB;
      });

    case "price-high":
      return sortedProducts.sort((a, b) => {
        const priceA = a.onSale ? a.salePrice : a.price;
        const priceB = b.onSale ? b.salePrice : b.price;
        return priceB - priceA;
      });

    case "best-selling":
      return sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);

    case "featured":
    default:
      // For featured, we'll use a combination of review count and rating
      return sortedProducts.sort((a, b) => {
        const scoreA = a.rating * 0.7 + (a.reviewCount / 300) * 0.3;
        const scoreB = b.rating * 0.7 + (b.reviewCount / 300) * 0.3;
        return scoreB - scoreA;
      });
  }
}

/**
 * Update pagination
 */
function updatePagination(totalProducts, totalPages) {
  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  let paginationHtml = "";

  // Previous button
  paginationHtml += `
    <button class="pagination-item pagination-prev ${
      currentPage === 1 ? "disabled" : ""
    }" ${currentPage === 1 ? "disabled" : ""}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Page numbers
  const maxPages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = Math.min(totalPages, startPage + maxPages - 1);

  if (endPage - startPage + 1 < maxPages) {
    startPage = Math.max(1, endPage - maxPages + 1);
  }

  if (startPage > 1) {
    paginationHtml += `
      <button class="pagination-item" data-page="1">1</button>
    `;

    if (startPage > 2) {
      paginationHtml += `
        <span class="pagination-item pagination-ellipsis">...</span>
      `;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationHtml += `
      <button class="pagination-item ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</button>
    `;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHtml += `
        <span class="pagination-item pagination-ellipsis">...</span>
      `;
    }

    paginationHtml += `
      <button class="pagination-item" data-page="${totalPages}">${totalPages}</button>
    `;
  }

  // Next button
  paginationHtml += `
    <button class="pagination-item pagination-next ${
      currentPage === totalPages ? "disabled" : ""
    }" ${currentPage === totalPages ? "disabled" : ""}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  paginationContainer.innerHTML = paginationHtml;

  // Add event listeners to pagination items
  const pageButtons = document.querySelectorAll(".pagination-item[data-page]");
  if (pageButtons) {
    pageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        currentPage = parseInt(this.getAttribute("data-page"));
        loadProducts();
        updateUrlParams();

        // Scroll to top of products
        const productsSection = document.querySelector(".products-section");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Add event listeners to prev/next buttons
  const prevButton = document.querySelector(".pagination-prev");
  if (prevButton && !prevButton.disabled) {
    prevButton.addEventListener("click", function () {
      currentPage = Math.max(1, currentPage - 1);
      loadProducts();
      updateUrlParams();

      // Scroll to top of products
      const productsSection = document.querySelector(".products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const nextButton = document.querySelector(".pagination-next");
  if (nextButton && !nextButton.disabled) {
    nextButton.addEventListener("click", function () {
      currentPage = Math.min(totalPages, currentPage + 1);
      loadProducts();
      updateUrlParams();

      // Scroll to top of products
      const productsSection = document.querySelector(".products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

/**
 * Load recently viewed products
 */
function loadRecentlyViewed() {
  if (!recentlyViewedContainer) return;

  const recentlyViewedProducts = getRecentlyViewed();

  if (recentlyViewedProducts.length === 0) {
    recentlyViewedContainer.closest(".recently-viewed-section").style.display =
      "none";
    return;
  }

  let html = "";

  recentlyViewedProducts.forEach((product) => {
    const isInWish = isInWishlist(product.id);

    html += `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="../pages/product-detail.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          
          <div class="product-card-badges">
            ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
            ${
              product.onSale ? '<span class="badge badge-sale">Sale</span>' : ""
            }
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
            <span class="current-price">${formatPrice(
              product.onSale ? product.salePrice : product.price
            )}</span>
            ${
              product.onSale
                ? `<span class="old-price">${formatPrice(product.price)}</span>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  });

  recentlyViewedContainer.innerHTML = html;

  // Add event listeners
  addProductCardEventListeners();
}

////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  loadSuggestedProducts();
});

function loadSuggestedProducts() {
  const container = document.getElementById("suggested-products");

  // Ensure PRODUCTS_DATA is available
  if (!container || typeof PRODUCTS_DATA === "undefined") {
    console.error("PRODUCTS_DATA is not loaded or container is missing.");
    return;
  }

  // Remove spinner if any
  container.innerHTML = "";

  // Get 4 random products from PRODUCTS_DATA
  const shuffled = [...PRODUCTS_DATA].sort(() => 0.5 - Math.random());
  const suggested = shuffled.slice(0, 4);

  // Render suggested products
  suggested.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <a href="../pages/product-detail.html?id=${product.id}">
        <div class="product-card-image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-price">
          <span class="current-price">${formatPrice(
            product.onSale ? product.salePrice : product.price
          )}</span>
          ${
            product.onSale
              ? `<span class="old-price">${formatPrice(product.price)}</span>`
              : ""
          }
        </div>
      </a>
    `;
    container.appendChild(productCard);
  });
}

// Example price formatter (customize to your locale)
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

//////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  loadRecommendedProducts();
});

function loadRecommendedProducts() {
  const container = document.getElementById("recommended-products");

  // Ensure PRODUCTS_DATA is available
  if (!container || typeof PRODUCTS_DATA === "undefined") {
    console.error("PRODUCTS_DATA is not loaded or container is missing.");
    return;
  }

  // Remove spinner if present
  const spinner = container.querySelector(".loading-spinner");
  if (spinner) {
    spinner.remove();
  }

  // Get 4 random products from PRODUCTS_DATA
  const shuffled = [...PRODUCTS_DATA].sort(() => 0.5 - Math.random());
  const recommended = shuffled.slice(0, 4);

  // Render recommended products
  recommended.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <a href="../pages/product-detail.html?id=${product.id}">
        <div class="product-card-image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-price">
          <span class="current-price">${formatPrice(
            product.onSale ? product.salePrice : product.price
          )}</span>
          ${
            product.onSale
              ? `<span class="old-price">${formatPrice(product.price)}</span>`
              : ""
          }
        </div>
      </a>
    `;
    container.appendChild(productCard);
  });
}

// Example price formatter (customize as needed)
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

//////////////////////////////////
