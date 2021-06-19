const getItem = (key) => {
    const stringifiedItem = localStorage.getItem(key);
    const item = stringifiedItem && JSON.parse(stringifiedItem);
    return item;
}

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export default {getItem, setItem}
