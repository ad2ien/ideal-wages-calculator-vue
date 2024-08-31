<script setup lang="ts">
import { useAlertStore } from '@/stores/alert'
import { ref } from 'vue'

const alertStore = useAlertStore()
</script>
<template>
  <v-alert
    v-if="alertStore.alertText"
    title="Alert title"
    :text="alertStore.alertText"
    type="info"
  ></v-alert>
</template>
