export interface PeriodOptions {
  text: string,
  spaces: PeriodSpaces
}

export enum PeriodSpaces {
  BEFORE = 'before',
  AFTER = 'after',
  BOTH = 'both'
}