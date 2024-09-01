import { useWageStore } from '@/stores/wage'
import { type ResponsePreset } from './types'
import { usePresetStore } from '@/stores/presets'
import { criteriasFromResponse, jsonToResponseCriteria } from './utils'

/**
 * Get data and init stores
 */
export async function doInit() {
  const wageStore = useWageStore()
  const presetStore = usePresetStore()
  await getCriterias(wageStore)
  await fetchPresets(presetStore)
  if (presetStore.getSelectedPreset()) {
    wageStore.setPreset(presetStore.getSelectedPreset()!!)
  } else {
    // warning box
  }
  wageStore.updateWage()
}

async function getCriterias(wageStore: any) {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ad2ien/ideal-wages-calculator/main/criterias.json'
    )
    const data = await response.json()
    const res = jsonToResponseCriteria(data)
    const res2 = criteriasFromResponse(res)
    wageStore.initCriterias(res2)
  } catch (err) {
    console.error(err)
    // TODO warning box
  }
}

async function fetchPresets(presetStore: any) {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ad2ien/ideal-wages-calculator/main/data.json'
    )
    const data = await response.json()
    presetStore.setPreset(data as ResponsePreset)
  } catch (err) {
    console.error(err)
  }
}
