export type ResponseCriteria = {
  id: string
  label: string
  defaultCoefficient: number
  description: CriteriaDescription
}

export type CriteriaDescription = {
  general: string
  min: string
  max: string
}

export type CoefParam = {
  id: string
  mark: number
}

export type Criteria = {
  id: string
  description: CriteriaDescription
  label: string
  coefficient: number
  mark: number
}

export type ResponsePreset = CoefParam[]

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
