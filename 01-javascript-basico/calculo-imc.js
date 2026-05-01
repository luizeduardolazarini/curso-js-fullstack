const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura); 
let anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Tem ${altura}m de altura e seu IMC é de ${imc.toFixed(2)}`); // .toFixed(2) limita as casas decimais
console.log(`${nome} nasceu em ${anoNascimento}.`);