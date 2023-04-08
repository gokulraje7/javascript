const calculator = document.querySelector('.calculator-grid')
const keys = calculator.querySelectorAll('button')
const currentOperand = document.querySelector('.current-operand')
const previousOperand = document.querySelector('.first-operand')
var operator = ''
//looking for key press
keys.forEach(key => {
    key.addEventListener('click',() => {

        const action = key.dataset.action
        //checking for number or operator
        if(action){
            if(action ==="decimal" && !currentOperand.innerText.includes('.')){
                currentOperand.innerText += "."

            }
            else if(action === "allclear" || action === "delete"){
                if(action === "delete"){
                    currentOperand.innerText = currentOperand.innerText.slice(0,-1)
                }else{
                    currentOperand.innerText = ''
                    previousOperand.innerText = ''
                }
            }
            else if(action === "divide" || action === "multiply" || action === "subtract" || action === "add"){
                if(currentOperand.innerText !== '' && previousOperand.innerText === ''){
                    operator = action
                    currentOperand.innerText += ` ${key.innerText}`
                    previousOperand.innerText = currentOperand.innerText
                    currentOperand.innerText =''

                }
                if(currentOperand.innerText === '' && previousOperand.innerText !== ''){
                    if(!previousOperand.innerText.includes(key.innerText)){
                        previousOperand.innerText = previousOperand.innerText.slice(0,-2)
                        previousOperand.innerText += ` ${key.innerText}`
                    }
                }
                //running total
                if(currentOperand.innerText !== '' && previousOperand !== ''){
                    calculate(previousOperand,currentOperand)
                    currentOperand.innerText += ` ${key.innerText}`
                    previousOperand.innerText = currentOperand.innerText
                    currentOperand.innerText =''
                }
            }
            else if(action === 'calculate'){
                if(currentOperand.innerText !== '' && previousOperand !== ''){
                    calculate(previousOperand,currentOperand)
                }

            }
        }
        else{
            currentOperand.innerText += key.innerText
        }
        
    });
});

function calculate(n1,n2){
    let operation = previousOperand.innerText.slice(-1)
    let result
    n1 = parseFloat(previousOperand.innerText.slice(0,-2))
    n2 = parseFloat(currentOperand.innerText)
    switch(operation){
        case '÷':
            result = n1/n2
            break;
        case '*':
            result = n1 * n2
            break;
        case '-':
            result = n1 - n2
            break;
        case '+':
            result = n1 + n2
            break;
    }
    currentOperand.innerText = result
    previousOperand.innerText = ''
    operator = ''
}