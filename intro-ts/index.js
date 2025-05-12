import { unique, groupBy, sumBy } from './arrayUtils.js';

console.log('🔹 Função unique:');
// Remove duplicatas de números
console.log(unique([1, 2, 2, 3, 1])); // [1, 2, 3]
// Remove duplicatas de strings
console.log(unique(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']


console.log('\n🔹 Função groupBy:');
const frutas = [
  { nome: 'Maçã', tipo: 'Doce' },
  { nome: 'Limão', tipo: 'Ácido' },
  { nome: 'Banana', tipo: 'Doce' }
];
console.log(groupBy(frutas, 'tipo'));
// Resultado esperado: { Doce: [...], Ácido: [...] }

const pessoas = [
  { nome: 'Ana', sexo: 'F' },
  { nome: 'João', sexo: 'M' },
  { nome: 'Maria', sexo: 'F' }
];
console.log(groupBy(pessoas, 'sexo'));
// Resultado esperado: { F: [...], M: [...] }

console.log('\n🔹 Função sumBy:');
const compras = [
  { item: 'Arroz', preco: 10 },
  { item: 'Feijão', preco: 7 },
  { item: 'Leite', preco: 5 }
];
console.log(sumBy(compras, 'preco')); // 22

const vendas = [
  { produto: 'Camiseta', total: 50 },
  { produto: 'Boné', total: 20 },
  { produto: 'Calça', total: 80 }
];
console.log(sumBy(vendas, 'total')); // 150
