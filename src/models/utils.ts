/* eslint-disable @typescript-eslint/no-explicit-any */

import { toRaw } from 'vue'
import type { Criteria, Preset, ResponseCriteria, ResponsePreset } from './types'

const PARAMETER_WEIGHT = 10

export function presetResponseToPreset(response: ResponsePreset): Preset[] {
  return response.map((item) => ({
    job: item.job,
    params: item.params.map((it) => ({ id: it.id, mark: it.value }))
  }))
}

export function jsonToResponseCriteria(jsonData: any): ResponseCriteria[] {
  return jsonData.map((item: any) => ({
    id: item.id,
    label: item.label,
    defaultCoefficient: item.coefficient,
    description: {
      general: item.description.general,
      min: item.description.min,
      max: item.description.max
    }
  }))
}

export function criteriasFromResponse(responseCriterias: ResponseCriteria[]): Criteria[] {
  return responseCriterias.map((item) => ({
    id: item.id,
    description: {
      general: item.description.general,
      min: item.description.min,
      max: item.description.max
    },
    label: item.label,
    coefficient: item.defaultCoefficient,
    mark: 0
  }))
}

export function computeWage(baseWage: number, criteriasInput: any): number {
  const criterias = toRaw(criteriasInput) as Criteria[]
  return Math.round(
    baseWage +
      PARAMETER_WEIGHT * criterias.reduce((sum, item) => sum + item.coefficient * item.mark, 0)
  )
}
