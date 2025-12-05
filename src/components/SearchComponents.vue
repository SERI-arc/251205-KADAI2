<script setup>
import { computed, onMounted } from 'vue'
import { useNationStore } from '../stores/nation'

const nationStore = useNationStore()
onMounted(() => {
  nationStore.getCountry()
})
const countryList = computed(() => nationStore.countryList)
const searchCountry = computed(() => nationStore.searchCountry)
const flag = computed(() => nationStore.flag)
const nation = computed(() => nationStore.nation)
const capitalLists = computed(() => nationStore.capitalLists)
const population = computed(() => nationStore.population)
const register = computed(() => nationStore.register)
</script>

<template>
  <v-container class="container">
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-select :items="countryList" label="国を選択してください" v-model="nationStore.countries">
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-btn class="ml-3" size="large" rounded="pill" @click="searchCountry">
          <v-icon icon="mdi-magnify" class="mr-1"></v-icon>
          検索
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-img v-bind:src="flag" width="300" height="200" class="flag"></v-img>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <p>国名：{{ nation }}</p>
          </v-col>
          <v-col cols="auto">
            <p>首都：{{ capitalLists }}</p>
          </v-col>
          <v-col cols="auto">
            <p>人口：{{ population }}<span class="population" v-if="population">人</span></p>
          </v-col>
        </v-row>
      </v-col>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn @click="register">お気に入り登録</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<style scoped></style>
