<script setup>
import { sum, multiplySum } from '@libs/utils'
import HelloWorld from './components/HelloWorld.vue'

// 驗證跨專案函式庫 @libs/utils 於後台可正常運作
const sumResult = sum(1, 2, 3)
const multiplySumResult = multiplySum(4, 5, 6)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <p class="lib-check">@libs/utils sum(1, 2, 3) = {{ sumResult }}</p>
  <p class="lib-check">@libs/utils multiplySum(4, 5, 6) = {{ multiplySumResult }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.lib-check {
  margin-top: 1em;
  font-family: monospace;
  opacity: 0.7;
}
</style>
