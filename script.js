console.log('1 დავალება')

let number = +prompt('enter year')

if ((number % 4 == 0) && number % 100 != 0) {
  console.log('leap year')
}
else if (number % 400 == 0) {
  console.log('leap year')
}
else {
  console.log('not leap year')
}



console.log('2 დავალება')

let number1 = +prompt('enter number 1')
let number2 = +prompt('enter number 2')
let number3 = +prompt('enter number 3')

if (number1 % 2 ==0 || number2 % 2 ==0 || number3 % 2 ==0) {
  console.log('ერთი რიცხვი მაინც იყოფა 2-ზე')
} else {
  console.log('არც ერთი რიცხვი არ იყოფა 2-ზე')
}

if (number1 % 3 ==0 || number2 % 3 ==0 || number3 % 3 ==0) {
  console.log('ერთი რიცხვი მაინც იყოფა 3-ზე')
} else {
  console.log('არც ერთი რიცხვი არ იყოფა 3-ზე')
}



console.log('3 დავალება')
console.log('for')

let number4 = +prompt('enter number')

for (let i = 1; i < number4; i++ ) {
  console.log(Math.pow(i, 2))
}


console.log('while')

let number5 = +prompt('enter number')

let i = 1
while (i < number5) {
  console.log(Math.pow(i, 2))
  i++
}



console.log('4 დავალება')
console.log('for')

for (let i = 100; i < 100000; i++) {
  if (i % 123 === 0)
  console.log(i)
}


console.log('while')

let k = 100
while (k < 100000) {
  if (k % 123 === 0)
  console.log(k)
  k++
}



console.log('5 დავალება')

let number6 = +prompt('enter number')
if (number6 > 9) {
  console.log (lastdigit = number6 % 10)
}

else {
  console.log('შეყვანილი რიცხვი არასწორია')
}
