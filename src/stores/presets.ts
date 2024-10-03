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
    const urlParamInputPreset = urlParamsToPreset()
    if (urlParamInputPreset) {
      presets.value.push(urlParamInputPreset)
      selectedPreset.value = presets.value[presets.value.length - 1].job
    } else {
      selectedPreset.value = preset[0].job
    }
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

  function urlParamsToPreset(): Preset | undefined {
    const urlParams = new URLSearchParams(window.location.search)
    const params = Array.from(urlParams)
    if (!urlParams.get('job') || urlParams.size < 6) {
      return undefined
    }
    return {
      job: urlParams.get('job') as string,
      params: params
        .filter((param) => param[0].match(/[\p{Emoji}\u200d]+/gu))
        .map((param) => {
          return {
            id: param[0],
            mark: Number(param[1])
          }
        })
    }
  }

  return {
    selectedPreset,
    setPreset,
    getPresetJobList,
    getMarks,
    getSelectedPreset
  }
})
