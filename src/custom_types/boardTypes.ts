export enum CellType {
  info = 0,
  letter = 1,
  empty = 2,
}

const directions = ["right", "left", "above", "below"] as const

export type Direction = typeof directions[number]

export interface CellInformation {
  text: string
  direction: Direction
  correctWord: string
}

export interface CellClue {
  cellType: CellType.info
  information: CellInformation[]
}

export interface CellLetter {
  cellType: CellType.letter
  text: string
  currentText: string
  flag: boolean
}

export interface CellEmpty {
  cellType: CellType.empty
}

export type Cell = CellClue | CellLetter | CellEmpty
