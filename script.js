window.onload=function(){

const titleScreen=document.getElementById("titleScreen")
const instructionScreen=document.getElementById("instructionScreen")
const gameScreen=document.getElementById("gameScreen")

const startBtn=document.getElementById("startBtn")
const instructionBtn=document.getElementById("instructionBtn")

const customerImage=document.getElementById("customerImage")
const characterName=document.getElementById("characterName")
const orderBubble=document.getElementById("orderBubble")

const gameButtons=document.getElementById("gameButtons")
const serveBtn=document.getElementById("serveBtn")
const rejectBtn=document.getElementById("rejectBtn")

const streakText=document.getElementById("streak")

/* REAL CUSTOMERS */

const realCustomers=[

{image:"customer1.png",name:"ZingZingZingbah"},
{image:"customer2.png",name:"BabyBoo"},
{image:"customer3.png",name:"Jabber"},
{image:"customer4.png",name:"CaseOh"},
{image:"customer5.png",name:"Jade"},
{image:"customer6.png",name:"Sea Lion"},
{image:"customer7.png",name:"Art"},
{image:"customer8.png",name:"James Doakes"},
{image:"customer9.png",name:"Guy Pointing at Himself"},
{image:"customer10.png",name:"Abby Lee Miller"}

]

/* IMPOSTERS */

const fakeCustomers=[

{image:"imposter1.png",name:"Boo-Ha-Ha"},
{image:"imposter2.png",name:"Jade"},
{image:"imposter3.png",name:"CaseOzempic"},
{image:"imposter4.png",name:"Aby Le Miler"},
{image:"imposter5.png",name:"Bweep"}

]

/* REAL MENU */

const realOrders=[

"Burger",
"French Fries",
"Pancakes",
"Milkshake",
"Cherry Pie",
"Banana Split",
"Mozzarella Sticks",
"Omlette",
"Water",
"Sweet Tea",
"Chicken Tenders",
"Hashbrowns",
"Salad"

]

/* FAKE ORDERS */

const fakeOrders=[

"Spaghetti",
"Taco",
"Pizza"

]

let score=0
let streak=0
let mistakes=0

let currentCustomerIsImposter=false
let currentOrderIsFake=false

startBtn.onclick=function(){

titleScreen.style.display="none"
instructionScreen.style.display="flex"

}

instructionBtn.onclick=function(){

instructionScreen.style.display="none"
gameScreen.style.display="flex"

startRound()

}

/* SERVE */

serveBtn.onclick=function(){

const wrong=currentCustomerIsImposter||currentOrderIsFake

if(wrong){

streak=0
mistakes++

}else{

score++
streak++

}

updateScore()
checkGameOver()

}

/* REJECT */

rejectBtn.onclick=function(){

const wrong=!(currentCustomerIsImposter||currentOrderIsFake)

if(wrong){

streak=0
mistakes++

}else{

score++
streak++

}

updateScore()
checkGameOver()

}

function updateScore(){

streakText.textContent="Score: "+score+" | Streak: "+streak+" | Mistakes: "+mistakes+"/3"

}

function randomChoice(array){

return array[Math.floor(Math.random()*array.length)]

}

function startRound(){

orderBubble.style.display="none"
gameButtons.style.display="none"

/* PICK ROUND TYPE */

const roundType=Math.floor(Math.random()*4)

let chosenCustomer
let chosenOrder

currentCustomerIsImposter=false
currentOrderIsFake=false

if(roundType===0){

chosenCustomer=randomChoice(realCustomers)
chosenOrder=randomChoice(realOrders)

}

else if(roundType===1){

chosenCustomer=randomChoice(fakeCustomers)
chosenOrder=randomChoice(realOrders)

currentCustomerIsImposter=true

}

else if(roundType===2){

chosenCustomer=randomChoice(realCustomers)
chosenOrder=randomChoice(fakeOrders)

currentOrderIsFake=true

}

else{

chosenCustomer=randomChoice(fakeCustomers)
chosenOrder=randomChoice(fakeOrders)

currentCustomerIsImposter=true
currentOrderIsFake=true

}

/* UPDATE CHARACTER */

characterName.textContent=chosenCustomer.name

customerImage.classList.remove("walkIn")

customerImage.src="images/"+chosenCustomer.image

void customerImage.offsetWidth

customerImage.classList.add("walkIn")

/* SHOW ORDER */

setTimeout(function(){

orderBubble.textContent="I'd like "+chosenOrder+"."

orderBubble.style.display="block"

gameButtons.style.display="block"

},1600)

}

/* GAME OVER */

function checkGameOver(){

if(mistakes>=3){

gameScreen.innerHTML="YOU WERE EXPOSED<br><br>Final Score: "+score

}else{

startRound()

}

}

}
