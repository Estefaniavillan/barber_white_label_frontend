import Product from "../models/Product";

async function getServices() {
    const request = await fetch('http://localhost:3000/api/services');
    const response = await request.json()
    return response.data
}

export default getServices