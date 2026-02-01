const typeButtons = document.querySelectorAll('.type-buttons button');
const words = document.querySelectorAll('.word');
const description = document.getElementById('type-description');

const wordButtons = document.querySelectorAll(".word-btn");

wordButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const word = btn.dataset.word; // make sure each button has data-word="Pikke" etc.
    window.location.href = `word.html?word=${encodeURIComponent(word)}`;
  });
});


const descriptions = {
  a: 'The primary stress of the word falls on the first syllable. Both syllables are read at equally short length',
  b: 'The primary stress of the word falls on the second syllable. The consonant with two vowels is read at double the length of short length',
  c: 'The primary stress of the word falls on the second syllable. Both syllables are read at equally short length'
};

typeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;

    // active button styling
    typeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // description
    description.innerHTML = `<p>${descriptions[type]}</p>`;

    // filtering
    words.forEach(word => {
      word.classList.toggle(
        'hidden',
        word.dataset.type !== type
      );
    });
  });
});

const searchInput = document.getElementById("wordSearch");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  wordButtons.forEach(wordBtn => {
    const word = wordBtn.textContent.toLowerCase();
    if (word.includes(query)) {
      wordBtn.style.display = "inline-block"; // show matches
    } else {
      wordBtn.style.display = "none";         // hide non-matches
    }
  });
});

let currentTypeFilter = "all";

typeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentTypeFilter = btn.dataset.type;
    updateWordDisplay();
  });
});

searchInput.addEventListener("input", updateWordDisplay);

function updateWordDisplay() {
  const query = searchInput.value.toLowerCase();

  wordButtons.forEach(wordBtn => {
    const word = wordBtn.textContent.toLowerCase();
    const typeMatch = currentTypeFilter === "all" || wordBtn.dataset.type === currentTypeFilter;
    const queryMatch = word.includes(query);

    if (typeMatch && queryMatch) {
      wordBtn.style.display = "inline-block";
    } else {
      wordBtn.style.display = "none";
    }
  });
}

