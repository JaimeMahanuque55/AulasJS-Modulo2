///// Declarando uma funcao ///////////

// function gravidade() {
//   console.log('A gravidade do planeta e: ');
//   console.log(9.8);
// }

// gravidade(); // usando a funcao

///////// Passando parametros em funcoes ////////

// function somar(n1, n2) {
//   let resultado = n1 + n2;
//   console.log('Resultado: '+ resultado);
// }

// somar(10, 15);

// function nomeCompleto(nome, sobrenome) {
//   console.log(`${nome} ${sobrenome}`);
// }

// nomeCompleto("Jaime", "Mahanuque");


////////////// Retorno da funcao ///////////

// function nomeCompleto(nome, sobrenome) {

//   return `${nome} ${sobrenome}`
// }

// let completo = nomeCompleto("Jaime", "Mahanuque");
// console.log('Nome completo: '+ completo)

////// Funcao com retorno condicional /////////

// function maiorDeIdade(idade) {
//   if(idade >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let idade = 5
// let verificacao = maiorDeIdade(idade);
// // console.log(verificacao);

// if (verificacao) {
//   console.log('E maior de idade')
// } else {
//   console.log('E menor de idade');
// }


////////// Exercicio de funcoes #4 ////////////
/* 
Calcule a porcentagem entre 2 numeros.
exemplo: 25% de 40 e 10
*/

// function calcPct(n1, n2) {

//   return (n2 / n1) * 100;
// }

// let x = 30;
// let y = 10;
// let pct = calcPct(x, y);
// console.log(`${pct}% de ${x} e ${y}`)

///////// exercicio de funcoes #5 //////////////

/* Calcule o preco do imovel */

// function calcularImovel(metragem, quartos) {
//   let m2 = 3000;
//   let preco = 0;

//   switch(quartos) {
//     case 1:
//     default:
//       preco = metragem * m2
//       break;
//     case 2:
//       preco = metragem * (m2 * 1.2)
//       break;
//     case 3:
//       preco = metragem * (m2 * 1.5)
//       break;
//   }
//   return preco;
// }

// let metragem = 2;
// let quartos = 1;
// let preco = calcularImovel(metragem, quartos);
// console.log(`A casa custa mtn ${preco}`)

/////// exercicios de funcoes #6 ///////////////

// function validar (usuario, senha) {

//   if(usuario === 'pedro' && senha === '1234') {
//     return true;
//   } else {
//     return false;
//   }

// }

// let usuario = 'pedro';
// let senha = '124';

// let validacao = validar(usuario, senha);

// if(validacao) {
//   console.log('Acesso concedido')
// } else {
//   console.log('Acesso negado')
// }


////////// Arrow Function //////////////////

// const somar = (x, y) => {

//   return x + y;
// }

// console.log(10, 5);

// const somar = (x, y) => x+y;

// console.log(somar(10, 5))

// const sobrenome = sob => 'Jaime ' + sob;

// console.log(sobrenome('Mahanuque'));

////////// Variaveis dentro de funcoes //////////////////

// let count = 0;
// function add() {
//   // let count = 1; Funciona apenas dentro da funcao

//   count++;
//   return count;
// }

// add();
// add();

// console.log(count);

// // let resultado = add();

// // console.log(resultado)

// // console.log(count)

//////// Funcoes dentro de funcoes ///////////////



// function addSquares(a, b) {

//   // function square(x) {
//   //   return x * x;
//   // }
//   // const square = (x) => x * x
//   const square = (x) => {
//     return x * x;
//   }

//   let sqrA = square(a)
//   let sqrB = square(b)
//   return sqrA + sqrB;
// }

// console.log(addSquares(2, 2));

////////// Introducao a Array //////////////

// let colors = ['blue', 'red', 'green'];
// let idades = [10, 20, 30];

// let lista = ['algo', 30, 'blabla', true]
// let nomes = ['Jaime', 'pedro', 'silva'];

// let lista = ['blabla', nomes];

// let lista2 = ['blabla', ['xx', 'yy']]
// console.log(lista2[1][1]);

// let segundo = lista2[1];
// console.log(segundo[1])

//////// Operacoes basicas de array //////////////////

// length = Tamanho do array
// push = Para adicionar um item novo no array
// pop = remove o ultimo item do array
// shift = remove o primeiro item do array





// let ingredientesBolo = [
//   'agua',
//   'farinha',
//   'ovo',
//   'corante',
//   'sal'
// ]
// // ingredientesBolo.push('cebola')
// // ingredientesBolo.pop()
// ingredientesBolo.shift()

// console.log(ingredientesBolo)


// console.log(`Total de ingredientes: ${ingredientesBolo.length}`);

/////////// Exercicio de array #7 ////////////

// 1. No array, qual o numero que pega a ferrari?

let carros = ['BMW', 'Ferrari', 'Mercedes'];

let x = 1;

console.log('1. '+ carros[x]);

// 2. Troque a Ferrari por Audi.
carros[1] = 'Audi'
console.log('2. Lista com Audi: ');
console.log(carros);

// 3. Adiciona o volvo a lista
carros.push('Volvo')
console.log('3. Lista com Volvo: ');
console.log(carros);

// 4. Exiba quantos itens tem no array

console.log('4. Itens no arry : '+carros.length)


