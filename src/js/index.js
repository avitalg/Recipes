import Search from './models/Search';
import * as searchView from './views/search';
import * as recipeView from './views/recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';
import List from './models/ShoppingList';
import '../styles/style.scss';

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput().value;
    console.log(query);
    if (query) {
        state.search = new Search(query);
        searchView.cleanInput();
        searchView.clearResults();
        renderLoader(elements.searchList);
        try {
            await state.search.getResults();
            clearLoader();
            searchView.renderResult(state.search.result);
        } catch (e) {
            console.log(e);
        }
    }
};

const constrolRecipe = (currItem) => {
    const currPage = parseInt(currItem.dataset.page);
    const currRes = parseInt(currItem.dataset.index);
    searchView.highlightSelected(currRes);
    const nres = parseInt(currItem.dataset.nres);
    const itemIndex = (nres * (currPage - 1) + currRes);
    console.log(state.search.result[itemIndex]);
    state.recipe = new Recipe(state.search.result[itemIndex]);
    console.log(state.recipe);
    recipeView.getRecipe(state.recipe.title, state.recipe.ingredients, state.recipe.img);
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.pageRes.addEventListener("click", e => {
    e.preventDefault();
    searchView.clearResults();
    const goTo = parseInt(e.target.dataset.goto);
    searchView.renderResult(state.search.result, goTo);
});

elements.searchList.addEventListener("click", (e) => {
    const currItem = e.target.closest('li');
    recipeView.clearRecipe();
    if (currItem) {
        constrolRecipe(currItem);
    }
});
