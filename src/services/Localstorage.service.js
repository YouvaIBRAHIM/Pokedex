/**
 * 
 * @param {String} key 
 * @returns recupère du localstorage la clé saisi
 */
export function getFromLocalstorage(key) {
    const data = JSON.parse(JSON.parse(localStorage.getItem(key)));
    return data;
}

/**
 * 
 * @param {String} key clé de stockage
 * @param {String} data valeur à stocker dans le localstorage
 */
export function setToLocalstorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}