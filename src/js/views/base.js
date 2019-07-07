export const elements = {
    searchInput: document.querySelector('.search_field'),
    searchForm: document.querySelector('.search_form'),
    searchList: document.querySelector('.search_list'),
    searchResults: document.querySelector('.results'),
    pageRes: document.querySelector('.results_pages'),
    selectedRecipe: document.querySelector('.selected_recipe'),
    shoppingList: document.querySelector('.shopping-list')
};

export const elementStrings = {
    loader: "loader"
}

export const renderLoader = parent => {
    const loader = `<div class="${elementStrings.loader}">
        </div>`;

    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}