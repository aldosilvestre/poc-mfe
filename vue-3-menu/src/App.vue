<template>

  <div>
    <ul>
      <li>
        <routerLink to="/app1">App1</routerLink>
      </li>
      <li>
        <routerLink to="/app2">App2</routerLink>
      </li>

      <span>{{ count }}</span>

    </ul>
  </div>

</template>

<script setup>
import { watch, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

const count = computed(() => $store.state.countStore.count)

watch( $store.state.countStore.count, (value) => {
  console.log('count', value)
})

onMounted(() => {})

</script>

<style></style>
