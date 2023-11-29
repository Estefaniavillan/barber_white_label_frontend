const product = [
    {
        id: 1,
        name: "gel",
        price: "1200000"
    },
    {

        id: 2, 
        name: "shampoo",
        price: "100000",

    }
]

export async function getProducts() {
    return product
}

export async function getProductByKey(key){
    return products.filter((product) => product.name === key || product.price === key)
}
