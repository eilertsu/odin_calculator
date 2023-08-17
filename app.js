let result = false;
let firstNum = false;
let secondNum = false;
let operator = false;


function add(firstNum, secondNum) {
    result = firstNum + secondNum
    return result
} 

function subtract(firstNum, secondNum){
    result = firstNum - secondNum
    return result
}

function multiply(firstNum, secondNum){
    result = firstNum * secondNum
    return result
}

function divide(firstNum, secondNum){
    result = firstNum / secondNum
    return result
}

function operate(firstNum, operator, secondNum){
    if (operator == "+"){
        return add(firstNum, secondNum)
    }else if (operator == "-"){
        return subtract(firstNum, secondNum)
    }else if (operator == "*"){
        return multiply(firstNum, secondNum)
    }else if (operator == "/"){
        return divide(firstNum,secondNum)
    }else{
        return "ERROR"
    }
}