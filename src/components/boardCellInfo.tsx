import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { CellInformation } from "@custom_types/boardTypes"

interface CellProps {
  information: CellInformation[]
}

export default function BoardCellInfo({ information }: CellProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger className="aspect-square size-10 border border-gray-300 bg-cyan-700 text-black flex justify-center items-center"></TooltipTrigger>
        <TooltipContent className="bg-gray-400 border-gray-400" side="bottom">
          {information.map((dataDirection, index) => (
            <div key={index}>
              <span className="font-bold mr-1">{dataDirection.direction}: </span>
              <span className="font-medium">{dataDirection.text}</span>
            </div>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
