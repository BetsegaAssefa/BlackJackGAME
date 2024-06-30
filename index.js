var result;
var res;
var sum;
var firstNumber;
var secondNumber;
var isAlive = true
var messageEl =" Want to play a round?"
document.getElementById("message-el").innerHTML = messageEl
let value = prompt("How much money are you puuting in?")
let playerEl = {
    name: "Per",
    chips: value
}
document.getElementById("chips").innerHTML = playerEl.name + ": $" + playerEl.chips


function startGame(){
    document.getElementById("sum").innerHTML = "Sum: "
    document.getElementById("card").innerHTML = "Cards: "
    document.getElementById("btnnew").style.display = "inline"
    document.getElementById("message-el").innerHTML = messageEl  
    if(playerEl.chips>5){ 
    playerEl.chips -= 5
    document.getElementById("chips").innerHTML = playerEl.name + ": $" + playerEl.chips
    }else {
        prompt("Please insert Money!")
    }
     firstNumber = Math.floor(Math.random()*11) + 2
     secondNumber = Math.floor(Math.random()*11) + 2
     sum = firstNumber + secondNumber;
     res = sum
    if(sum <= 20) {
        result = "Do you want to draw a new card?"
    }else if(sum === 21) {
        result = "You've got Blackjack!"
        playerEl.chips += 5
    }else{
        result = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("message-el").innerHTML = result
    document.getElementById("sum").innerHTML += sum
    document.getElementById("card").innerHTML += firstNumber + "  " + secondNumber
    
    
}


function newCard() {
    let card = Math.floor(Math.random()*11) + 2;
    sum += card

if(sum>21) {
    document.getElementById("message-el").innerHTML = "You're out of the game!"
    document.getElementById("btnnew").style.display = "none"
} else if (sum === 21){
    document.getElementById("message-el".innerHTML) = "You've got Blackjack!"
    document.getElementById("btnnew").style.display = "none"
}else{
    document.getElementById("message-el").innerHTML = "Do you want to draw a new card?"
}

     document.getElementById("sum").innerHTML = "Sum: " + sum
    document.getElementById("card").innerHTML =  document.getElementById("card").innerHTML +" "+ card
}




