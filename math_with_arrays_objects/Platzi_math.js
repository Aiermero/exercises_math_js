/*function of average */
function average (list){
    const addition = list.reduce((a,b) => a + b)
    return addition/list.length
}
/*funtion of median */
function median (list){
    /* put in order the data */
    const orderedArray = list.sort((a,b) => a - b)
    /* if it is an even array */
    if(list.length % 2 == 0){
        const num1 = orderedArray.length/2
        const num2 = (orderedArray.length/2)-1
        return  orderedArray[num1] + orderedArray[num2]
    }
    /* if it is an odd array */
    else {
        const middleNum = Math.floor(orderedArray.length/2)
        return list[middleNum]
    }
}