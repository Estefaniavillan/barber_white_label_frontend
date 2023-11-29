const services = [
    {
        id: 1,
        name: "Hola hhhhh"
    },
    {
        id: 2,
        name: "Adios"
    }
]

export async function getServices() {
    return services
}

export async function getServiceByKey(key){
    return services.filter((service) => service.name === key || service.price === key)
}
