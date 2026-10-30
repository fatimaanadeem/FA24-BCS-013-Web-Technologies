const grid      = document.getElementById('productGrid');
const searchBox = document.getElementById('searchBox');
const sortBtn   = document.getElementById('sortBtn');
const message   = document.getElementById('noResults');
const radios    = document.querySelectorAll('input[name="category"]');
const cards     = Array.from(grid.querySelectorAll('.product-item'));

const PREMIUM_LIMIT = 13 * 100;   // N x 100, N = 13 -> Rs. 1300
let ascending = true;             // direction of the NEXT sort click



function getName(card) {
  return card.querySelector('.product-name').textContent.toLowerCase();
}

function getPrice(card) {
 
  const text = card.querySelector('.card-body p').textContent;
  return parseInt(text.replace(/[^0-9]/g, ''), 10);
}

function getSelectedCategory() {
  // the radio ids are: all, tops, bottoms, outerwear, accessories
  return document.querySelector('input[name="category"]:checked').id;
}



function applyFilters() {
  const text = searchBox.value.trim().toLowerCase();
  const category = getSelectedCategory();
  let visibleCount = 0;

  cards.forEach(function (card) {
    const nameMatches = getName(card).includes(text);
    const categoryMatches = (category === 'all') || (card.dataset.category === category);

    card.classList.toggle('d-none', !nameMatches);

    if (nameMatches && categoryMatches) {
      visibleCount++;
    }
  });

  if (visibleCount === 0) {
    message.classList.remove('d-none');
    grid.classList.add('d-none');
  } else {
    message.classList.add('d-none');
    grid.classList.remove('d-none');
  }
}

searchBox.addEventListener('input', applyFilters);

radios.forEach(function (radio) {
  radio.addEventListener('change', applyFilters);
});



sortBtn.addEventListener('click', function () {
  const sorted = Array.from(grid.querySelectorAll('.product-item'));

  sorted.sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });

  sorted.forEach(function (card) {
    grid.appendChild(card);
  });

  sortBtn.textContent = ascending ? 'Sort by price (low to high)'
                                  : 'Sort by price (high to low)';
  ascending = !ascending;
});



cards.forEach(function (card) {
  if (getPrice(card) > PREMIUM_LIMIT) {
    const label = document.createElement('span');
    label.className = 'premium-label';
    label.textContent = 'Premium';
    card.querySelector('.card-body').prepend(label);
  }
});