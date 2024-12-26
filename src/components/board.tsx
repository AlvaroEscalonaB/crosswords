import BoardRow from "@components/boardRow"
import { CellType, type Cell, type CellClue, type CellLetter } from "@custom_types/boardTypes"
import { useState } from "react"

interface BoardProps {
  matrix: Cell[][]
}

export default function Board({ matrix }: BoardProps) {
  const [dynamicBoard, setDynamicBoard] = useState(createBoardCopy(matrix))

  const handleCorrectCellChange = (row: number, col: number, newCellText: string) => {
    const boardCopy = createBoardCopy(dynamicBoard)
    console.log(row, col, newCellText)

    checkRightConditionWord(boardCopy, row, col, newCellText)
    checkLeftConditionWord(boardCopy, row, col, newCellText)
    checkBelowConditionWord(boardCopy, row, col, newCellText)
    checkAboveConditionWord(boardCopy, row, col, newCellText)
    setDynamicBoard(boardCopy)
  }

  return (
    <section className="flex flex-col w-full justify-center items-center mt-4">
      <div className="flex flex-col border border-gray-300 max-w-max">
        {dynamicBoard.map((row, index) => (
          <BoardRow rowItems={row} row={index} key={index} handleCorrectCellChange={handleCorrectCellChange} />
        ))}
      </div>
    </section>
  )
}

function createBoardCopy(matrix: Cell[][]): Cell[][] {
  return [...matrix].map((row) => row.map((cell) => cell))
}

function checkRightConditionWord(board: Cell[][], row: number, col: number, newCellText: string) {
  const leftCellsToCheck = board[row].slice(0, col)
  let lastWordLetterIndex = board[row].slice(col + 1).findIndex((cell) => cell.cellType != CellType.letter)

  if (lastWordLetterIndex === -1) {
    lastWordLetterIndex = board[0].length - 1
  } else {
    lastWordLetterIndex += col
  }

  const leftInfoIndex = leftCellsToCheck.findLastIndex((cell) => cell.cellType == CellType.info)
  const lastEmptyIndex = leftCellsToCheck.findLastIndex((cell) => cell.cellType == CellType.empty)

  if (leftInfoIndex == -1 || leftInfoIndex < lastEmptyIndex) {
    return
  }

  const infoCell = board[row][leftInfoIndex] as CellClue
  const infoToRight = infoCell.information.find((info) => info.direction == "right")

  if (infoToRight === undefined) {
    return
  }

  if (board[row][col].cellType == CellType.letter) {
    board[row][col].currentText = newCellText
  }

  const word = (board[row].slice(leftInfoIndex + 1, lastWordLetterIndex + 1) as CellLetter[])
    .map((cell) => cell.currentText)
    .join("")

  if (word != infoToRight.correctWord) {
    return
  }

  for (let colNum = leftInfoIndex + 1; colNum <= lastWordLetterIndex; colNum++) {
    if (board[row][colNum].cellType == CellType.letter) {
      ;(board[row][colNum] as CellLetter).flag = true
    }
  }
}

function checkLeftConditionWord(board: Cell[][], row: number, col: number, newCellText: string): void {
  const rowCells = board[row]

  const rightCells = rowCells.slice(col + 1)
  let nextInfoCellIndex = rightCells.findIndex((cell) => cell.cellType === CellType.info)
  if (nextInfoCellIndex === -1) {
    return
  }

  nextInfoCellIndex = col + 1 + nextInfoCellIndex
  const nextEmptyCellIndex = col + 1 + rightCells.findIndex((cell) => cell.cellType === CellType.empty)

  if (nextInfoCellIndex < nextEmptyCellIndex) {
    return
  }

  const infoCell = rowCells[nextInfoCellIndex] as CellClue
  const leftClue = infoCell.information.find((info) => info.direction === "left")
  if (!leftClue) {
    return
  }

  if (rowCells[col].cellType === CellType.letter) {
    ;(rowCells[col] as CellLetter).currentText = newCellText
  }

  const firstValidIndexForWord = rowCells.slice(0, col + 1).findIndex((cell) => cell.cellType != CellType.letter) + 1

  const word = rowCells
    .slice(firstValidIndexForWord, nextInfoCellIndex)
    .filter((cell) => cell.cellType === CellType.letter)
    .map((cell: CellLetter) => cell.currentText)
    .join("")

  if (word !== leftClue.correctWord) {
    return
  }

  for (let i = firstValidIndexForWord; i < nextInfoCellIndex; i++) {
    if (rowCells[i].cellType === CellType.letter) {
      ;(rowCells[i] as CellLetter).flag = true
    }
  }
}

