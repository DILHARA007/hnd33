// Product Data
const products = [
    { name: "Tomato", image: "tomato.jpg", price: "Rs. 50", description: "Discounted Price!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Spinach", image: "images/", price: "Rs. 70", description: "Fresh Stock!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Samba Rice", image: "samba-rice.jpg", price: "Rs. 100", description: "Special Offer!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Cabbage", image: "cabbage.jpg", price: "Rs. 50", description: "Best Quality!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Banana", image: "banana.jpg", price: "Rs. 90", description: "Organic Banana!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Broccoli", image: "broccoli.jpg", price: "Rs. 150", description: "Fresh Green!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Red Onion", image: "red-onion.jpg", price: "Rs. 80", description: "Spicy Flavor!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Strawberry", image: "strawberry.jpg", price: "Rs. 120", description: "Sweet & Juicy!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Potato", image: "potato.jpg", price: "Rs. 60", description: "Farm Fresh!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Carrot", image: "carrot.jpg", price: "Rs. 70", description: "Crunchy Delight!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Cauliflower", image: "cauliflower.jpg", price: "Rs. 80", description: "Premium Quality!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Green Beans", image: "green-beans.jpg", price: "Rs. 65", description: "Fresh Stock!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Lemon", image: "lemon.jpg", price: "Rs. 50", description: "Zesty Flavor!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Eggplant", image: "eggplant.jpg", price: "Rs. 85", description: "Farm Fresh!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Pineapple", image: "pineapple.jpg", price: "Rs. 100", description: "Sweet & Fresh!", stars: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "Ginger", image: "ginger.jpg", price: "Rs. 70", description: "Top Grade!", stars: "⭐️⭐️⭐️⭐️⭐️" },
];

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
