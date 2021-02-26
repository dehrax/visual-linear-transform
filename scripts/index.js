let matrixInput = document.querySelectorAll("input");


matrixInput.forEach((input)=>{
	input.oninput = matrixUpdate;
});

//Run first time
matrixUpdate();

function matrixUpdate(e){
//Write more generalized version, which updates a CSS class instead
let transformEl = document.getElementById("container");

let matrixString = [];

matrixInput.forEach((input, i) => {
	matrixString[i] = input.value;
});
//*-1 for the "wrong" kind of coordinate system

transformEl.style.transform = `matrix(${matrixString[0]},${matrixString[2]*-1},${matrixString[1]*-1},${matrixString[3]},0,0)`;
}