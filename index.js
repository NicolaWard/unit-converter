let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const metreToFeet =  3.281
const litreToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    // Length conversion
    const metre = (baseValue / metreToFeet).toFixed(3);
    const feet = (baseValue * metreToFeet).toFixed(3);
    lengthEl.textContent = `${baseValue} metres = ${feet} feet | ${baseValue} feet = ${metre} metres`;
  

    // Volume conversion
    const litres = (baseValue / litreToGallon).toFixed(3);
    const gallons = (baseValue * litreToGallon).toFixed(3);
    volumeEl.textContent = `${baseValue} litres = ${gallons} gallons | ${baseValue} gallons = ${litres} litres  `;

    // Mass conversion
    const pounds = (baseValue * kiloToPound).toFixed(3);
    const kilograms = (baseValue / kiloToPound).toFixed(3);
    massEl.textContent = `${baseValue} kilos = ${pounds} pounds | ${baseValue} pounds = ${kilograms}`;
    
    
})

// Reset input value to 0 on focus
inputEl.addEventListener("focus", function () {
    inputEl.value = 0;
});

