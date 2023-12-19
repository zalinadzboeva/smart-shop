let age = document.getElementById("age")
let username = document.getElementById("name")
let ves = document.getElementById("ves")
let rost = document.getElementById("rost")
let productGrid = document.getElementById("card")
console.log(productGrid)
let user={
    Age:0,
    Name:"",
    Ves:0,
    Rost:0,
}
let SentBtn = document.getElementById("sentdata")

SentBtn.onclick = function(){
    user.Age=age.value
    user.Name=username.value
    user.Rost=rost.value
    user.Ves=ves.value
    console.log(user)
    localStorage.setItem('User', JSON.stringify(user))
}
const profile = JSON.parse(localStorage.getItem('User'));
console.log(profile)

