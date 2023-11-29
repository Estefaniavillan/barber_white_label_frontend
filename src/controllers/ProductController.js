async function getProducts() {
    const request = await fetch('http://localhost:3000/api/products');
    if (request.ok){
        const response = await request.json();
        return response.data;
    }
    throw new Error('Error al obtener los datos');
}

export default getProducts