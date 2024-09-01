import type { CoefParam, Criteria } from '@/models/types'
import { computeWage } from '@/models/utils'
import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'

export const useWageStore = defineStore('wage', () => {
  const baseWage = ref(700)
  const criterias = ref([] as Criteria[])

  const computedWage = ref(0)
  // const computedWage = computed(() => computeWage(baseWage.value, criterias.value))

  function initCriterias(criteriasV: Criteria[]) {
    criterias.value = criteriasV
  }

  function setBaseWage(value: number) {
    baseWage.value = value
  }

  function setCriteria(id: string, mark: number, coef: number) {
    console.warn('not implemented setCriterias', id, mark, coef)
  }

  function getCriterias() {
    return toRaw(criterias.value)
  }

  function setPreset(preset: CoefParam[]) {
    criterias.value.forEach((item) => {
      const elt = preset.find((param) => param.id === item.id)
      item.mark = elt?.mark ?? 0
    })
  }

  function updateWage() {
    computedWage.value = computeWage(baseWage.value, criterias.value)
  }

  return {
    baseWage,
    criterias,
    initCriterias,
    getCriterias,
    setBaseWage,
    setCriteria,
    setPreset,
    computedWage,
    updateWage
  }
})
