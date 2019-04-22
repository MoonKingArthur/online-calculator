var windowVal = document.getElementById('calc-display-val');
var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var isNewNum = true;
var decimalUsed = false;
var num1 = null;
var num2;
var operator;

windowVal.value = '0';
console.log(calcNumBtns);

//Update window value with numbers
document.getElementById("calc-zero").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '0';
                return;
        }
        else{
                windowVal.value += '0';
        }
});

document.getElementById("calc-one").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '1';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '1';
        }
});

document.getElementById("calc-two").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '2';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '2';
        }
});

document.getElementById("calc-three").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '3';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '3';
        }
});

document.getElementById("calc-four").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '4';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '4';
        }
});

document.getElementById("calc-five").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '5';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '5';
        }
});

document.getElementById("calc-six").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '6';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '6';
        }
});

document.getElementById("calc-seven").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '7';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '7';
        }
});

document.getElementById("calc-eight").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '8';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '8';
        }
});

document.getElementById("calc-nine").addEventListener("click", function(){
        if (isNewNum == true){
                windowVal.value = '9';
                isNewNum = false;
                return;
        }
        else{
                windowVal.value += '9';
        }
});

document.getElementById("calc-decimal").addEventListener("click", function(){
        if (decimalUsed == false){
                windowVal.value += '.';
                decimalUsed = true;
                isNewNum = false;
        }
});

document.getElementById("calc-add").addEventListener("click", function(){
        if (num1 == null){
                num1 = Number(windowVal.value);
        }
        else{
                num1 += Number(windowVal.value);
        }
        console.log(num1);
        operator = '+';
        isNewNum = true;
});

document.getElementById("calc-subtract").addEventListener("click", function(){
        if (num1 == null){
                num1 = Number(windowVal.value);
        }
        else{
                num1 += Number(windowVal.value);
        }
        console.log(num1);
        operator = '-';
        isNewNum = true;
});

document.getElementById("calc-divide").addEventListener("click", function(){
        if (num1 == null){
                num1 = Number(windowVal.value);
        }
        else{
                num1 += Number(windowVal.value);
        }
        console.log(num1);
        operator = '/';
        isNewNum = true;
});

document.getElementById("calc-multiply").addEventListener("click", function(){
        if (num1 == null){
                num1 = Number(windowVal.value);
        }
        else{
                num1 += Number(windowVal.value);
        }
        console.log(num1);
        operator = '*';
        isNewNum = true;
});

document.getElementById("calc-clear").addEventListener("click", function(){
        windowVal.value = 0;
        num1 = null;
        num2 = null;
        isNewNum = true;
});

document.getElementById("calc-equals").addEventListener("click", function(){
        num2 = Number(windowVal.value);
        switch(operator){
                case '+':
                        windowVal.value = num1 + num2;
                        break;
                case '-':
                        windowVal.value = num1 - num2;
                        break;
                case '*':
                        windowVal.value = num1 * num2;
                        break;
                case '/':
                        if (num2 == 0){
                                windowVal.value = "No dividing by 0. Try again!";
                                break;
                        }
                        windowVal.value = num1 / num2;
                        break;
        }
        num1 = null;
        isNewNum = true;
});