import type { Criteria } from '@/models/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWageStore = defineStore('wage', () => {
  const baseWage = ref(700)
  const criterias = ref([] as Criteria[])

  function initCriterias(criteriasV: Criteria[]) {
    criterias.value = criteriasV
  }

  function setBaseWage(value: number) {
    baseWage.value = value
  }

  function setCriteria(id: string, mark: number, coef: number) {
    console.warn('not implemented setCriterias', id, mark, coef)
  }

  return { baseWage, criterias, initCriterias, setBaseWage, setCriteria }
})
