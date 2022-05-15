const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const subtypeRouter = require('./subtypeRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/subtype', subtypeRouter)
router.use('/product', productRouter)

module.exports = router