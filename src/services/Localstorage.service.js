export function getFromLocalstorage(key) {
    const data = JSON.parse(JSON.parse(localStorage.getItem(key)));
    return data;
}

export function setToLocalstorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}