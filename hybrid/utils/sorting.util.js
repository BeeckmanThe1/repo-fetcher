export const getCaretIcon = sortDirection => {
    const base = 'fas fa-caret';
    switch (sortDirection) {
        case 'asc':
            return `${base}-up`;
        case 'desc':
            return `${base}-down`;
        default:
            return `${base}-right`;
    }
}

export const sortArrayOfObjects = (arrayToBeSorted = [], ordering = {}) => {
    const orderKeys = Object.keys(ordering);

    let sortedArray = arrayToBeSorted && [...arrayToBeSorted];

    const sortArrayOnObjectKey = key => sortedArray?.sort((repo1, repo2) => {
        const orderDirection = ordering[key];
        if (orderDirection === 'asc') {
            return repo1?.[key] >= repo2?.[key] ? 1 : -1;
        } else if (orderDirection === 'desc') {
            return repo1?.[key] >= repo2?.[key] ? -1 : 1;
        }
    });

    for (let i = 0; i < orderKeys.length; i++) {
        const currentKey = orderKeys[i];
        sortedArray = sortArrayOnObjectKey(currentKey);
    }

    return sortedArray || arrayToBeSorted || [];
};
