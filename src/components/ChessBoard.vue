<template>
    <div class='board'>
        <ChessRow :row='7 - index' v-for='(row, index) in board' :key="index" />
    </div>
</template>

<script lang='ts' setup>

import ChessRow from './ChessRow.vue';
import { useChessStore } from '../stores/chess'

const chess = useChessStore();
const board = chess.board;

</script>

<style scoped>
.board {
    width: 80vw;
    height: 80vw;
    max-width: 900px;
    max-height: 900px;
}
</style>