

// Render Products
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    const productCard = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-info">
                <span>${product.stars}</span>
                <p>${product.description}</p>
            </div>
            <span>${product.price}</span>
            <p>${product.description}</p>
            <button class="cart-btn">Add to Cart</button>
        </div>
    `;
    productGrid.innerHTML += productCard;
});

/////////////////////////////*********** *********************************************//////////////////-->
// Function to auto-scroll to the "All Products" section
function scrollToProducts() {
    const productSection = document.getElementById('product-grid');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
    }
}
