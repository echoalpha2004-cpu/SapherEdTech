const typeButtons = document.querySelectorAll('.type-buttons button');
const words = document.querySelectorAll('.word');
const description = document.getElementById('type-description');

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
