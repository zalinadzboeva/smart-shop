
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
    {  height: 162, weights: 50, clothingsize:40  },
    {  height: 160, weights: 60, clothingsize: 38},
    {  height: 150, weights: 56, clothingsize:50 },
    {  height: 167, weights: 73, clothingsize:  42},
    {  height: 180, weights: 74, clothingsize:  44},
    {  height: 170, weights: 40, clothingsize: 38 },
    {  height: 161, weights: 43, clothingsize:  36},
    {  height: 158, weights: 37, clothingsize: 42 },
    {  height: 193, weights: 51, clothingsize: 44 },
    {  height: 200, weights: 52, clothingsize: 46 },
    {  height: 154, weights: 60, clothingsize: 52 },
    {  height: 155, weights: 49, clothingsize: 40 },
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
    

    for (let i = 1; i <= products.length; i++) {
        const card = createProductCard(products[i],i);
        ProductGrid.appendChild(card);
      };

function createProductCard(product,i) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = ` <img src="cotolog/${i}.jpg">
    <p>Рост: ${product.height} см
    <br>Вес: ${product.weights}<br>
    Размер: ${product.clothingsize}</p>`;
    return card;
}
