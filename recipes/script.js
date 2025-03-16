import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return `<ul class="recipe__tags">${tags.map(tag => `<li>${tag}</li>`).join('')}</ul>`;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? '<span aria-hidden="true" class="icon-star">⭐</span>' 
                            : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const outputElement = document.querySelector('main');
    outputElement.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

document.querySelector('.search-form').addEventListener('submit', searchHandler);

function searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('.search-form input').value.toLowerCase();
    console.log('Search Query:', query)
    const filtered = filterRecipes(query);
    console.log('Filtered Recipes:', filtered);
    renderRecipes(filtered);
}

function filterRecipes(query) {
  
    const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));

    console.log('Filtered Recipes:', filtered);
    return filtered;
}

init();
