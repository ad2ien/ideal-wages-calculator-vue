<script setup lang="ts">
import { ref } from 'vue'
import Criteria from './Criteria.vue'
import { useAlertStore } from '@/stores/alert'
import Alert from './Alert.vue'
import { doInit } from './models/init'
import { useWageStore } from './stores/wage'

const loading = ref(true)

const alertStore = useAlertStore()
const wageStore = useWageStore()
doInit()
</script>

<template>
  <v-card class="mx-auto" max-width="1000">
    <v-layout>
      <v-app-bar>
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Ideal Wage Calculator</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <Alert />
          <Criteria v-for="crit in wageStore.criterias" :criteria="crit" />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
