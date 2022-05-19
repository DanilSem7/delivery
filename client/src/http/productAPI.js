import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createSubtype = async (subtype) => {
    const {data} = await $authHost.post('api/subtype', subtype)
    return data
}

export const fetchSubtypes = async () => {
    const {data} = await $host.get('api/subtype')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/product')
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}