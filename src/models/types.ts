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
  criteriaDefinition: CriteriaDescription
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
    description: item.description
  }))
}

export function criteriasFromResponse(responseCriterias: ResponseCriteria[]): Criteria[] {
  return responseCriterias.map((item) => ({
    id: item.id,
    criteriaDefinition: item.description,
    label: item.label,
    coefficient: item.defaultCoefficient,
    mark: 0
  }))
}
