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
  
  
  const productManager = new ProductManager();
  
  
  console.log(productManager.getProducts());
  
 
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
  
  
  console.log(productManager.getProducts());
  
  
  console.log(productManager.getProductById(1));
  
  
  try {
    const updatedProduct = productManager.updateProduct(
      1,
      { title: "producto prueba actualizado" }
    );
    console.log(updatedProduct);
  } catch (error) {
    console.error(error.message);
  }
  
 
  try {
    productManager.deleteProduct(1);
    console.log(productManager.getProducts());
  } catch (error) {
    console.error(error.message);
  }