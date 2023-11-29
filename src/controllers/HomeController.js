export async function getHome() {
    const services = [
        {
            "reference": "2",
            "name": "Cera de afeitar",
            "brand": "tocca",
            "category": 2,
            "price": 50000,
            "description": "Cera de afeitar hidratante y protectora que facilita el deslizamiento de la cuchilla y previene las irritaciones.",
            "quantity": 20,
            "status": true,
            "img": "URL de la Imagen",
            "admin_id": 1,
            "created_at": "2023-11-28T01:47:05.627861+00:00",
            "user": "af9ee84e-0495-4e6f-a759-a318a420d762"
        },
        {
            "reference": "3",
            "name": "Champú para barba",
            "brand": "L'Oréal Men Expert",
            "category": 3,
            "price": 30000,
            "description": "Champú para barba que limpia e hidrata la barba, dejándola suave y manejable.",
            "quantity": 30,
            "status": true,
            "img": "URL de la Imagen",
            "admin_id": 1,
            "created_at": "2023-11-28T01:49:06.649638+00:00",
            "user": "af9ee84e-0495-4e6f-a759-a318a420d762"
        },
        {
            "reference": "1",
            "name": "Machee",
            "brand": "AK47",
            "category": 2,
            "price": 30000,
            "description": "Penilla para Cabello y Barba",
            "quantity": 5,
            "status": true,
            "img": "URL",
            "admin_id": 1,
            "created_at": "2023-11-28T01:43:04.737789+00:00",
            "user": "af9ee84e-0495-4e6f-a759-a318a420d762"
        }
    ];
    const categories = {};
    services.forEach(service => {
        const titles = {1: 'Cabello', 2: 'Barba', 3: 'Cuidado Personal'};
        if (!categories[service.category]) {
            categories[service.category] = {title: titles[service.category], data: []}
        }
        categories[service.category].data = [service]
    });
    return {services: categories};
}