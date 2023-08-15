export const mapPieceName = (row: number, column: number): string => {
    /* Maps initial position on the chessboard to a specific piece. */
    if (row >=3 && row <= 6) {
        return 'empty';
    }
    if (row === 7 || row === 2) {
        return 'pawn';
    }
    if (column === 1 || column === 8) {
        return 'rook';
    }
    if (column === 2 || column === 7) {
        return 'knight';
    }
    if (column === 3 || column === 6) {
        return 'bishop';
    }
    if (column === 4) {
        return 'queen';
    }
    if (column === 5) {
        return 'king';
    }
    return 'error';
};

export const mapPieceColors = (row: number, column: number): string => {
    /* Maps initial colors of pieces. */
    if (row === 1 || row === 2) return 'white';
    if (row === 7 || row === 8) return 'black';
    return 'none'; 
}

const whitePieceToHtml = {
    /* Maps white piece name to image, which is a HTML entity. */
    'empty': '',
    'king': '&#9812;',
    'queen': '&#9813;',
    'rook': '&#9814;',
    'bishop': '&#9815;',
    'knight': '&#9816;',
    'pawn': '&#9817;'
};

const blackPieceToHtml = {
    /* Maps black piece name to image, which is a HTML entity. */
    'empty': '',
    'king': '&#9818;',
    'queen': '&#9819;',
    'rook': '&#9820;',
    'bishop': '&#9821;',
    'knight': '&#9822;',
    'pawn': '&#9823;'
};

export const pieceToHtml = (piece: any, color: string): string => color === 'white' ? whitePieceToHtml[piece] : blackPieceToHtml[piece];

export const getRowNumber = (row: string): number => parseInt(row);
//export const getColumnNumber = (row: string): number => row.charCodeAt(0) - 96;
export const getColumnNumber = (row: string): number => {
    return row.charCodeAt(0) - 96;
};