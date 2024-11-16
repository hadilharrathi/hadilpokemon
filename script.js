
// script.js

// Function to filter Pokémon by type
function filterByType(type) {
    // Get all Pokémon cards
    const allPokemons = document.querySelectorAll('.pokemon-card');

    // Hide all Pokémon
    allPokemons.forEach(pokemon => pokemon.style.display = 'none');

    // Show only the Pokémon that match the selected type
    const filteredPokemons = document.querySelectorAll(`.pokemon-card.${type}`);
    filteredPokemons.forEach(pokemon => pokemon.style.display = 'block');
}

// Add event listeners for each category button
document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const type = this.innerText.toLowerCase();  // Get the category type in lowercase (e.g., "fire")
        filterByType(type);  // Call the filter function
    });
});