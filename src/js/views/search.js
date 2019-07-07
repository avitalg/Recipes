import { elements } from './base';

export const getInput = () => elements.searchInput;

export const cleanInput = () => {
    elements.searchInput.value = "";
};

export const clearResults = () => {
    elements.searchList.innerHTML = "";
    elements.pageRes.innerHTML = "";
};

export const highlightSelected = id => {
    console.log(id);
    console.log("highlightSelected");
    const results = elements.searchList.querySelectorAll("li");
    results.forEach(el => {
        el.classList.remove("active");
    });

    elements.searchList.querySelector(`li[data-index='${id}']`).classList.add("active");
};

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(" ").reduce((acc, curr) => {
            if (acc + curr.length <= limit) {
                newTitle.push(curr);
            }
            return acc + curr.length;
        }, 0);
        return `${newTitle.join(" ")}...`;
    }
    return title;
};

const renderRecipe = (recipe, index, page, pageRes) => {
    const markup = `
    <li data-index = ${index} data-page=${page} data-nres=${pageRes}>
        <figure>
            <img src="${recipe.image}" alt="test"/>
        </figure>
        <div class="result_data">
            <h3 class="result-title">${limitRecipeTitle(recipe.label)}</h3>
            <a class="results_link" href="${recipe.url}" target="_blank">
                <p class="result-source">${recipe.source}</p>
            </a>
        </div>
        
    </li> `;
    elements.searchList.insertAdjacentHTML("beforeend", markup);
};

const createButton = (page, type) => {
    const nextPage = type === "prev" ? page - 1 : page + 1;
    console.log(nextPage);
    return `
    <button class="btn btn-${type}" data-goto=${nextPage}>Page ${nextPage}</button>
    `;

}

const renderButtons = (page, results, pageRes) => {
    const pages = Math.ceil(results.length / pageRes);
    console.log(`${pages}, ${results.length}, ${pageRes}`);
    let button;
    if (page === 1 && pages > 1) {
        button = createButton(page, 'next');
    } else if (page === pages && pages > 1) {
        button = `${createButton(page, 'prev')} ${createButton(page, 'next')}`;
    } else {
        button = createButton(page, 'prev');
    }
    elements.pageRes.insertAdjacentHTML('afterbegin', button);
};

export const renderResult = (recipes, page = 1, pageRes = 5) => {
    const start = (page - 1) * pageRes;
    const end = page * pageRes;
    const newRec = recipes.slice(start, end);
    console.log(recipes);
    newRec.forEach((item, index) => renderRecipe(item, index, page, pageRes));
    renderButtons(page, recipes, pageRes);
};
