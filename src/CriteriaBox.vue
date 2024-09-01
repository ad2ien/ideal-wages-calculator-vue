<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col cols="12" md="6">
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
      <v-slider thumb-label="always" min="0" max="100" step="1" v-model="criteria.mark" />
      <div style="margin-top: -1.5em" class="text-caption d-flex justify-center">Mark</div>
    </v-col>
    <v-col col="3">
      <v-slider thumb-label="always" min="0" max="2" step="0.1" v-model="criteria.coefficient" />
      <div style="margin-top: -1.5em" class="text-caption d-flex justify-center">
        How it matters
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps(['criteria'])
</script>
