<template>
    <div class='row'>
        <ChessTile :row='props.row' v-for="column in columns" :column='column' />
    </div>
</template>

<script lang='ts' setup>

import ChessTile from './ChessTile.vue';

const props = defineProps(['row']);
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

</script>

<style scoped>
.row {
    width: 100%;
    height: 12.5%;
    display: flex;
}
</style>