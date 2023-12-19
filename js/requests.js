async function readDataReq(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function createDataReq(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return await response.json();
}

async function updateDataReq(url, data) {
    const response = await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return await response.json();
}

async function deleteDataReq(url, data) {
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return await response.json();
}