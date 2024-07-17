async function getProducts() {
  try {
    // Fetch products from both categories concurrently
    const [menResponse, womenResponse] = await Promise.all([
      fetch("https://fakestoreapi.com/products/category/men's clothing"),
      fetch("https://fakestoreapi.com/products/category/women's clothing"),
    ]);

    // Parse the JSON responses concurrently
    const [menProducts, womenProducts] = await Promise.all([
      menResponse.json(),
      womenResponse.json(),
    ]);

    // Combine the products into a single array
    const products = [...menProducts, ...womenProducts];
    return products;
  } catch (error) {
    // Handle any errors that occur during the fetch or parsing
    console.error("Error fetching products:", error);
    return [];
  }
}

export default getProducts;
