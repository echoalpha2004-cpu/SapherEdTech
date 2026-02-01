// Grab DOM elements
const typeButtons = document.querySelectorAll('.type-buttons button');
const wordButtons = document.querySelectorAll(".word-btn"); // make sure your word buttons have class "word-btn"
const descriptionEl = document.getElementById('typeDescription'); // make sure your <p> has this id
const searchInput = document.getElementById("wordSearch");

// Descriptions for types
const typeDescriptions = {
  a: 'The primary stress of the word falls on the first syllable. Both syllables are read at equally short length',
  b: 'The primary stress of the word falls on the second syllable. The consonant with two vowels is read at double the length of short length',
  c: 'The primary stress of the word falls on the second syllable. Both syllables are read at equally short length'
};

// Current type filter
let currentTypeFilter = "all";

// Word button click: goes to word.html?word=...
wordButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const word = btn.dataset.word; // make sure each word button has data-word="Pikke" etc.
    window.location.href = `word.html?word=${encodeURIComponent(word)}`;
  });
});

// Type button click: filter words and show description
typeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentTypeFilter = btn.dataset.type;

    // Active button styling
    typeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update description (clear if 'all')
    descriptionEl.textContent = currentTypeFilter === "all" ? "" : typeDescriptions[currentTypeFilter] || "";

    // Update word display
    updateWordDisplay();
  });
});

// Search input: filter words as user types
searchInput.addEventListener("input", updateWordDisplay);

// Function to filter words based on type + search query
function updateWordDisplay() {
  const query = searchInput.value.toLowerCase();

  wordButtons.forEach(btn => {
    const wordText = btn.textContent.toLowerCase();
    const typeMatch = currentTypeFilter === "all" || btn.dataset.type === currentTypeFilter;
    const searchMatch = wordText.includes(query);

    if (typeMatch && searchMatch) {
      btn.style.display = "inline-block";
    } else {
      btn.style.display = "none";
    }
  });
}

// Initialize: show all words
updateWordDisplay();
