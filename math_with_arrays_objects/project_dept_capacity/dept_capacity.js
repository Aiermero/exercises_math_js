/* Select from html */
const netIncomes = document.querySelector('.ingresos-netos')
const netOutcomes = document.querySelector('.gastos-netos')
const actualDept = document.querySelector('.deuda-actual')
const netNewDept = document.querySelector('.prestamo')
const months = document.querySelector('.meses-diferir')
const interest = document.querySelector('.porcentaje') 
const netIncomeButton = document.querySelector('.ingreso-disponible-calcular')
const netIncomeDiv = document.querySelector('.cuadro-ingresos')
const netDeptDiv = document.querySelector('.cuadro-deuda')
const cuadroCalc = document.querySelector('.cuadro-calculo')
const interestCalButton = document.querySelector('.calcular-deuda')
const retunrBtn = document.querySelector('.return')
const incomeAval = document.querySelector('.ingreso-disponible-num')

/*Calculation from input*/
let netIncomeCal = 0
let totalNewDeptCal = 0
let totalInterestCal = 0
let monthlyPay = 0

/* Events */
netIncomeButton.addEventListener('click', actualIncome)
interestCalButton.addEventListener('click', netDeptCalculator)
retunrBtn.addEventListener('click', returnButton)
/* function from inputs */

function actualIncome(){
    let income = Number(netIncomes.value)
    let outcome = Number(netOutcomes.value)
    let dept = Number(actualDept.value)
    netIncomeCal = income - (outcome + dept)
    incomeAval.textContent = netIncomeCal
    netDeptDiv.classList.toggle('inactive')
    netIncomeDiv.classList.toggle('inactive')
}

function netDeptCalculator (){
    let netNewDeptValue = Number(netNewDept.value)
    let monthsValue = Number(months.value)
    let interestValue = Number(interest.value)
    totalInterestCal = (netNewDeptValue * (interestValue * monthsValue))/100
    totalNewDeptCal = totalInterestCal + netNewDeptValue
    monthlyPay = (totalNewDeptCal/monthsValue).toFixed(2)
    const deptCapacity = (netIncomeCal * 30)/100

    if ( monthlyPay > deptCapacity ) {
        const parrafoConsejoNo =  document.createElement('p')
        parrafoConsejoNo.classList.add('consejo-no')
        parrafoConsejoNo.textContent = 'Tu deuda sería de ' + monthlyPay +' mensuales. No es recomendable endeudarte de esa manera debido a que es mayor que ' + deptCapacity + ', mas alto del 30% de tus ingresos netos.'
        netDeptDiv.appendChild(parrafoConsejoNo)
    }else {
        const parrafoConsejoSi =  document.createElement('p')
        parrafoConsejoSi.classList.add('consejo-si')
        parrafoConsejoSi.textContent = 'Tu deuda sería de ' + monthlyPay +' mensuales. Es menor a' + deptCapacity + ', tu 30% de ingresos netos. Financieramente estas apto para adquirir tu deuda'
        netDeptDiv.appendChild(parrafoConsejoSi)
    }
}
function returnButton(){
    netDeptDiv.classList.toggle('inactive')
    netIncomeDiv.classList.toggle('inactive')
}