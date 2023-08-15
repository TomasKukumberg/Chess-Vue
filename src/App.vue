<script setup lang="ts">

/* FREE CHESS ASSETS
https://www.pngegg.com/en/png-nbbke
*/

import { RouterLink, RouterView } from 'vue-router'
import ChessBoard from './components/ChessBoard.vue';
</script>

<template>
  <ChessBoard />
  <!--
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  -->
</template>

<style scoped>

</style>
