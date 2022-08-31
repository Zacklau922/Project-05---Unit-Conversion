/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.innerHTML = `${baseValue} meter = ${baseValue * meterToFeet} feet`
    volumeEl.innerHTML = `${baseValue} liter = ${baseValue * literToGallon} gallon`
    massEl.innerHTML = `${baseValue} kilo = ${baseValue * kiloToPound} pound`
})