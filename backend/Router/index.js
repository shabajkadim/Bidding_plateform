import { Router } from "express";
import AuthRouter from './Auth.route.js'

const router=Router()

router.use('/auth',AuthRouter)

export default router