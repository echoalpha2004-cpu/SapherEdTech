const typeButtons = document.querySelectorAll('.type-buttons button');
const words = document.querySelectorAll('.word');
const description = document.getElementById('type-description');

const descriptions = {
  a: 'Type A description goes here.',
  b: 'Type B description goes here.',
  c: 'Type C description goes here.'
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
