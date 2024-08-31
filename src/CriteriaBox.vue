<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col cols="6">
      <!-- <pre>{{ criteria.description?.general }}</pre> -->
      <v-sheet class="pa-1 ma-1">
        <v-card :title="criteria.id + criteria.label">
          <v-card-text>
            <p>
              <b>{{ criteria.description?.general }}</b>
            </p>
            <br />
            <p><b>Min</b> : {{ criteria.description?.min }}</p>
            <p><b>Max</b> : {{ criteria.description?.max }}</p>
          </v-card-text>
        </v-card>
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
