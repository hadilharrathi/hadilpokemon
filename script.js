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

// Show categories when the Kategorien button is clicked
const kategorienBtn = document.getElementById('kategorienBtn');
const categoriesSection = document.getElementById('categoriesSection');

kategorienBtn.addEventListener('click', function() {
    categoriesSection.style.display = 'block'; // Show the categories section
});

// Add event listeners for each category button
document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const type = this.innerText.trim();  // No .toLowerCase(), keep the case as it is
        filterByType(type);  // Call the filter function
    });
});

// Show all cards again when the Startseite button is clicked
const startseiteBtn = document.querySelector('a[href="#"]:not(#kontaktBtn)');  // "Startseite" button
startseiteBtn.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent page reload

    // Show all Pokémon cards
    const allPokemons = document.querySelectorAll('.pokemon-card');
    allPokemons.forEach(pokemon => pokemon.style.display = 'block');  // Show all cards

    // Hide the category section again when Startseite is clicked
    categoriesSection.style.display = 'none';
});

// Get all sections for contact
const contactFormSection = document.getElementById('contactFormSection');
const contactMapSection = document.getElementById('contactMapSection');
const faqSection = document.getElementById('faqSection');

// Get the "Kontakt" button
const kontaktBtn = document.getElementById('kontaktBtn');

// Function to show the contact sections
function showContactSections() {
    contactFormSection.style.display = 'block';
    contactMapSection.style.display = 'block';
    faqSection.style.display = 'block';
}

// Function to hide the contact sections
function hideContactSections() {
    contactFormSection.style.display = 'none';
    contactMapSection.style.display = 'none';
    faqSection.style.display = 'none';
}

// When "Kontakt" button is clicked, show the contact sections
kontaktBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    hideOtherSections();   // Hide other sections (like Pokémon list)
    showContactSections(); // Show the contact form, map, and FAQ
});

// Additional function to hide other sections (like Pokémon list)
function hideOtherSections() {
    const pokemonList = document.querySelector('.pokemon-list');
    if (pokemonList) pokemonList.style.display = 'none'; // Hide Pokémon list
}

// Show all Pokémon (if needed)
function showPokemons() {
    const pokemonList = document.querySelector('.pokemon-list');
    if (pokemonList) pokemonList.style.display = 'block'; // Show Pokémon list
}
