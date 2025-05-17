// Remove duplicatas de um array simples
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
    
// Agrupa objetos por uma chave string
export const groupBy = <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> =>
      arr.reduce((acc, obj) => {
        const k = String(obj[key]);
        acc[k] = acc[k] || [];
        acc[k].push(obj);
        return acc;
}, {} as Record<string, T[]>);
    
  
// Soma valores de uma chave numérica
export const sumBy = <T>(arr: T[], key: keyof T): number =>
    arr.reduce((total, obj) => total + (Number(obj[key]) || 0), 0);
    