import { elements } from './base';

export const clearShoppingList = () => {
    elements.shoppingList.innerHTML = "";
}

export const getShoppingList = (ingredients) => {
    clearShoppingList();
    const shoppingList = `
    <div class="ingredient-text">${ingredients.map(item => `<div><input type="number" min=0 value="${getQuantity(item.quantity)}"/>${getUnit(item.measure)}<span>${item.food}</span></div>`).join('')}</div>`;
    elements.shoppingList.insertAdjacentHTML("beforeend", shoppingList);
}

const getQuantity = (quantity) => {
    const qnum = parseFloat(quantity);
    if (!Number.isInteger(qnum)) {
        quantity = qnum.toFixed(2);
    }
    return quantity;
}

const getUnit = (measure) => {
    return measure ? `<span>${measure} </span>` : "";
}