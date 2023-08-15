<template>
    <p class='piece' v-html='image'></p>
</template>

<script lang='ts' setup>

import {ref, computed, onMounted} from 'vue';

import { getRowNumber, getColumnNumber } from '../composables/utils';
import { mapPieceName, pieceToHtml, mapPieceColors } from '../composables/utils';

onMounted(() => {
    player.value = mapPieceColors(rowNumber.value, columnNumber.value);
    name.value = mapPieceName(rowNumber.value, columnNumber.value);
    image.value = pieceToHtml(name.value, player.value);
});

const props = defineProps(['row', 'column'])

const name = ref('');
const image = ref('');
const player = ref('none');
const rowNumber = computed(() => getRowNumber(props.row));
const columnNumber = computed(() => getColumnNumber(props.column));

</script>

<style scoped>

.piece {
    font-size: 100%
}

</style>