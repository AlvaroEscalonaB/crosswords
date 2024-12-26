import { useRef, useState, type ChangeEvent, type KeyboardEvent } from "react"

interface CellProps {
  text: string
  flag: boolean
  currentText: string
  row: number
  col: number
  handleCorrectCellChange: (col: number, row: number, newCellText: string) => void
}

enum KeyboardArrowKeys {
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
}

const CELL_REGEX = /[a-zA-Z]/

export default function BoardCellInput({ text, flag, row, col, handleCorrectCellChange }: CellProps) {
  const currentCellRef = useRef<HTMLInputElement>(null)

  const handleArrowChange = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case KeyboardArrowKeys.ArrowUp:
        const columnCells = [...document.querySelectorAll(`[data-col="${col}"]:not([disabled])`)]
        const matchingIndex = columnCells.findIndex((cell) => cell === currentCellRef.current)

        if (columnCells.slice(0, matchingIndex).at(-1)) {
          ;(columnCells.slice(0, matchingIndex).at(-1) as HTMLInputElement).focus()
          return
        }

        const remainingCells = columnCells.slice(matchingIndex + 1)
        if (remainingCells.length != 0) {
          ;(remainingCells.at(-1) as HTMLInputElement).focus()
        }
        return
      case KeyboardArrowKeys.ArrowDown:
        const columnCellsDown = [...document.querySelectorAll(`[data-col="${col}"]:not([disabled])`)]
        const matchingIndexDown = columnCellsDown.findIndex((cell) => cell === currentCellRef.current)

        if (columnCellsDown.slice(matchingIndexDown + 1).at(-1)) {
          ;(columnCellsDown.slice(matchingIndexDown + 1).at(0) as HTMLInputElement).focus()
          return
        }

        const remainingCellsDown = columnCellsDown.slice(0, matchingIndexDown)
        if (remainingCellsDown.length != 0) {
          ;(remainingCellsDown.at(0) as HTMLInputElement).focus()
        }
        return
      case KeyboardArrowKeys.ArrowLeft:
        const columnCellsLeft = [...document.querySelectorAll(`[data-row="${row}"]:not([disabled])`)]
        const matchingIndexLeft = columnCellsLeft.findIndex((cell) => cell === currentCellRef.current)

        if (columnCellsLeft.slice(0, matchingIndexLeft).at(-1)) {
          ;(columnCellsLeft.slice(0, matchingIndexLeft).at(-1) as HTMLInputElement).focus()
          return
        }

        const remainingCellsLeft = columnCellsLeft.slice(matchingIndexLeft + 1)
        if (remainingCellsLeft.length != 0) {
          ;(remainingCellsLeft.at(-1) as HTMLInputElement).focus()
        }
        return
      case KeyboardArrowKeys.ArrowRight:
        const columnCellsRight = [...document.querySelectorAll(`[data-row="${row}"]:not([disabled])`)]
        const matchingIndexRight = columnCellsRight.findIndex((cell) => cell === currentCellRef.current)

        if (columnCellsRight.slice(matchingIndexRight + 1).at(-1)) {
          ;(columnCellsRight.slice(matchingIndexRight + 1).at(0) as HTMLInputElement).focus()
          return
        }

        const remainingCellsRight = columnCellsRight.slice(0, matchingIndexRight)
        if (remainingCellsRight.length != 0) {
          ;(remainingCellsRight.at(0) as HTMLInputElement).focus()
        }
        return
    }
  }

  const handleCellChange = (event: ChangeEvent<HTMLInputElement>) => {
    let content: string = ""

    if (event.target.value && event.target.value.length == 1) {
      content = CELL_REGEX.test(event.target.value) ? event.target.value.toUpperCase() : ""
    }
    if (event.target.value && event.target.value.length > 1) {
      content = CELL_REGEX.test(event.target.value[1]) ? event.target.value[1].toUpperCase() : event.target.value[0]
    }

    event.target.value = content

    if (text === content) {
      handleCorrectCellChange(row, col, text)
    }
  }

  return (
    <div className="flex aspect-square size-10 border border-gray-300 bg-gray-100">
      <input
        ref={currentCellRef}
        onKeyUp={handleArrowChange}
        onChange={handleCellChange}
        className="w-full h-full text-center focus:border-gray-300 text-white disabled:bg-emerald-700"
        disabled={flag}
        data-row={row}
        data-col={col}
      />
    </div>
  )
}
