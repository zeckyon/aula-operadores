// Exercício 1
// a) 

let tempK = (77 - 32)*(5/9) + 273.15;
console.log("77°F são " + tempK + "°K.")

// b)

let tempF = 80 * (9/5) + 32;
console.log("80°C são " + tempF + "°F.")

// c)

let tempF2 = 30 * (9/5) + 32;
let tempK2 = (tempF2 - 32)*(5/9) + 273.15
console.log("30°C são " + tempF2 + "°F e " + tempK2 + "°K.")

// d)

let tempC = parseFloat(prompt("Digite a temperatura em Celsius que deseja converter:"))
let tempF3 = tempC * (9/5) + 32;
let tempK3 = (tempF3 - 32)*(5/9) + 273.15
console.log(tempC + "°C" + " são " + tempF3 + "°F e " + tempK3 + "°K.")

// Exercício 2
// a)

let quantWatt = parseFloat(prompt("Digite quantos quilowatt-hora foram utilizados:"))
let custoEnergia = 0.05

valorConta = quantWatt * custoEnergia

console.log("A sua conta de energia foi R$" + valorConta + ".")

// b)

let quantWatt1 = parseFloat(prompt("Digite quantos quilowatt-hora foram utilizados:"))
let custoEnergia1 = 0.05

valorConta1 = quantWatt1 * custoEnergia1 * 0.85 

console.log("A sua conta de energia, com 15% de desconto, foi R$" + valorConta1 + ".")