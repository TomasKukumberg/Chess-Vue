export const mapPieceName = (row: number, column: number): string => {
    /* Maps initial position on the chessboard to a specific piece. */
    if (row >=2 && row <= 5) {
        return 'empty';
    }
    if (row === 6 || row === 1) {
        return 'pawn';
    }
    if (column === 0 || column === 7) {
        return 'rook';
    }
    if (column === 1 || column === 6) {
        return 'knight';
    }
    if (column === 2 || column === 5) {
        return 'bishop';
    }
    if (column === 3) {
        return 'queen';
    }
    if (column === 4) {
        return 'king';
    }
    return 'error';
};

export const mapPieceColors = (row: number, column: number): string => {
    /* Maps initial colors of pieces. */
    if (row === 0 || row === 1) return 'white';
    if (row === 6 || row === 7) return 'black';
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
export const getColumnNumber = (row: string): number => row.charCodeAt(0) - 97;
