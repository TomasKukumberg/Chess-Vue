<template>
    <div class='tile' @click='handleClick'
        :class="[tileColor === 'white' ? 'white-tile' : 'black-tile', clicked ? 'clicked' : '', highlighted ? 'highlighted' : '']">
        <ChessPiece :row='props.row' :column='props.column' />
    </div>
</template>

<script lang='ts' setup>

import { computed } from 'vue';

import { getRowNumber, getColumnNumber } from '../composables/utils';
import ChessPiece from './ChessPiece.vue';
import { useChessStore } from '../stores/chess'

const props = defineProps(['row', 'column']);
const chessStore = useChessStore();

const rowNumber = computed(() => getRowNumber(props.row));
const columnNumber = computed(() => getColumnNumber(props.column));
const position = computed(() => ({ x: columnNumber.value, y: rowNumber.value }));
const tileValue = computed(() => rowNumber.value + columnNumber.value);
const tileColor = computed(() => tileValue.value % 2 === 0 ? 'black' : 'white');
const clicked = computed(() => chessStore.isChosen(position.value));
const highlighted = computed(() => chessStore.isHighlighted(position.value));

const handleClick = () => {
    if (chessStore.canMove(position.value)) {
        chessStore.choose(position.value);
        chessStore.highlightMoves(position.value);
    }
}

</script>

<style scoped>
.tile {
    width: 12.5%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.black-tile {
    background-color: rgb(208, 139, 70);
}

.white-tile {
    background-color: rgb(254, 207, 158);
}

.clicked {
    border: 3px solid yellow;
}

.highlighted {
    border: 3px solid lightblue;
}
</style>