// Remove duplicatas de um array simples
export function unique(arr: any[]): any[] {
    return [...new Set(arr)];
  }
  
  // Agrupa objetos por uma chave string
  export function groupBy(arr: any[], key: string): Record<string, any[]> {
    return arr.reduce((acc, obj) => {
      const groupKey = obj[key];
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(obj);
      return acc;
    }, {} as Record<string, any[]>);
  }
  
  // Soma valores de uma chave numérica
  export function sumBy(arr: any[], key: string): number {
    return arr.reduce((total, obj) => {
      const value = obj[key];
     total + (typeof value === 'number' ? value : 0);
    }, 0);
  }
  