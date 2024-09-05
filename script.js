const categories = document.querySelectorAll('#categories .item');
console.log(`${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;

  const categoryItems = category.querySelectorAll('ul li').length;
});

console.log(`Category: ${categoryTitle}`);
console.log(`${categoryItems} elements`);

