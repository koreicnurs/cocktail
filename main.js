const main = async (url, init) => {
    const response = await fetch(url, init);
    if(!response.ok) {
        throw new Error(response.status)
    }

    return response.json();
};