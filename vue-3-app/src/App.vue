<template>
  <h1>Aplicacion con VUE 3</h1>
  <v-label>Componente de VUE 3</v-label>
  <div class="d-flex flex-column">
    <v-label>{{count}}</v-label>
    <v-btn variant="tonal" @click="increment"> Button </v-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

const count = computed(() => $store.state.countStore.count)

const increment = () => {
  $store.commit('increment')
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
