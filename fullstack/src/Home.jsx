function Home({ addToCart }) {
    const products = [
        {
            id: 1,
            name: "Headphones",
            price: 999,
            img: "https://www.lapcare.com/cdn/shop/files/1_6122ca29-5373-4c4f-97c2-0728ea368fc1.webp?v=1757326029&width=2048",
        },
        {
            id: 2,
            name: "Shoes",
            price: 1499,
            img: "https://offlimits.co.in/cdn/shop/files/OCM-64305_1_1200x1200.jpg?v=1720259294",
        },
        {
            id: 3,
            name: "Watch",
            price: 1999,
            img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-hermes-ultra-202603_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95",
        },
        {
            id: 4,
            name: "Mobile",
            price: 150000,
            img: "https://darlingretail.com/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__WWEN_600x.jpg?v=1695103868",
        },
        {
            id: 1,
            name: "Charger",
            price: 999,
            img: "https://tingd2c.com/cdn/shop/files/Artboard1_5f868df7-e28d-4e43-a42d-62be1fdb81b7.jpg?v=1726405549&width=535",
        },
        {
            id: 2,
            name: "Sunglasses",
            price: 1499,
            img: "https://soooq.com/cdn/shop/files/af090acc-51b6-49c2-8e3c-ac85bba36834.jpg?v=1756718493&width=720",
        },
        {
            id: 3,
            name: "Earbuds",
            price: 1999,
            img: "https://ptron.in/cdn/shop/files/B0C1PSBYKP.MAIN.jpg?v=1684845065&width=1946",
        },
        {
            id: 4,
            name: "Mobile",
            price: 150000,
            img: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/i/s/g/-original-imahgfmzraymrnrg.jpeg?q=70",
        },
        {
            id: 1,
            name: "Headphones",
            price: 999,
            img: "https://www.billboard.com/wp-content/uploads/2025/07/Hermes-Headphones-Best-Headphones-BB-Embed.jpg?w=925",
        },
        {
            id: 2,
            name: "Shoes",
            price: 1499,
            img: "https://www.campusshoes.com/cdn/shop/files/VESPER_VESPER_ICE.BLU-NAVY_07.webp?v=1758174881",
        },
        {
            id: 3,
            name: "Watch",
            price: 1999,
            img: "https://rukminim2.flixcart.com/image/480/640/xif0q/watch/d/n/r/1-resistance-luminous-taostry-boys-girls-original-imah62t5dkhrqtet.jpeg?q=90",
        },
        {
            id: 4,
            name: "Ring",
            price: 150000,
            img: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/Annette/diamond/diamond-Brillant_AAA/alloycolour/yellow.jpg",
        },
    ];

    return (
        <section className="products">
            <h2>🛍️ Products</h2>

            <div className="product-container">
                {products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.img} alt={item.name} />

                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>

                        <button onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;