import { ArrowDown, ArrowUp, ArrowRight, ArrowLeft } from "lucide-react"
import { type Direction } from "src/custom_types/boardTypes"

interface CellDirectionProps {
  direction: Direction
}

const ICON_SIZE = 14

export default function CellDirectionIcon({ direction }: CellDirectionProps) {
  return {
    above: <ArrowUp size={ICON_SIZE} strokeWidth={3} />,
    below: <ArrowDown size={ICON_SIZE} strokeWidth={3} />,
    left: <ArrowLeft size={ICON_SIZE} strokeWidth={3} />,
    right: <ArrowRight size={ICON_SIZE} strokeWidth={3} />,
  }[direction]
}
