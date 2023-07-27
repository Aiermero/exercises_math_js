
const BotonConsola = document.querySelector('.boton-consola')
/* Select from html */
const netIncomes = document.querySelector('.ingresos-netos')
const netOutcomes = document.querySelector('.gastos-netos')
const actualDept = document.querySelector('.deuda-actual')
const netNewDept = document.querySelector('.prestamo')
const months = document.querySelector('.meses-diferir')
const interest = document.querySelector('.porcentaje') 
const netIncomeButton = document.querySelector('.ingreso-disponible')
const netIncome = document.querySelector('.ingreso-actual')
const totalInterest = document.querySelector('.deuda-total')
const interestCalButton = document.querySelector('.calcular-deuda')

/* Events */
netIncomeButton.addEventListener('click', actualIncome)
interestCalButton.addEventListener('click', netDeptCalculator)

/*Calculation from input*/
let netIncomeCal = 0
let totalNewDeptCal = 0
let totalInterestCal = 0
/* function from inputs */

function actualIncome(){
    const income = Number(netIncomes.value)
    const outcome = Number(netOutcomes.value)
    const dept = Number(actualDept.value)
    netIncomeCal = income - (outcome + dept)
    return  netIncome.textContent = netIncomeCal
}

function netDeptCalculator (){
    const netNewDeptValue = Number(netNewDept.value)
    const monthsValue = Number(months.value)
    const interestValue = Number(interest.value)
    totalInterestCal = (netNewDeptValue * (interestValue * monthsValue))/100
    totalNewDeptCal = totalInterestCal + netNewDeptValue
    return totalInterest.textContent = totalNewDeptCal
}
const newDeptPerMonth = 50

BotonConsola.addEventListener('click', consolaLog)

function consolaLog(){
    const netIncomesValues = Number(netIncomes.value)
    console.log(netIncomesValues)
}


function deptCalculator(){

}