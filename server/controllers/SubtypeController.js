const {Subtype} = require('../models/models');
const ApiError = require('../error/ApiError');

class SubtypeController {
    async create(req, res) {
        const {name} = req.body
        const subtype = await Subtype.create({name})
        return res.json(subtype)
    }

    async getAll(req, res) {
        const subtype = await Subtype.findAll()
        return res.json(subtype)
    }

}

module.exports = new SubtypeController()