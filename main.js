document.addEventListener("DOMContentLoaded", function() {
    makeCard();
});
let SentBtn = document.getElementById("sentdata")
let throwOff = document.getElementById("throwOff")
let clothingsize = document.getElementById("clothingsize")
let username = document.getElementById("name")
let weights = document.getElementById("ves")
let height = document.getElementById("rost")
let productGrid = document.getElementById("card")
const filterProducts= document.getElementById("filterProducts")

let user={
    Name:"",
    weights:0,
    height:0,
    clothingsize:0,
}
let products = [
    {name:"платье",height: 162, weights: 50, clothingsize:40  },
    {name:"брюки",height: 160, weights: 60, clothingsize: 38},
    {name:"топ",height: 150, weights: 56, clothingsize:50 },
    {name:"лонг",height: 167, weights: 73, clothingsize:  42},
    {name:"джинсы",height: 180, weights: 74, clothingsize:  44},
    {name:"платье",height: 170, weights: 40, clothingsize: 38 },
    {name:"брюки",height: 161, weights: 43, clothingsize:  36},
    {name:"джинсы",height: 158, weights: 37, clothingsize: 42 },
    {name:"джинсы",height: 193, weights: 51, clothingsize: 44 },
    {name:"носки",height: 200, weights: 52, clothingsize: 46 },
    {name:"свитер",height: 154, weights: 60, clothingsize: 52 },
    {name:"юбка",height: 155, weights: 49, clothingsize: 40 },
];
 function UserQuestionnaire () {
    document.querySelector(".user").style.display = "flex";
    
    SentBtn.onclick = function(){
        user.Name=username.value
        user.height=height.value
        user.weights=weights.value
        user.clothingsize=clothingsize.value
        localStorage.setItem('User', JSON.stringify(user))
        document.querySelector(".user").style.display = "none";
    }
  };


const profile = JSON.parse(localStorage.getItem('User'));
    console.log("2")


let ProductGrid = document.getElementById("productGrid");

function makeCard(){
    for (let i = 1; i < products.length; i++) {
        const card = createProductCard(products[i],i);
        ProductGrid.appendChild(card);
    };
}

function createProductCard(product,i) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
   <img src="cotolog/photo_${i}.jpg">
    <p>${product.name} <br>
    <p>Рост: ${product.height} см
    <br>Вес: ${product.weights}<br>
    Размер: ${product.clothingsize}</p>`;
    return card;
}
function deleteGrid (){
    
}

 filterProducts.onclick=function(){
    const profile = JSON.parse(localStorage.getItem('User'));
    console.log("4")
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";
    console.log("gg")
    for (let i = 1; i < products.length; i++) {
        if(products[i].height==profile.height &&products[i].weights==profile.weights && products[i].clothingsize==profile.clothingsize){
            const card = createProductCard(products[i],i);
            ProductGrid.appendChild(card);
        }
    };
    if(productGrid.textContent=="")
    {
        productGrid.innerHTML= `<p>Извините ${profile.Name} не найдено товаров</p>`
    }
 }
 let productSearch = document.getElementById("productSearch")
 productSearch.onclick= function(){
    const productName = document.getElementById("productName").value
    const profile = JSON.parse(localStorage.getItem('User'));
    console.log("4")
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";
    for (let i = 1; i < products.length; i++) {
        if(products[i].name==productName){
            const card = createProductCard(products[i],i);
            ProductGrid.appendChild(card);
        }
    };
    if(productGrid.textContent=="")
    {
        productGrid.innerHTML= `<p>Извините ${profile.Name} не найдено товаров</p>`
    }
 } 
 
 throwOff.onclick= function(){
    const profile = JSON.parse(localStorage.getItem('User'));
    console.log("4")
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";
    makeCard();
 }