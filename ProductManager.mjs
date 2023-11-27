export class ProductManager {
    constructor() {
      this.products = []
    }
  
    getProducts() {
      return console.log(this.products)
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id)
  
      product ? console.log(product) : console.log("Not Found.")
    }
  
    addProduct(product) {
      // Check that the product has all the fields
      const fields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock']
      const fields_product = Object.keys(product)
      const fieldsConfirm = fields.every((field) => fields_product.includes(field))

      if(!fieldsConfirm) return console.log('A field is missing from the product.');

      // Check that the code field is not repeated
      const productAdd = this.products.find((p) => p.code === product.code)

      // If the product does not exist, it is added to the array
      if(!productAdd){
        product.id = this.products.length+1
        return this.products.push(product)
      }
      
      console.log("There is already a product with that code.")
    }
  }