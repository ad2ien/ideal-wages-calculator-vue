import { usePresetStore } from '@/stores/presets'
import { useWageStore } from '@/stores/wage'
import { type ResponsePreset } from './types'
import { criteriasFromResponse, jsonToResponseCriteria } from './utils'

const DATA_BASE_URL = 'https://raw.githubusercontent.com/ad2ien/ideal-wages-calculator/main/'

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
    const response = await fetch(DATA_BASE_URL + 'criterias.json')
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
    const response = await fetch(DATA_BASE_URL + 'data.json')
    const data = await response.json()
    presetStore.setPreset(data as ResponsePreset)
  } catch (err) {
    console.error(err)
  }
}
