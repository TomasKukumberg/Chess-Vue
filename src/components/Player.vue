<template>
    <div class='player'>
        <p>Current player: {{ chessStore.currentPlayer }}</p>
    </div>
</template>

<script setup lang="ts">

import { useChessStore } from '../stores/chess'

const chessStore = useChessStore();

</script>

<style scoped></style>