
let result = document.getElementById('result')
function plus(){
    let input = document.getElementById('input1')
   
    let input1 = document.getElementById('input2')
    result.innerHTML = parseInt(input1.value) + parseInt(input.value);
}
function multiply(){
    let input = document.getElementById('input1')
   
    let input1 = document.getElementById('input2')
    result.innerHTML = parseInt(input1.value) * parseInt(input.value);
}
function minus(){
    let input = document.getElementById("input1")
    let input1 = document.getElementById("input2")
    result.innerHTML = parseInt(input.value) - parseInt(input1.value)
}
function division(){
    let input = document.getElementById("input1")
    let input1 = document.getElementById("input2")
    result.innerHTML = parseInt(input.value) / parseInt(input1.value)
}