let displayValue = '0';
let a = 0;
let b = 0;
let operator = '';
let shouldClearDisplay = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator,a,b){
  switch(operator){
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return null;
  }
}

function updateDisplay(value){
  if(shouldClearDisplay){
    displayValue = value;
    shouldClearDisplay = false; // 重置为 false
  }else{
    if(displayValue === '0'){
      displayValue = value;
    }else{
      displayValue += value;
    }
  }
  document.getElementById('display-value').textContent = displayValue;
}

function clearDisplay(){
  displayValue = '0';
  document.getElementById('display-value').textContent = displayValue;
}

function inputDecimal(){
  if(!displayValue.includes('.')){
    displayValue += '.';
    document.getElementById('display-value').textContent = displayValue;
  }
}

function deleteLastDigit(){
  displayValue = displayValue.slice(0,-1);
  if(displayValue === ''){
    displayValue = '0';
  }
  document.getElementById('display-value').textContent = displayValue;
}

function handleOperator(nextOperator){
  const inputValue = parseFloat(displayValue);
  if(operator && operator !== '='){
    b = inputValue;
    const result = operate(operator,a,b);
    if(result !== null && !isNaN(result)){
      displayValue = `${result}`;
    }else{
      displayValue = 'Error';
    }
    document.getElementById('display-value').textContent = displayValue;
    a = result;
  }else{
    a = inputValue;
  }

  if(nextOperator === '='){
    operator = null;
  }else{
    operator = nextOperator;
  }

  shouldClearDisplay = true; // 设置为 true
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = '#ddd';
  });
  button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '';
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '';
  });
});




