let bgColor = document.getElementById("bgColor");
let fontColor = document.getElementById("fontColor");
let fontSize = document.getElementById("fontSize");
let fontWeight = document.getElementById("fontWeight");
let paddingPixel = document.getElementById("paddingPixel");
let borderRadius = document.getElementById("borderRadius");
let customButton = document.getElementById("customButton");
function applyButton(){
    customButton.style.backgroundColor = bgColor.value;
    customButton.style.color = fontColor.value;
    customButton.style.fontSize = fontSize.value;
    customButton.style.fontWeight = fontWeight.value;
    customButton.style.padding = paddingPixel.value;
    customButton.style.borderRadius = borderRadius.value;
}