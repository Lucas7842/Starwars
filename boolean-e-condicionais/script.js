/*var possuiGraduacao = false;
var possuiDoutorado = true;
if(possuiGraduacao){
  console.log('É verdadeiro');
  var x = 10;
}else if(possuiDoutorado){
  console.log('Possui Doutorado');
}else{
  console.log('Não possui nada');
}


var nome = '10kg' / 10;
 if(nome){
  console.log(nome);
 }else{
  console.log('Nome não existe');
 }
 if(!possuiGraduacao){
  console.log(possuiGraduacao);
  console.log('Não possui graduação');
 }

 var x = 10;
 
 console.log(x!==11)

 if((5-5) && (5+5)) {
  console.log('Verdadeiro')

 }else{
  console.log('Falso')
 }

 var condicional = (5 - 10) && (5 + 5)
  if(condicional){
    console.log('Verdadeiro', condicional);
  }else{
    console.log('Falso');
  }
  var condicional2 = (5-5) || (5+5) || (10-2);
    console.log(condicional2);

var corFavorita ='Rosa';
switch(corFavorita){
  case "Amarelo":
    console.log('Olhe para o céu');
    break;
  case 'Laranja':
    console.log('Olhe para o sol')
    break;
  case 'Verde':
    console.log('Olhe para as floresta')
    break;
    default:
      console.log('Fechs os olhos')
}*/


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 29;
var idadeIrmao = 29;
if(minhaIdade > idadeIrmao){
  console.log('É maior');
}else if(minhaIdade === idadeIrmao){
  console.log('É igual');
}else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china){
  console.log('Brasil tem mais habitantes')
}else{
  console.log('Brsil tem menos habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
 