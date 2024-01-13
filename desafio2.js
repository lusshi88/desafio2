class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const newProduct = {
        id: this.nextId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      const productExists = this.products.some((product) => product.code === code);
      if (productExists) {
        throw new Error("Error: Product already exists");
      }
  
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        throw new Error("Error: Product not found");
      }
      return product;
    }
  
    updateProduct(id, updatedProduct) {
      const productIndex = this.products.findIndex((product) => product.id === id);
      if (productIndex === -1) {
        throw new Error("Error: Product not found");
      }
  
      const updatedProductWithId = { ...updatedProduct, id };
      this.products[productIndex] = updatedProductWithId;
      return updatedProductWithId;
    }
  
    deleteProduct(id) {
      const productIndex = this.products.findIndex((product) => product.id === id);
      if (productIndex === -1) {
        throw new Error("Error: Product not found");
      }
  
      this.products.splice(productIndex, 1);
    }
  }
  
  // Create an instance of the ProductManager class
  const productManager = new ProductManager();
  
  // Call getProducts and it should return an empty array []
  console.log(productManager.getProducts());
  
  // Call addProduct and add a new product
  try {
    const newProduct = productManager.addProduct(
      "producto prueba",
      "Este es un producto prueba",
      200,
      "Sin imagen",
      "abc123",
      25
    );
    console.log(newProduct);
  } catch (error) {
    console.error(error.message);
  }
  
  // Call getProducts again and it should return the product added
  console.log(productManager.getProducts());
  
  // Call getProductById and it should return the product with the specified id
  console.log(productManager.getProductById(1));
  
  // Call updateProduct and update a field of the product
  try {
    const updatedProduct = productManager.updateProduct(
      1,
      { title: "producto prueba actualizado" }
    );
    console.log(updatedProduct);
  } catch (error) {
    console.error(error.message);
  }
  
  // Call deleteProduct and it should delete the product
  try {
    productManager.deleteProduct(1);
    console.log(productManager.getProducts());
  } catch (error) {
    console.error(error.message);
  }