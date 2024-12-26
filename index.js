(async () => {

    const url = 'https://fakestoreapi.com/products';
    const productContainerEl = document.getElementById("container");
    const searchInputEl = document.getElementById("searchInput");
    

    const fetchProducts = async () => {
        try {
            const res = await fetch(url);
            return await res.json();
        } catch (error) {
            return error;
        }
    };

    const products = await fetchProducts();
    const generateProducts = (product) => {
        return ` <div class="product_card">
            <div class="img_container">
                <img src="${product.image}" alt="">
            </div>
            <div class="product_content">
                <h2>${product.title}
                </h2>
                <p>${product.description.split(" ").slice(0,20).join(" ")}</p>
                <button>15.99 $</button>
            </div>
        </div>`;
    };
    const renderProducts = (products) => {
        productContainerEl.innerHTML = "";
        products.forEach((product) => {
            productContainerEl.innerHTML += generateProducts(product);
        });
    };
    const filterHandler = (event) =>{
        const searchText = event.target.value.toLowerCase();

        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchText)
        });
    };
    searchInputEl.addEventListener("keyup", filterHandler);


    renderProducts(products);
})();