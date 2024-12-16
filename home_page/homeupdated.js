document.addEventListener("DOMContentLoaded", async () => {
    const productGrid = document.getElementById('product-grid');

    try {
        const response = await fetch('fetch_products.php');
        const products = await response.json();

        if (products.length > 0) {
            products.forEach(product => {
                const productCard = `
                    <div class="product-card">
                        <img src="${product.image_path}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <div class="product-info">
                            <span>${'⭐️'.repeat(product.stars)}</span>
                            <p>${product.description}</p>
                        </div>
                        <span>Rs. ${product.price}</span>
                        <button class="cart-btn" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                    </div>
                `;
                productGrid.innerHTML += productCard;
            });
        } else {
            productGrid.innerHTML = "<p>No products available</p>";
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        productGrid.innerHTML = "<p>Error loading products</p>";
    }
});

function addToCart(productName, productPrice) {
    alert(`Added ${productName} (Rs. ${productPrice}) to cart!`);
    // Implement further logic for "My Cart" functionality
}