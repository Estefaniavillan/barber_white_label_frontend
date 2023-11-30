export default async function deleteProduct(reference) {
    const request = await fetch('http://localhost:3000/api/deleteProduct/' + reference, {
        method: 'DELETE',
    });
    if (request.ok) {
        const response = await request.json();
        return response.data;
    }
    throw new Error('Error al obtener los datos');
}