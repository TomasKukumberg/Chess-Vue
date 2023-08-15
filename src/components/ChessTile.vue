<template>
    <div class='piece'>
        <img :src="imageSrc" alt="">
        <p v-show='showTileNumber'>{{ props.row }}</p>
        <p v-show='showTileLetter'>{{ props.column }}</p>
    </div>
</template>

<script lang='ts' setup>

import { ref, computed } from 'vue';

const props = defineProps(['row', 'column', 'imageSrc']);

const isMarked = ref(false);

const showTileNumber = computed(() => {
    return props.column === 'a';
});

const showTileLetter = computed(() => {
    return props.row === '1';
});

</script>

<style scoped>
.piece {
    width: 3.125rem;
    height: 3.125rem;
    border: 1px solid black;
}
</style>