import { useWageStore } from '@/stores/wage'
import { criteriasFromResponse, jsonToResponseCriteria } from './types'

/**
 * Get data and init stores
 */
export async function doInit() {
  const wageStore = useWageStore()
  await getCriterias(wageStore)
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
    console.log(res2)
  } catch (err) {
    console.error(err)
  } finally {
  }
}

async function fetchPresets() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ad2ien/ideal-wages-calculator/main/data.json'
    )
    const data = await response.json()
  } catch (err) {
    console.error(err)
  } finally {
  }
}
