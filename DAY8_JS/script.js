const pr = fetch('https://dummyjson.com/products');

pr.then((res) => {
  return res.json(); // added return statement here
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log("error occurred\n", err);
});


const main = document.getElementById('root');

function createUI(data) {
  const products = data.products;

  for (let i = 0; i < products.length; i++) {
    const newCard = document.createElement('div');
    newCard.innerHTML = `
      <div>
        <h3>${products[i].title}</h3>
        <img src="${products[i].thumbnail}" />
        <p>${products[i].price}</p>
      </div>
    `;
    main.appendChild(newCard);
  }
}

