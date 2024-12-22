
const cellTypes = ["info", "letter", "empty"] as const

export enum CellType {
  info = 0,
  letter = 1,
  empty = 2,
}

const directions = ["right", "left", "above", "below"] as const

type Direction = typeof directions[number]

export interface CellInfo {
  cellType: CellType.info
  direction: Direction
  text: string
}

export interface CellLetter {
  cellType: CellType.letter
  text: string
}

export interface CellEmpty {
  cellType: CellType.empty
}

export type Cell = CellInfo | CellLetter | CellEmpty
