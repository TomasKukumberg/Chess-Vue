<template>
    <div class='row'>
        <ChessTile :row='props.row' column='a' />
        <ChessTile :row='props.row' column='b'/>
        <ChessTile :row='props.row' column='c'/>
        <ChessTile :row='props.row' column='d'/>
        <ChessTile :row='props.row' column='e'/>
        <ChessTile :row='props.row' column='f'/>
        <ChessTile :row='props.row' column='g'/>
        <ChessTile :row='props.row' column='h'/>
    </div>
</template>

<script lang='ts' setup>

import ChessTile from './ChessTile.vue';

const props = defineProps(['row']);

</script>

<style scoped>
.row {
    width: 100%;
    height: 12.5%;
    display: flex;
}
</style>