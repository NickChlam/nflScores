const one = [9,6,8,4,2,10,15,1]
const two = [25, 4, 15, 8, 77, 66, 5 ,22]

const match = one.filter(element => two.includes(element));
    
console.log(match)
