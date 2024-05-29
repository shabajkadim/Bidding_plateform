import { Router } from "express";
import AuthRouter from './Auth.route.js'
import ProductRouter from './Product.route.js'

const router=Router()

router.use('/auth',AuthRouter)
router.use('/product',ProductRouter)

export default router