const productRouter = require("express").Router();
const Product = require("../models/product");

productRouter.get("/", async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.error(error);
  }
});

productRouter.post("/", async (request, response) => {
  try {
    const product = new Product(request.body);

    const result = await product.save();

    response.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
});

productRouter.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    await Product.findByIdAndRemove(id);

    response.status(204).end();
  } catch (error) {
    console.error(error);
  }
});

productRouter.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findById(id);
    response.json(product);
  } catch (error) {
    console.error(error);
  }
});

module.exports = productRouter;
