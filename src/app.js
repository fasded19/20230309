let baseInput = document.querySelector('#base');
let heightInput = document.querySelector('#height');
let areaInput = document.querySelector('#area');
let calcInput = document.querySelector('#clac');
calcButton.addEventListener('click',(){
    workInput();
});
function workInpiut(){
    let base = baseInput.value;
    let height = Number(heightInput.value);
    let area = calcTrianleArea(base, height);
};
function calcTrianleArea(base, height){
    return base*height/2
};
console.log(baseInput)