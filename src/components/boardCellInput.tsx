import type { ChangeEvent } from "react"

interface CellProps {
  text: string
}

export default function BoardCellInput({ text }: CellProps) {
  const handleCellChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value && event.target.value.length > 1) {
      event.target.value = event.target.value[1].toUpperCase()
    }
  }

  return (
    <div className="flex aspect-square size-10 border border-gray-300 bg-gray-100">
      <input onChange={handleCellChange} className="w-full h-full text-center" />
    </div>
  )
}
