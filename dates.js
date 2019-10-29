const week8 = new Date(2019, 9, 28);
var e = new Date(2019, 9, 29);
var date = new Date()
//today.setHours(0,0,0,0)
date.setUTCHours(6)

console.log(date)
console.log(week8)
if( date >= week8 && date <= week8.setDate(week8.getDate() + 2) && date <= week8.setUTCHours(22) ) {
    console.log('made it ')
    console.log(week8)
}

// console.log('d')
// console.log(d)
// d.setUTCHours(today.getUTCHours())

// console.log(d)

// if(d >= today  && today <= d.setDate(d.getDate() + 2) && today <= d.setUTCHours(22)  ){
//     console.log('true')
//     console.log(d)
// }else (console.log(d))

// if(today == '2019-10-27T06:00:00.000Z'){
//     console.log('dates are equl')
//     console.log(d)

// }