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

export type Preset = {
  job: string
  params: CoefParam[]
}

export type ResponsePresetJob = {
  id: string
  value: number
}
export type ResponsePreset = {
  job: string
  params: ResponsePresetJob[]
}[]
