import { ref, type Ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { CHESS_PIECES } from '@/composables/chess_pieces'
import { type Position } from '@/interfaces/chess'

export const useChessStore = defineStore('chess', () => {

    const getInitPiece = (x: number, y: number): string => {
        /* Maps initial position on the chessboard to a specific piece. */
        const isBlackPiece = y > 5;

        if (y >= 2 && y <= 5) return '';
        if (y === 6 || y === 1) return isBlackPiece ? CHESS_PIECES.BLACK_PAWN : CHESS_PIECES.WHITE_PAWN;
        if (x === 0 || x === 7) return isBlackPiece ? CHESS_PIECES.BLACK_ROOK : CHESS_PIECES.WHITE_ROOK;
        if (x === 1 || x === 6) return isBlackPiece ? CHESS_PIECES.BLACK_KNIGHT : CHESS_PIECES.WHITE_KNIGHT;
        if (x === 2 || x === 5) return isBlackPiece ? CHESS_PIECES.BLACK_BISHOP : CHESS_PIECES.WHITE_BISHOP;
        if (x === 3) return isBlackPiece ? CHESS_PIECES.BLACK_QUEEN : CHESS_PIECES.WHITE_QUEEN;
        if (x === 4) return isBlackPiece ? CHESS_PIECES.BLACK_KING : CHESS_PIECES.WHITE_KING;
        return CHESS_PIECES.ERROR;
    }

    const getInitColor = (x: number, y: number): string => {
        if (y > 5) return 'black';
        if (y < 2) return 'white';
        return 'none';
    }

    const currentPlayer = ref('white');

    const board = ref(Array.from({ length: 8 }, (rowValue, rowIndex) =>
        Array.from({ length: 8 }, (columnValue, columnIndex) => ({
            x: columnIndex,
            y: rowIndex,
            piece: getInitPiece(columnIndex, rowIndex),
            pieceColor: getInitColor(columnIndex, rowIndex),
            chosen: false,
            highlighted: false
        }))
    ));

    const move = (oldX: number, oldY: number, newX: number, newY: number, piece: string): void => {
        board.value[oldY][oldX].piece = '';
        board.value[newY][newX].piece = piece;
    }

    const choose = ({ x, y }: Position): void => {

        for (const [rowIndex, rowItem] of board.value.entries()) {
            for (const [columnIndex, columnItem] of rowItem.entries()) {
                if (x === columnIndex && y === rowIndex && board.value[rowIndex][columnIndex].chosen) {
                    board.value[rowIndex][columnIndex].chosen = false;
                    unhighlightMoves({ x: columnIndex, y: rowIndex });
                }
                else if (x === columnIndex && y === rowIndex) {
                    board.value[rowIndex][columnIndex].chosen = true;
                } else {
                    board.value[rowIndex][columnIndex].chosen = false;
                }
            }
        }
    }

    const canMove = ({ x, y }: Position): boolean => {
        return (board.value[y][x].pieceColor !== 'none') && (board.value[y][x].pieceColor === currentPlayer.value);
    }

    const selectedPiece = ({ x, y }: Position) => board.value[y][x].piece !== '';

    const isChosen = ({ x, y }: Position): boolean => {
        return board.value[y][x].chosen;
    }

    const isHighlighted = ({ x, y }: Position): boolean => {
        return board.value[y][x].highlighted;
    }

    const getPieceColor = ({ x, y }: Position): string => {
        return board.value[y][x].pieceColor;
    }

    const getPiece = ({ x, y }: Position): string => board.value[y][x].piece;

    const highlightMoves = ({ x, y }: Position): void => {
        board.value[y + 1][x].highlighted = true;
    }

    const unhighlightMoves = ({ x, y }: Position): void => {
        board.value[y + 1][x].highlighted = false;
    }

    return {
        board, move, choose,
        isChosen, getPiece, getPieceColor,
        highlightMoves, isHighlighted, selectedPiece,
        currentPlayer, canMove
    }
})
