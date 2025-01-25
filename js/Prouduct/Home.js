document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    const products = [
        {
            id: 1,
            image: "images/Cloth Brands/WYWH TEE.PNG",
            backImage: "images/Cloth Brands/WYWH TEE Back.PNG",
            sticker: "New",
            manufacturer: "YangStars",
            rating: 3,
            product_name: "WYWH TEE",
            price: "$46.80",
            links: {
                cart: "shopping-cart.html",
                quick_view: "#",
                wishlist: "wishlist.html"
            }
        },
        {
            id: 2,
            image: "images/Cloth Brands/ALL EYES ON YOU TEE.PNG",
            backImage: "images/Cloth Brands/All EYES ON YOU TEE Back.PNG",
            sticker: "Hot",
            manufacturer: "YangStars",
            rating: 5,
            product_name: "ALL EYES ON YOU TEE",
            price: "$59.90",
            links: {
                cart: "shopping-cart.html",
                quick_view: "#",
                wishlist: "wishlist.html"
            }
        },
        {
            id: 3,
            image: "images/Cloth Brands/T Shirt.PNG",
            backImage: "images/Cloth Brands/T Shirt Back.PNG",
            sticker: "Hot",
            manufacturer: "YangStars",
            rating: 5,
            product_name: "T Shirt",
            price: "$59.90",
            links: {
                cart: "shopping-cart.html",
                quick_view: "#",
                wishlist: "wishlist.html"
            }
        },
        {
            id: 4,
            image: "images/Cloth Brands/YANG STARS HOODIE V1.PNG",
            backImage: "images/Cloth Brands/YANG STARS HOODIE Back.PNG",
            sticker: "Hot",
            manufacturer: "YangStars",
            rating: 5,
            product_name: "YANG STARS HOODIE V1",
            price: "$59.90",
            links: {
                cart: "shopping-cart.html",
                quick_view: "#",
                wishlist: "wishlist.html"
            }
        }
    ];

    const currentURL = window.location.pathname;
    console.log("Current URL:", currentURL);

    // Logic for the product list page
    if (currentURL.includes("shop-3-column.html")) {
        console.log("Rendering products...");
        const productRow = document.getElementById("product-row");

        if (productRow) {
            products.forEach((product) => {
                const productHTML = `
                    <div class="col-lg-4 col-md-4 col-sm-6 mt-40">
                        <div class="single-product-wrap" data-id="${product.id}">
                            <div class="product-image">
                                <a href="single-product.html?id=${product.id}">
                                    <img src="${product.image}" alt="${product.product_name}">
                                </a>
                                <span class="sticker">${product.sticker}</span>
                            </div>
                            <div class="product_desc">
                                <h4>
                                    <a class="product_name" href="single-product.html?id=${product.id}">${product.product_name}</a>
                                </h4>
                                <div class="price-box">
                                    <span class="new-price">${product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                productRow.insertAdjacentHTML("beforeend", productHTML);
            });
        } else {
            console.error("#product-row not found!");
        }
    }

    if (currentURL.includes("single-product.html")) {
        console.log("Rendering product details...");
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get("id"));
        console.log("Product ID:", productId);
    
        const product = products.find((p) => p.id === productId);
        console.log("Product Found:", product);
    
        if (product) {
            const productImagesContainer = document.querySelector(".product-details-images.slider-navigation-1");
            const productThumbsContainer = document.querySelector(".product-details-thumbs.slider-thumbs-1");
    
            console.log("Product Images Container:", productImagesContainer);
            console.log("Product Thumbs Container:", productThumbsContainer);
    
            if (productImagesContainer && productThumbsContainer) {
                productImagesContainer.innerHTML = `
                    <div class="lg-image">
                        <a class="popup-img venobox vbox-item" href="${product.image}" data-gall="myGallery">
                            <img src="${product.image}" alt="product image">
                        </a>
                    </div>
                    <div class="lg-image">
                        <a class="popup-img venobox vbox-item" href="${product.backImage}" data-gall="myGallery">
                            <img src="${product.backImage}" alt="product image">
                        </a>
                    </div>
                `;
    
                // productThumbsContainer.innerHTML = `
                //     <div class="sm-image">
                //         <img src="${product.image}" alt="product image thumb">
                //     </div>
                //     <div class="sm-image">
                //         <img src="${product.backImage}" alt="product image thumb">
                //     </div>
                // `;
            } else {
                console.error("Required elements for product details not found!");
            }
        } else {
            console.error("Product not found with ID:", productId);
        }
    }
    
    
});
