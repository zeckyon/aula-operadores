// Exercício

let nome = prompt("Digite o seu nome:")

let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let nota3 = parseFloat(prompt("Digite a terceira nota:"))

notaFinal = (nota1 + nota2 + nota3) / 3

if (notaFinal >= 6){
    alert("Parabéns " + nome + ", você passou!")
} else {
    alert("Infelizmente " + nome + ", você foi reprovado!")
}

  