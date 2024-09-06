// 1
// const categories = document.querySelectorAll('#categories .item');
// console.log(`${categories.length}`);

// categories.forEach(category => {
//   const categoryTitle = category.querySelector('h2').textContent;

//   const categoryItems = category.querySelectorAll('ul li').length;
// });

// console.log(`Category: ${categoryTitle}`);
// console.log(`${categoryItems} elements`);

// 2
// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
//  ];

//  const potato = document.createElement('li');
//  potato.textContent = 'Картопля';
//  console.log(potato);

//  const mushroom = document.createElement('li');
//  mushroom.textContent = 'Гриби';
//  console.log(mushroom);

//  const garlik = document.createElement('li');
//  garlik.textContent = 'Часник';
//  console.log(garlik);

//  const tomato = document.createElement('li');
//  tomato.textContent = 'Помідори';
//  console.log(tomato);

//  const greenen = document.createElement('li');
//  greenen.textContent = 'Зелень';
//  console.log(greenen);

//  const added = document.createElement('li');
//  added.textContent = 'Приправи';
//  console.log(added);




document.addEventListener('keydown' (event) =>{
  const counterValue = document.getElementById('value');
  const step = '1';
  if (event.key === ''){
    counterValue = `${step}`;
  }
})