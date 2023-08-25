export const getRowNumber = (row: string): number => parseInt(row);
export const getColumnNumber = (row: string): number => row.charCodeAt(0) - 97;
