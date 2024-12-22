import BoardRow from "@components/boardRow"
import type { Cell } from "@custom_types/boardTypes"

interface BoardProps {
  matrix: Cell[][]
}

export default function Board({ matrix }: BoardProps) {
  const matrixCovered = [...matrix].map((row) => row.map((cell) => cell))

  return (
    <section className="flex flex-col w-full justify-center items-center mt-4">
      <div className="flex flex-col border border-gray-300 max-w-max">
        {matrixCovered.map((row, index) => (
          <BoardRow rowItems={row} key={index} />
        ))}
      </div>
    </section>
  )
}
