<script setup>
import { computed } from 'vue'
import { useNationStore } from '../stores/nation'

const nationStore = useNationStore()
const count = computed(() => nationStore.count)
const favoriteNations = computed(() => nationStore.favoriteNations)
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col v-for="favoriteNation in favoriteNations" :key="favoriteNation.name" cols="6">
        <v-card class="d-flex align-center pa-3">
          <v-img :src="favoriteNation.flag" width="100" height="100" class="mr-4" cover></v-img>
          <div class="flex-grow-1 text-left">
            <div class="text-h6">{{ favoriteNation.name }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="auto">お気に入り登録数：{{ count }}か国</v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.map-container {
  margin-top: 30px;
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
}
</style>
