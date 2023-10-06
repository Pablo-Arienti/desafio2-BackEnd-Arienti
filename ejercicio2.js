class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateUniqueId() {
      return Math.random().toString(36).substring(2, 10);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      if (this.products.some(product => product.code === code)) {
        throw new Error('El código de producto ya existe.');
      }
  
      const id = this.generateUniqueId();
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      return product;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Producto no encontrado.');
      }
      return product;
    }
  
    updateProduct(id, updatedFields) {
      const productIndex = this.products.findIndex(product => product.id === id);
      if (productIndex === -1) {
        throw new Error('Producto no encontrado.');
      }
      const updatedProduct = { ...this.products[productIndex], ...updatedFields };
      updatedProduct.id = id;
      this.products[productIndex] = updatedProduct;
      return updatedProduct;
    }
  
    deleteProduct(id) {
      const productIndex = this.products.findIndex(product => product.id === id);
      if (productIndex === -1) {
        throw new Error('Producto no encontrado.');
      }
  
   
      this.products.splice(productIndex, 1);
    }
  }
  
  
  const productManager = new ProductManager();

  const products1 = productManager.getProducts();
  console.log(products1);
  
 
  const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  };
  
  const addedProduct = productManager.addProduct(newProduct);
  console.log(addedProduct);
  
 
  const products2 = productManager.getProducts();
  console.log(products2);
  
  const productById = productManager.getProductById(addedProduct.id);
  console.log(productById);
  

  const updatedFields = {
    title: "Producto Actualizado",
    description: "Descripción Actualizada",
    price: 300,
  };
  
  const updatedProduct = productManager.updateProduct(addedProduct.id, updatedFields);
  console.log(updatedProduct);
  

  productManager.deleteProduct(addedProduct.id);
  console.log("Producto eliminado.");
  
 
  try {
    productManager.getProductById(addedProduct.id);
  } catch (error) {
    console.error(error.message);
  }
  