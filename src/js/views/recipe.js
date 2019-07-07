import { elements } from './base';
import {getShoppingList} from './shoppingList';

export const clearRecipe = () => {
    elements.selectedRecipe.innerHTML = "";
    elements.shoppingList.innerHTML = "";
}

export const getRecipe = (title, ingredients, image) => {
    const recipe = `
    <div class="recipe-text">
        <figure>
            <img src="${image}" alt="test"/>
        </figure>
        <h2>${title}</h2>
        <div>
            <h3>Ingredients</h3>
            ${ingredients.map((item, index) => `<p data-index=${index}>${item.text}</p>`).join('')}
        </div>
    </div>`;
    elements.selectedRecipe.insertAdjacentHTML("beforeend", recipe);
    elements.selectedRecipe.addEventListener("click", e => getShoppingList(ingredients));
};