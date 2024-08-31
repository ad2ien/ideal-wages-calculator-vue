<template>
  <v-row no-gutters>
    <v-col cols="6">
      <v-sheet class="pa-1 ma-1">
        <label>{{ criteria.id }} - {{ criteria.label }}</label>
      </v-sheet>
    </v-col>
    <v-col col="3">
      <v-sheet class="pa-1 ma-1"> <input type="range" min="0" max="100" value="50" /> </v-sheet
    ></v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps(['criteria'])
</script>