function checkBelowConditionWord(board: Cell[][], row: number, col: number, newCellText: string) {
  const columnCells = board.map((row) => row[col])
  const topCells = columnCells.slice(0, row)
  const lastInfoIndex = topCells.findLastIndex((cell) => cell.cellType === CellType.info)
  const lastEmptyIndex = topCells.findLastIndex((cell) => cell.cellType === CellType.empty)
  let lastCellIndexToCheck = columnCells.slice(row).findIndex((cell) => cell.cellType != CellType.letter)

  if (lastCellIndexToCheck === -1) {
    lastCellIndexToCheck = columnCells.length - 1
  } else {
    lastCellIndexToCheck += row
  }

  if (lastInfoIndex === -1) {
    return
  }

  if (lastInfoIndex < lastEmptyIndex) {
    return
  }

  const infoCell = columnCells[lastInfoIndex] as CellClue
  const downClue = infoCell.information.find((info) => info.direction === "below")

  if (!downClue) {
    return
  }

  if (columnCells[row].cellType === CellType.letter) {
    ;(board[row][col] as CellLetter).currentText = newCellText
  }

  const word = board
    .map((row) => row[col])
    .slice(lastInfoIndex + 1, lastCellIndexToCheck + 1)
    .filter((cell) => cell.cellType === CellType.letter)
    .map((cell: CellLetter) => cell.currentText)
    .join("")

  if (word !== downClue.correctWord) {
    return
  }

  for (let i = lastInfoIndex + 1; i <= lastCellIndexToCheck; i++) {
    if (columnCells[i].cellType === CellType.letter) {
      ;(board[i][col] as CellLetter).flag = true
    }
  }
}

function checkAboveConditionWord(board: Cell[][], row: number, col: number, newCellText: string) {
  const columnCells = board.map((row) => row[col])

  const bottomCells = columnCells.slice(row)
  let nextInfoIndex = bottomCells.findIndex((cell) => cell.cellType === CellType.info)
  const nextEmptyIndex = bottomCells.findIndex((cell) => cell.cellType === CellType.empty)

  let firstLetterOfWordIndex = columnCells.slice(0, row).findLastIndex((cell) => cell.cellType != CellType.letter)

  if (firstLetterOfWordIndex === -1) {
    firstLetterOfWordIndex = 0
  }

  if (nextInfoIndex === -1) {
    return
  }

  if (nextInfoIndex < nextEmptyIndex) {
    return
  }

  nextInfoIndex += row

  const infoCell = columnCells[nextInfoIndex] as CellClue
  const upClue = infoCell.information.find((info) => info.direction === "above")

  if (!upClue) {
    return
  }

  if (columnCells[row].cellType === CellType.letter) {
    ;(board[row][col] as CellLetter).currentText = newCellText
  }

  const word = columnCells
    .slice(firstLetterOfWordIndex, nextInfoIndex)
    .filter((cell) => cell.cellType === CellType.letter)
    .map((cell: CellLetter) => cell.currentText)
    .join("")

  if (word !== upClue.correctWord) {
    return
  }

  for (let i = firstLetterOfWordIndex; i < nextInfoIndex; i++) {
    if (columnCells[i].cellType === CellType.letter) {
      ;(board[i][col] as CellLetter).flag = true
    }
  }
}
