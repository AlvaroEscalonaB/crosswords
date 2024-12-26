import { CellType, type Cell } from "@custom_types/boardTypes"
import BoardCellInput from "./boardCellInput"
import BoardCellEmpty from "./boardCellEmpty"
import BoardCellInfo from "./boardCellInfo"

interface BoardRow {
  rowItems: Cell[]
  row: number
  handleCorrectCellChange: (col: number, row: number, newCellText: string) => void
}

const BoardRow = ({ rowItems, row, handleCorrectCellChange }: BoardRow) => {
  return (
    <div className="flex flex-row min-w-min" data-type="row">
      {rowItems.map((cellItem, colIndex) => {
        switch (cellItem.cellType) {
          case CellType.empty:
            return <BoardCellEmpty key={colIndex} />
          case CellType.info:
            return <BoardCellInfo information={cellItem.information} key={colIndex} />
          case CellType.letter:
            return (
              <BoardCellInput
                text={cellItem.text}
                flag={cellItem.flag}
                row={row}
                col={colIndex}
                key={colIndex}
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
