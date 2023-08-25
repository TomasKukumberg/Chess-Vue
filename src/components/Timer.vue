<template>
    <div class='timer'>
        <p>{{ minutesFormatted }}:{{ secondsFormatted }}</p>
    </div>
</template>

<script setup lang="ts">

import { computed, ref, watch } from 'vue';

const seconds = ref(0);
const minutes = ref(0);

const secondsFormatted = computed(() => seconds.value.toString().padStart(2, '0'));
const minutesFormatted = computed(() => minutes.value.toString().padStart(2, '0'));

watch(seconds, (value) => {
    setTimeout(() => {
        if (seconds.value >= 59) {
            seconds.value = 0;
            minutes.value += 1;
        } else seconds.value += 1;
    }, 1000);
}, { immediate: true });

</script>

<style scoped></style>