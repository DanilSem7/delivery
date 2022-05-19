import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [];
        this._subtypes = [];
        this._products = [];
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