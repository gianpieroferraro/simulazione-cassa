let displayValue = "";
      
function updateDisplay(value) {
    displayValue += value;
    document.querySelector("#display").innerHTML = displayValue;
}

function calculate() {
    const result = eval(displayValue);
    document.querySelector("#display").innerHTML = result;
    displayValue = result;
}

function clearDisplay() {
    displayValue = "";
    document.querySelector("#display").innerHTML = displayValue;
}

function randomPrice() {
    esitoResto.innerHTML = "";  
    const prices = [12.70, 9.45, 19.90, 4.99, 24.43, 1.50, 2.52, 70.89, 120.24, 67.10];
    const randomIndex = Math.floor(Math.random() * prices.length);
    document.querySelector("#displayprodotto").innerHTML = prices[randomIndex];
}


let dispResto = document.querySelector("#displayresto");
let display = document.querySelector("#display");
let displayProdotto = document.querySelector("#displayprodotto");

let banconote = document.querySelectorAll(".banconote")
let resetBanc = document.querySelectorAll("#resetBanc")
let esitoResto = document.querySelector("#esitoResto")

let sum = 0;
let restoSum = 0;
for(let i =0; i<banconote.length; i++) {
    
    banconote[i].addEventListener("click", function() {
        let aggiornamento = banconote[i].value;
        sum += parseFloat(aggiornamento);
        
        dispResto.innerHTML = Math.round(parseFloat(sum) * 100) / 100;;

        
        //-- finire di fare la somma con il display centrale
        
        // console.log(sum);
        // console.log(displayProdotto.innerHTML);
        // console.log(parseFloat(displayProdotto.innerHTML) + parseFloat(sum));
        // console.log(display.innerHTML);
        restoSum = parseFloat(displayProdotto.innerHTML) + Math.round(parseFloat(sum) * 100) / 100;

        console.log(parseFloat(restoSum));
        
        document.querySelector("#vaiButt").addEventListener("click", function() {
            // console.log(typeof restoSum)
            // console.log(typeof display.innerHTML)
            if(restoSum ==  parseFloat(display.innerHTML)) {
                esitoResto.innerHTML = "RESTO DATO CORRETTAMENTE";
                console.log("funziona")
            }else {
                esitoResto.innerHTML = "Il resto dato non è corretto";
                reset();
                exit;
            }
        })
    })
    
}


function again() {
    location.reload();
}

function reset() {
    dispResto.innerHTML = 0;
    sum = 0;
}



//--> funzione per riprodurre il suono della cassa quando viene cliccato il pulsante relativo
var button = document.getElementById("openCassa");
var audio = document.getElementById("myAudio");

button.addEventListener("click", function() {
  audio.play();
});


let sfondoCassa = document.querySelector("#sfondoCassa");


function apriCassa() {
    if(sfondoCassa.style.left === "-9px") {

        sfondoCassa.style.left = "-572px";
    }else {
        sfondoCassa.style.left = "-9px";

    }
}