<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar style="background-color: rgb(128, 128, 128)" class="bar">
      <v-app-var-title
        class="text-white"
        style="position: absolute; left: 50%; transform: translateX(-50%)"
        >国情報検索App</v-app-var-title
      >
    </v-app-bar>
    <RouterView />
    <nav>
      <RouterLink to="/">検索</RouterLink>
      <RouterLink to="/Favorite">お気に入り</RouterLink>
    </nav>
  </v-app>
</template>

<style scoped>
.bar {
  position: relative;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
