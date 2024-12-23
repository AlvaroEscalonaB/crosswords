import { CellType, type Cell } from "@custom_types/boardTypes"
import BoardCellInput from "./boardCellInput"
import BoardCellEmpty from "./boardCellEmpty"
import BoardCellInfo from "./boardCellInfo"

interface BoardRow {
  rowItems: Cell[]
  column: number
  handleCorrectCellChange: (col: number, row: number, newCellText: string) => void
}

const BoardRow = ({ rowItems, column, handleCorrectCellChange }: BoardRow) => {
  return (
    <div className="flex flex-row min-w-min">
      {rowItems.map((cellItem, rowIndex) => {
        switch (cellItem.cellType) {
          case CellType.empty:
            return <BoardCellEmpty key={rowIndex} />
          case CellType.info:
            return <BoardCellInfo information={cellItem.information} key={rowIndex} />
          case CellType.letter:
            return (
              <BoardCellInput
                text={cellItem.text}
                flag={cellItem.flag}
                row={rowIndex}
                col={column}
                key={rowIndex}
                currentText={cellItem.currentText}
                handleCorrectCellChange={handleCorrectCellChange}
              />
            )
        }
      })}
    </div>
  )
}

export default BoardRow
