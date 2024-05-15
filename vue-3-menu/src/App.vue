<template>
  <v-layout>
    <v-navigation-drawer width="200" permanent variant="tonal" theme="dark">
      <v-list-item title="Menu in vue 3" />
      <v-divider></v-divider>

      <v-list>
        <v-list-item link href="/vue2" title="vue 2 app"></v-list-item>
        <v-list-item link href="/vue3" title="vue 3 app"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>

</template>

<script>

export default {
  name: 'App',
  components: { }
}
</script>

<style>

</style>
