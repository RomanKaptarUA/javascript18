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

// 3

const images = [
  {
   url:
    'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'White and Black Long Fur Cat',
  },
  {
   url:
    'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
   url:
    'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'Group of Horses Running',
  },
 ];

 const gallery = document.getElementById('gallery');
gallery.insertAdjacentHTML("afterbegin", '<li> https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 </li>');










// 4
// let counterValue = 0;


// const valueSpan = document.getElementById('value');


// function increment() {
//     counterValue += 1;
//     update();
// }


// function decrement() {
//     counterValue -= 1;
//     update();
// }


// function update() {
//     valueSpan.textContent = counterValue;
// }


// const decrementButton = document.querySelector('button[data-action="decrement"]');
// const incrementButton = document.querySelector('button[data-action="increment"]');

// decrementButton.addEventListener('click', decrement);
// incrementButton.addEventListener('click', increment);