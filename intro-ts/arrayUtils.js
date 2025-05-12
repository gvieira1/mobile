// Retorna um novo array com valores únicos (sem repetições)
export const unique = arr => [...new Set(arr)];

// Agrupa objetos de um array com base em uma chave
export const groupBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    (acc[obj[key]] = acc[obj[key]] || []).push(obj);
    return acc;
  }, {});

// Soma os valores de uma chave específica em um array de objetos
export const sumBy = (arr, key) =>
  arr.reduce((total, obj) => total + (obj[key] ?? 0), 0);
