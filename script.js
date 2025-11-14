//document.getElementById("form1").addEventListener("submit", converterMoeda);
let USD = 5.30;
let EUR = 6.16;
let CAD = 3.78;

document.getElementById("form1").onsubmit = converterMoeda;
function converterMoeda(event) 
{   event.preventDefault();
    let moeda = document.getElementById("valorEmReal").value;
    let Total = document.getElementById("TotalConvertido")

    if(document.getElementById("moedas").value == "EUR")
    {
        let moedaConvertidaEur = moeda * EUR;
        Total.innerHTML = "<h2>Valor convertido:</h2>" + "€ " + moedaConvertida.toFixed(2);
    }
    if(document.getElementById("moedas").value == "CAD")
    {
        let moedaConvertidaCad = moeda * CAD;
        Total.innerHTML = "<h2>Valor convertido:</h2>" + "CAD$ " + moedaConvertidaCad.toFixed(2);
    }
    if(document.getElementById("moedas").value == "USD")
    {   let moedaConvertidaUsd = moeda * USD;
        Total.innerHTML = "<h2>Valor convertido:</h2>" + "US$ " + moedaConvertidaUsd.toFixed(2);
    }
    
}



