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
    checkToLeftLetters(boardCopy, row, col, newCellText)
    checkToRightLetters(boardCopy, row, col, newCellText)
    setDynamicBoard(boardCopy)
  }

  return (
    <section className="flex flex-col w-full justify-center items-center mt-4">
      <div className="flex flex-col border border-gray-300 max-w-max">
        {dynamicBoard.map((row, index) => (
          <BoardRow rowItems={row} column={index} key={index} handleCorrectCellChange={handleCorrectCellChange} />
        ))}
      </div>
    </section>
  )
}

function createBoardCopy(matrix: Cell[][]): Cell[][] {
  return [...matrix].map((row) => row.map((cell) => cell))
}

function checkToLeftLetters(board: Cell[][], row: number, col: number, newCellText: string) {
  const leftCellsToCheck = board[row].slice(0, col)
  let lastLetterIndex = board[row].slice(col + 1).findIndex((cell) => cell.cellType != CellType.letter)
  lastLetterIndex = lastLetterIndex === -1 ? col : lastLetterIndex + col
  const lastInfoIndex = leftCellsToCheck.findLastIndex((cell) => cell.cellType == CellType.info)
  const lastEmptyIndex = leftCellsToCheck.findLastIndex((cell) => cell.cellType == CellType.empty)
  if (lastInfoIndex == -1 || lastInfoIndex < lastEmptyIndex) {
    return
  }
  const infoCell = board[row][lastInfoIndex] as CellClue
  const infoToRight = infoCell.information.filter((info) => info.direction == "right").at(0)
  if (infoToRight === undefined) {
    return
  }

  if (board[row][col].cellType == CellType.letter) {
    board[row][col].currentText = newCellText
  }

  const word = (board[row].slice(lastInfoIndex + 1, lastLetterIndex + 1) as CellLetter[])
    .map((cell) => cell.currentText)
    .join("")

  if (word != infoToRight.correctWord) {
    return
  }

  for (let colNum = lastInfoIndex + 1; colNum <= lastLetterIndex; colNum++) {
    if (board[row][colNum].cellType == CellType.letter) {
      // @ts-ignore
      board[row][colNum].flag = true
    }
  }
}


function checkToRightLetters(board: Cell[][], row: number, col: number, newCellText: string): void {
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

  const firstValidIndexForWord = rowCells.slice(0, col + 1).findIndex(cell => cell.cellType != CellType.letter) + 1

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
