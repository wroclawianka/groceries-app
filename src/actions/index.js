export const selectCategory = (category) => {
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    }
};