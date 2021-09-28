const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(CurrentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let CurrentNumber = '0'

const inputNumber = (number) => {
   if (CurrentNumber === '0'){
       CurrentNumber= number
   } else {
     CurrentNumber += number
   }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=> {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) =>{
    if (calculationOperator ===''){
    prevNumber = CurrentNumber
    }
    calculationOperator = operator
    CurrentNumber='0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',() => {
    calculate ()
    updateScreen(CurrentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (CurrentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (CurrentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (CurrentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (CurrentNumber)
            break
        default:
            return
    }
    CurrentNumber = result
    calculationOperator = ''
}

const clearAll= () => {
    prevNumber=''
    calculationOperator=''
    CurrentNumber='0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(CurrentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(CurrentNumber)
})

inputDecimal = (dot) => {
    if(CurrentNumber.includes('.')) {
        return
    }
    CurrentNumber += dot
}