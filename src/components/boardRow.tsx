import { CellType, type Cell } from "@custom_types/boardTypes"
import BoardCellInput from "./boardCellInput"
import BoardCellEmpty from "./boardCellEmpty"
import BoardCellInfo from "./boardCellInfo"

interface BoardRow {
  rowItems: Cell[]
}

const BoardRow = ({ rowItems }: BoardRow) => {
  return (
    <div className="flex flex-row min-w-min">
      {rowItems.map((cellItem, index) => {
        console.log(cellItem.cellType)

        switch (cellItem.cellType) {
          case CellType.empty:
            return <BoardCellEmpty key={index} />
          case CellType.info:
            return <BoardCellInfo text={cellItem.text} key={index} />
          case CellType.letter:
            return <BoardCellInput text={cellItem.text} key={index} />
        }
      })}
    </div>
  )
}

export default BoardRow
