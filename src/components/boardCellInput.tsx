import { useState, type ChangeEvent } from "react"

interface CellProps {
  text: string
  flag: boolean
  currentText: string
  row: number
  col: number
  handleCorrectCellChange: (col: number, row: number, newCellText: string) => void
}

const cellRegex = /[a-zA-Z]/

export default function BoardCellInput({ text, currentText, flag, row, col, handleCorrectCellChange }: CellProps) {
  const [cellContent, setCellContent] = useState(currentText)

  const handleCellChange = (event: ChangeEvent<HTMLInputElement>) => {
    let content: string = ""

    if (event.target.value && event.target.value.length == 1) {
      content = cellRegex.test(event.target.value) ? event.target.value.toUpperCase() : ""
    }
    if (event.target.value && event.target.value.length > 1) {
      content = cellRegex.test(event.target.value[1]) ? event.target.value[1].toUpperCase() : event.target.value[0]
    }
    event.target.value = content

    if (content != cellContent) {
      console.log("trigger global change")
    }

    setCellContent(content)

    if (text === content) {
      handleCorrectCellChange(col, row, text)
    }
  }

  return (
    <div className="flex aspect-square size-10 border border-gray-300 bg-gray-100">
      <input
        onChange={handleCellChange}
        className="w-full h-full text-center focus:border-gray-300 text-white disabled:bg-emerald-700"
        disabled={flag}
      />
    </div>
  )
}
