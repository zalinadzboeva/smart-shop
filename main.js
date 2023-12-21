
let clothingsize = document.getElementById("clothingsize")
let username = document.getElementById("name")
let weights = document.getElementById("ves")
let height = document.getElementById("rost")
let productGrid = document.getElementById("card")
console.log(productGrid)
let user={
    Age:0,
    Name:"",
    Ves:0,
    Rost:0,
}
let SentBtn = document.getElementById("sentdata")

let products = [
    { name: "Товар 1", height: 162, weights: 50, clothingsize:40  },
    { name: "Товар 2", height: 160, weights: 60, clothingsize: 38},
    { name: "Товар 3", height: 150, weights: 56, clothingsize:50 },
    { name: "Товар 4", height: 167, weights: 73, clothingsize:  42},
    { name: "Товар 5", height: 180, weights: 74, clothingsize:  44},
    { name: "Товар 6", height: 170, weights: 40, clothingsize: 38 },
    { name: "Товар 7", height: 161, weights: 43, clothingsize:  36},
    { name: "Товар 8", height: 158, weights: 37, clothingsize: 42 },
    { name: "Товар 9", height: 193, weights: 51, clothingsize: 44 },
    { name: "Товар 10", height: 200, weights: 52, clothingsize: 46 },
    { name: "Товар 11", height: 154, weights: 60, clothingsize: 52 },
    { name: "Товар 12", height: 155, weights: 49, clothingsize: 40 },
];

SentBtn.onclick = function(){
    user.lothingSize=clothingsize.value
    user.Name=username.value
    user.Rost=height.value
    user.Ves=weights.value
    console.log(user)
    localStorage.setItem('User', JSON.stringify(user))
}
const profile = JSON.parse(localStorage.getItem('User'));
console.log(profile)

    const ProductGrid = document.getElementById("productGrid");
    
    products.forEach(product => {
        const card = createProductCard(product);
        ProductGrid.appendChild(card);
    });
    for (let i = 0; i < products.length; i++) {
        const card = createProductCard(product,i);
        ProductGrid.appendChild(card);
      };

function createProductCard(product,i) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `    <img src="cotolog/${i}.jpg">${product.name}</h3>
    <p>Рост: ${product.height} см
    <br>Вес: ${product.weights}<br>
    Размер: ${product.clothingsize}</p>`;
    return card;
}
