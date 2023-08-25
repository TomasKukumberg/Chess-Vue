<template>
    <div class='chessboard-header'>
        <Player />
        <Timer />
    </div>
</template>

<script setup lang="ts">

import Timer from './Timer.vue'
import Player from './Player.vue'

</script>

<style scoped>
.chessboard-header {
    display: flex;
    justify-content: space-between;
}
</style>