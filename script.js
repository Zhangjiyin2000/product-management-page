const defaultProducts = [
    { name: "M&M", category: "Snacks", price: "$1.99" },
    { name: "Table", category: "Furniture", price: "$199" },
    { name: "Kale", category: "Vegetables", price: "$2.49" }
];

const products = [...defaultProducts];

const productForm = document.getElementById("product-form");
const productTableBody = document.getElementById("product-table-body");
const nameInput = document.getElementById("product-name");
const categoryInput = document.getElementById("product-category");
const priceInput = document.getElementById("product-price");

function renderProducts() {
    productTableBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td><button class="delete-button" type="button" data-index="${index}">Delete</button></td>
        `;

        productTableBody.appendChild(row);
    });
}

productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const category = categoryInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !category || !price) {
        return;
    }

    products.push({ name, category, price });
    renderProducts();
    productForm.reset();
    nameInput.focus();
});

productTableBody.addEventListener("click", (event) => {
    const target = event.target;

    if (!target.matches(".delete-button")) {
        return;
    }

    const productIndex = Number(target.dataset.index);
    products.splice(productIndex, 1);
    renderProducts();
});

renderProducts();
