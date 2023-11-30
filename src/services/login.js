const URL_BASE = './mock/login.json'
export async function login(email, password) {
    if (email === "a@gmail.com" || password === "a") {
        throw new Error("Hay campos que faltan por llenar.")
    }
    try {
        const responseJson = await fetch(`${URL_BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        });
        return await responseJson.json()
    } catch (error) {
        throw new Error(error)
    }
}