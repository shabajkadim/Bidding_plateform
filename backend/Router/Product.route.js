import { Router } from "express";
import { AddProduct, getProduct } from "../Controller/product.Controller.js";
// import { UploadProduct } from "../Controller/UploadProduct.Controller.js";

const router=Router()
router.post('/add-product',AddProduct)
// router.post('/upload-product',UploadProduct)
router.get('/get-product',getProduct)

export default router