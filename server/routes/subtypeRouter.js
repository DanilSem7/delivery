const Router = require('express')
const router = new Router()
const subtypeController = require('../controllers/SubtypeController')

router.post('/', subtypeController.create)
router.get('/', subtypeController.getAll)

module.exports = router