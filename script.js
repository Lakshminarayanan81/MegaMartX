const products = [
    { name: "Smartwatch X200", img: "./images/watch.jpg", price: "₹4,999", rating: "⭐⭐⭐⭐" },
    { name: "Samsung Galaxy Watch", img: "./images/Samsung-Galaxy-Watch-Active-1.png", price: "₹12,999", rating: "⭐⭐⭐⭐⭐" },
    { name: "Nikon Camera", img: "./images/nikon-camera-7369703_1280.jpg", price: "₹45,999", rating: "⭐⭐⭐⭐⭐" },
    { name: "Apple iPhone 14", img: "./images/iphone14.jpeg", price: "₹79,999", rating: "⭐⭐⭐⭐" },
    { name: "Sony Headphones", img: "./images/sony-headphones.jpeg", price: "₹9,999", rating: "⭐⭐⭐⭐⭐" },
    { name: "Dell Laptop", img: "./images/dell-laptop.jpeg", price: "₹52,499", rating: "⭐⭐⭐⭐" },
    { name: "Nike Shoes", img: "./images/nike-shoes.jpeg", price: "₹6,999", rating: "⭐⭐⭐⭐⭐" },
    { name: "Backpack", img: "./images/backpack.jpg", price: "₹2,499", rating: "⭐⭐⭐⭐" }
];

const productGrid = document.getElementById("product-grid");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p class="rating">${product.rating}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
});
