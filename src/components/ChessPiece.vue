<template>
    <p class='piece' :class="[pieceColor === 'white' ? 'white-piece' : pieceColor === 'black' ? 'black-piece' : '' ]" v-html='piece'></p>
</template>

<script lang='ts' setup>

import {computed} from 'vue';

import { getRowNumber, getColumnNumber } from '../composables/utils';
import {useChessStore} from '../stores/chess'


const props = defineProps(['row', 'column']);
const chessStore = useChessStore();

const rowNumber = computed(() => getRowNumber(props.row));
const columnNumber = computed(() => getColumnNumber(props.column));
const position = computed(() => ({x: columnNumber.value, y: rowNumber.value}));
const piece = computed(() => chessStore.getPiece(position.value));
const pieceColor = computed(() => chessStore.getPieceColor(position.value));

</script>

<style scoped>

.piece {
    font-size: 120%
}

.white-piece {
    color: white;
}

.black-piece {
    color: black;
}

</style>