interface CellProps {
  text: string
}

export default function BoardCellInfo({ text }: CellProps) {
  return (
    <div className="aspect-square size-10 border border-gray-300 bg-gray-100 text-black flex justify-center items-center">
      ?
    </div>
  )
}
