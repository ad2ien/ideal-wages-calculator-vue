<script setup lang="ts">
import { ref, toRefs } from 'vue'
import CriteriaBox from './CriteriaBox.vue'
import AlertBox from './AlertBox.vue'
import { doInit } from './models/init'
import { useWageStore } from './stores/wage'
import { usePresetStore } from './stores/presets'
import { useTheme } from 'vuetify'

const theme = useTheme()

const lightDarkTheme = ref('dark')
const loading = ref(true)

const wageStore = useWageStore()
const { baseWage } = toRefs(wageStore)
const presetStore = usePresetStore()
doInit()

function handlePreset(value: any) {
  const marksPreset = presetStore.getMarks()
  if (marksPreset) {
    wageStore.setPreset(marksPreset!!)
    wageStore.updateWage()
  }
  loading.value = false
}

function toggleTheme() {
  if (lightDarkTheme.value === 'dark') {
    lightDarkTheme.value = 'light'
  } else {
    lightDarkTheme.value = 'dark'
  }
  theme.global.name.value = lightDarkTheme.value
}
</script>

<template>
  <v-card class="mx-auto" max-width="1000">
    <v-layout>
      <v-app-bar>
        <v-app-bar-title>Ideal Wage Calculator 💸</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon id="mode-switcher" @click="toggleTheme">
          <v-icon>
            {{ lightDarkTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
          </v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <AlertBox />

          <v-row>
            <v-col cols="4">
              <v-number-input
                :reverse="false"
                controlVariant="default"
                label="Base wage"
                :hideInput="false"
                :step="10"
                v-model="baseWage"
                @update:modelValue="wageStore.updateWage()"
              ></v-number-input>
            </v-col>
            <v-col cols="4">
              <v-combobox
                label="Preset:"
                :items="presetStore.getPresetJobList"
                v-model="presetStore.selectedPreset"
                @update:modelValue="handlePreset"
              />
            </v-col>
            <v-col cols="4">Then you should get: {{ wageStore.computedWage }} €</v-col>
          </v-row>

          <CriteriaBox v-for="crit in wageStore.criterias" :key="crit.id" :criteria="crit" />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
