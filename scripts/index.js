let object = document.getElementById("object");

//console.log(object);
//let x, y, z;
/*
let xEl = document.querySelector('#x');
let yEl = document.querySelector('#y');
let zEl = document.querySelector('#z');

*/
let matrixInput = document.querySelectorAll("input");

console.log(matrixInput);

matrixInput.forEach((input)=>{
	input.oninput = matrixUpdate;
});

/*
xEl.oninput = matrixUpdate;
yEl.oninput = matrixUpdate;
zEl.oninput = matrixUpdate;
*/
//Run first time
matrixUpdate();

function matrixUpdate(e){

let matrixString = [];

matrixInput.forEach((input, i) => {
	matrixString[i] = input.value;
});
//*-1 for the "wrong" kind of coordinate system
object.setAttribute('style', `transform:matrix(${matrixString[0]},${matrixString[1]*-1},${matrixString[2]},${matrixString[3]},0,0)`);
  
}