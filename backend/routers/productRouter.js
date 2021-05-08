import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import { generateToken } from '../utils.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Producto no encontrado' });
    }
  })
);

productRouter.post(
  '/addstock',
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      image: req.body.image,
      price: req.body.price,
      countInStock: req.body.countInStock,
      brand: req.body.brand,
      description: req.body.description,
    });

    const createdProduct = await product.save();
    
    res.send({
      _id: createdProduct.id,
      name: createdProduct.name,
      category: createdProduct.category,
      image: createdProduct.image,
      price: createdProduct.price,
      countInStock: createdProduct.countInStock,
      brand: createdProduct.brand,
      description: createdProduct.description,
      token: generateToken(createdProduct),
    }
    
    );
    res.status(200).send({ message: 'Producto agregado' });
  
    
  })
);


export default productRouter;