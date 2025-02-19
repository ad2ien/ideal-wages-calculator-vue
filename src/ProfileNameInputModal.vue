<script setup lang="ts">
import { ref, type Ref } from 'vue'
const emit = defineEmits(['generateUrlCallback'])

const profileName = ref('')

function closeModal(isActive: Ref<boolean>) {
  console.log('close modal')
  emit('generateUrlCallback', profileName.value)
  isActive.value = false
}
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-link"
        color="surface-variant"
        text="Generate URL"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Generate URL">
        <div class="mx-4">
          <v-text-field label="Profile name" v-model="profileName"></v-text-field>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="URL to clipboard" @click="closeModal(isActive)"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style></style>
