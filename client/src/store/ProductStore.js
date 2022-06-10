import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [{id:1, name: 'Хлеб и выпечка'},
            {id:2, name: 'Овощи и фрукты'},
            {id:3, name: 'Напитки'},
            {id:4, name: 'Мясо'},
            {id:5, name: 'Рыба и морепродукты'},
            {id:6, name: 'Молочные продукты'},
            {id:7, name: 'Сладости'},];
        this._subtypes = [{id:1, name: 'Овощи'},
            {id:2, name: 'Фрукты'},
            {id:3, name: 'Орехи'},];
        this._products = [
            {id:1, name: 'Томаты', price: 130, img: 'https://cosmetology-info.ru/img_lib/2014/05/1400092219_c220.jpg'},
            {id:2, name: 'Огурцы', price: 130, img: 'https://beru-edu.ru/files/shop/47/fru-101240_2.png'},
            {id:3, name: 'Картофель', price: 130, img: 'https://landdostavka.ru/upload/iblock/af5/af5a84b301422ad9aaefe278cd1874af.jpg'},
            {id:4, name: 'Капуста', price: 130, img: 'https://cosmetology-info.ru/img_lib/2014/05/1400092219_c220.jpg'},
            {id:5, name: 'Морковь', price: 130, img: 'https://cosmetology-info.ru/img_lib/2014/05/1400092219_c220.jpg'},
        ];
        this._selectedType = {};
        this._selectedSubtype = {};
        makeAutoObservable(this);
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
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedSubtype(subtype) {
        this._selectedSubtype = subtype
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
    get selectedType() {
        return this._selectedType
    }
    get selectedSubtype() {
        return this._selectedSubtype
    }
}