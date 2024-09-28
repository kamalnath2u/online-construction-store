const buildingMaterials  = [
    { id: 1, name: "Portland Cement", price: 400, image: "port.jpeg" },
    { id: 2, name: "Rapid-Hardening Cement", price: 450, image: "rapi.jpeg" },
    { id: 3, name: "Construction-grade Sand", price: 300, image: "construction grade.jpeg" },
    { id: 4, name: "Gravel", price: 500, image: "gravel.jpeg" },
    { id: 5, name: "Clay Bricks", price: 600, image: "clay bricks.jpeg" },
    { id: 6, name: "Ceramic Tiles", price: 700, image: "ceramic tiles.jpeg" },
    { id: 7, name: "Reinforcing Bars", price: 800, image: "tmt.jpeg" },
    { id: 8, name: "Electrical Wires", price: 250, image: "wire.jpeg" },
    // Add more products as needed
];
;

const hardwareTools = [
    { id: 1, name: "Hammer", price: 300, image: "hammer.jpeg" },
    { id: 2, name: "Screwdriver Set", price: 600, image: "scre.jpeg" },
    { id: 3, name: "Power Drill", price: 2500, image: "drill.jpeg" },
    { id: 4, name: "Saw", price: 1200, image: "saw.jpeg" },
];

const otherEssentialItems = [
    { id: 1, name: "Plumbing Adhesives", price: 200, image: "plumbing adhesives.jpeg" },
    { id: 2, name: "Construction Chemicals", price: 700, image: "chemical.jpeg" },
    { id: 3, name: "Cleaning Supplies", price: 150, image: "clean.jpeg" },
];

let cart = [];
let totalPrice = 0;

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ""; // Clear existing products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = [...buildingMaterials, ...hardwareTools, ...otherEssentialItems].find(p => p.id === productId);
    if (product) {
        cart.push(product);
        totalPrice += product.price;
        document.getElementById('cart-count').innerText = cart.length;
        document.getElementById('total-price').innerText = totalPrice;
        alert(`${product.name} has been added to your cart!`);
    }
}

document.getElementById('scrap-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const scrapName = document.getElementById('scrap-name').value;
    const scrapDescription = document.getElementById('scrap-description').value;
    const scrapImage = document.getElementById('scrap-image').files[0];

    if (scrapName && scrapDescription && scrapImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const message = `Scrap item "${scrapName}" has been submitted successfully!`;
            document.getElementById('message').innerText = message;
            document.getElementById('scrap-form').reset();
        };
        reader.readAsDataURL(scrapImage);
    } else {
        document.getElementById('message').innerText = "Please fill all fields.";
    }
});

document.getElementById('checkout-button')?.addEventListener('click', function() {
    if (cart.length > 0) {
        alert(`Proceeding to payment. Total amount: ₹${totalPrice}`);
        // Here you can add real payment logic using payment gateways
    } else {
        alert("Your cart is empty. Please add items before proceeding to checkout.");
    }
});

// Load products based on the current page
if (document.title === "Building Materials") {
    displayProducts(buildingMaterials);
} else if (document.title === "Hardware & Tools") {
    displayProducts(hardwareTools);
} else if (document.title === "Other Essential Items") {
    displayProducts(otherEssentialItems);
}
document.getElementById('scrap-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const scrapName = document.getElementById('scrap-name').value;
    const scrapDescription = document.getElementById('scrap-description').value;
    const scrapImage = document.getElementById('scrap-image').files[0];

    if (scrapName && scrapDescription && scrapImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const message = `Scrap item "${scrapName}" has been submitted successfully!`;
            document.getElementById('message').innerText = message;
            document.getElementById('scrap-form').reset();
        };
        reader.readAsDataURL(scrapImage);
    } else {
        document.getElementById('message').innerText = "Please fill all fields.";
    }
});
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can handle the data submission, e.g., to a server
    alert('Payment Confirmed! Thank you for your purchase.');
    
    // Optionally, redirect to a confirmation page
    // window.location.href = 'confirmation.html'; 
});




