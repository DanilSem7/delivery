import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 3, name: 'Напитки'}
        ]
        this._subtypes = [
            {id: 1, name: 'Овощи'},
            {id: 2, name: 'Фрукты'},
            {id: 3, name: 'Ягоды'}
        ]
        this._products = [
            {id: 2, name: "Томаты", price: 150, img: 'https://galsfood.com/wa-data/public/shop/products/14/02/214/images/152/152.970.png'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setSubtypes(subtypes) {
        this._subtypes = subtypes
    }
    setProducts(products) {
        this._products = products
    }

    get types() {
        return this._types
    }
    get subtypes() {
        return this._subtypes
    }
    get products() {
        return this._products
    }
}