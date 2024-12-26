import Board from "@components/board"
import type { Route } from "./+types/home"
import { CellType, type Cell } from "@custom_types/boardTypes"
import { CircleEllipsis } from "lucide-react"
import { useState } from "react"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Crossword" }, { name: "description", content: "Board to play the puzzle of the day" }]
}

// const matrix: Cell[][] = [
//   [
//     { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
//     { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
//     { cellType: CellType.info, information: [{ text: "CAC", direction: "below", correctWord: "CAC" }] },
//     { cellType: CellType.empty },
//   ],
//   [
//     { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
//     { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
//     { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
//     { cellType: CellType.info, information: [{ text: "Calcio (Inv)", direction: "left", correctWord: "CA" }] },
//   ],
//   [
//     { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
//     { cellType: CellType.info, information: [{ text: "Argon", direction: "right", correctWord: "AR" }] },
//     { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
//     { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
//   ],
//   [
//     { cellType: CellType.info, information: [{ text: "Main AA project", direction: "above", correctWord: "ADA" }] },
//     { cellType: CellType.info, information: [{ direction: "right", text: "Carbono", correctWord: "C" }] },
//     { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
//     { cellType: CellType.empty },
//   ],
// ]
import { matrix } from "examples/official"

export default function Crosswords() {
  return (
    <section className="w-full px-40 mt-6">
      <h1 className="text-3xl font-semibold text-gray-100">Crucigrama del día</h1>
      <div className="flex flex-col justify-center align-center mt-10">
        <Board matrix={matrix} />
      </div>
    </section>
  )
}
