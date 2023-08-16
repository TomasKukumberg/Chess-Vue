<template>
    <div class='tile' :class="{'white-tile': tileColor === 'white', 'black-tile': tileColor === 'black'}">
        <ChessPiece :row='props.row' :column='props.column' />
    </div>
</template>

<script lang='ts' setup>

import { computed } from 'vue';

import { getRowNumber, getColumnNumber } from '../composables/utils';
import ChessPiece from './ChessPiece.vue';

const props = defineProps(['row', 'column']);

const rowNumber = computed(() => getRowNumber(props.row));
const columnNumber = computed(() => getColumnNumber(props.column));
const tileValue = computed(() => rowNumber.value + columnNumber.value);
const tileColor = computed(() => tileValue.value % 2 === 0 ? 'black' : 'white');

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
    background-color: black;
}

.white-tile {
    background-color: white;
}
</style>