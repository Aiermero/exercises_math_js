/*function of average */
function average (list){
    const addition = list.reduce((a,b) => a + b)
    return addition/list.length
}