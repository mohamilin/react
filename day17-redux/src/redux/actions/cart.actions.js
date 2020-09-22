export const UP_PRODUCT = 'UP_PRODUCT'
export const DOWN_PRODUCT = 'DOWN_PRODUCT'

export const addproduct = () => {
    return {
        type: UP_PRODUCT,
    }
}

export const minProduct = () => {
    return {
        type: DOWN_PRODUCT,
    }
}