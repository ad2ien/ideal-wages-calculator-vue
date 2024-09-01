import type { CoefParam, Preset, ResponsePreset } from '@/models/types'
import { presetResponseToPreset } from '@/models/utils'
import { defineStore } from 'pinia'
import { computed, ref, toRaw } from 'vue'

export const usePresetStore = defineStore('presets', () => {
  const presets = ref([] as Preset[])

  const selectedPreset = ref('')

  const getPresetJobList = computed(() => presets.value.map((item) => item.job))

  function setPreset(preset: ResponsePreset) {
    presets.value = presetResponseToPreset(preset)
    selectedPreset.value = preset[0].job
  }

  function getPresets() {
    return toRaw(presets.value)
  }

  function getSelectedPreset() {
    return getPresets().find((item) => item.job === selectedPreset.value)?.params
  }

  function getMarks(): undefined | CoefParam[] {
    return getPresets().find((item) => item.job === selectedPreset.value)?.params
  }

  return { selectedPreset, setPreset, getPresetJobList, getMarks, getSelectedPreset }
})
