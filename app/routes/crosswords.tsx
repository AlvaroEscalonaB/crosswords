import Board from "@components/board"
import type { Route } from "./+types/home"
import { CellType, type Cell } from "@custom_types/boardTypes"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Crossword" }, { name: "description", content: "Board to play the puzzle of the day" }]
}

const matrix: Cell[][] = [
  [
    { text: "Calcio", cellType: CellType.info, direction: "right" },
    { text: "C", cellType: CellType.letter },
    { text: "A", cellType: CellType.letter },
  ],
  [
    { text: "Argon", cellType: CellType.info, direction: "right" },
    { text: "A", cellType: CellType.letter },
    { text: "R", cellType: CellType.letter },
  ],
  [
    { text: "Carbono", cellType: CellType.info, direction: "right" },
    { text: "C", cellType: CellType.letter },
    { cellType: CellType.empty },
  ],
]

export default function Crosswords() {
  return (
    <section className="w-full flex flex-col justify-center align-center">
      <Board matrix={matrix} />
    </section>
  )
}
