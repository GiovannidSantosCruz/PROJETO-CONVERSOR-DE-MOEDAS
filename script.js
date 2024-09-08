const http = new XMLHttpRequest()

http.open("GET", "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL")
http.send()
let dolarToday = 0
let euroToday = 0
let libraToday = 0
let bitcoinToday = 0
http.onload = () => {
   const result = JSON.parse(http.response)
   dolarToday = result.USDBRL.bid
   euroToday = result.EURBRL.bid
   libraToday = result.GBPBRL.bid
   bitcoinToday = result.BTCBRL.bid

}

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")

   

   if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format( inputCurrencyValue / dolarToday )
   }

   if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format( inputCurrencyValue / euroToday)
   }

   if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format( inputCurrencyValue / libraToday )
   }

   if (currencySelect.value == "bitcoin") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue /bitcoinToday )
   }

   
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)
}


 function changeCurrency(){
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.getElementById("currency-img")
      
   if(currencySelect.value == "dolar"){
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src ="./assets/dolar.png"
}

   if(currencySelect.value == "euro"){
      currencyName.innerHTML = "Euro europeu"
      currencyImage.src ="./assets/euro.png"
   }

   if(currencySelect.value == "libra"){
      currencyName.innerHTML = "Libra esterlina"
      currencyImage.src ="./assets/libra.png"
   }

   if(currencySelect.value == "bitcoin"){
      currencyName.innerHTML = "Bitcoin"
      currencyImage.src ="./assets/bitcoin.png"
   }


   convertValues()
}

currencySelect.addEventListener("change", changeCurrency)   
convertButton.addEventListener("click", convertValues)