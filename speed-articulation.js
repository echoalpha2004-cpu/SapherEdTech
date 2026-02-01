document.addEventListener("DOMContentLoaded", () => {

  const typeButtons = document.querySelectorAll(".type-btn");
  const wordButtons = document.querySelectorAll(".word-btn"); // your word buttons
  const descriptionEl = document.getElementById("typeDescription");
  const searchInput = document.getElementById("wordSearch");

  let currentTypeFilter = "all";

  const typeDescriptions = {
    a: "The primary stress of the word falls on the first syllable. Both syllables are read at equally short length",
    b: "The primary stress of the word falls on the second syllable. The consonant with two vowels is read at double the length of short length",
    c: "The primary stress of the word falls on the second syllable. Both syllables are read at equally short length"
  };

  // Type button click
  typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentTypeFilter = btn.dataset.type;

      // Highlight active button
      typeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Update description
      descriptionEl.textContent = currentTypeFilter === "all" ? "" : typeDescriptions[currentTypeFilter];

      // Update displayed words
      updateWordDisplay();
    });
  });

  // Search input
  searchInput.addEventListener("input", updateWordDisplay);

  // Word click -> open word.html
  wordButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const word = btn.dataset.word;
      window.location.href = `word.html?word=${encodeURIComponent(word)}`;
    });
  });

  // Filter words based on type + search
  function updateWordDisplay() {
    const query = searchInput.value.toLowerCase();

    wordButtons.forEach(btn => {
      const wordText = btn.dataset.word.toLowerCase();
      const typeMatch = currentTypeFilter === "all" || btn.dataset.type === currentTypeFilter;
      const searchMatch = wordText.includes(query);

      btn.style.display = typeMatch && searchMatch ? "inline-block" : "none";
    });
  }

  // Initially show all words
  updateWordDisplay();

});
