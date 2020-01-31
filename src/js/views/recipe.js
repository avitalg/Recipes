import { elements } from './base';
import {getShoppingList} from './shoppingList';

export const clearRecipe = () => {
    elements.selectedRecipe.innerHTML = "";
    elements.shoppingList.innerHTML = "";
}

export const getRecipe = (title, ingredients, image) => {
    const recipe = `
    <div class="recipe-text">
        <h2>${title}</h2>
        <figure>
            <img src="${image}" alt="test"/>
        </figure>
        <div class="recipe-details">
            <h3>Ingredients</h3>
            <ol>
            ${ingredients.map((item, index) => `<li data-index=${index}>${item.text}</p>`).join('')}
            </ol>
        </div>
    </div>`;
    elements.selectedRecipe.insertAdjacentHTML("beforeend", recipe);
    elements.selectedRecipe.addEventListener("click", e => getShoppingList(ingredients));
};