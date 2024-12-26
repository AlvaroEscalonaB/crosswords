import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { CellInformation } from "@custom_types/boardTypes"
import { directions } from "src/translations/directions"

interface CellProps {
  information: CellInformation[]
}

export default function BoardCellInfo({ information }: CellProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger
          className="aspect-square size-10 border border-gray-300 bg-cyan-700 text-black flex justify-center items-center"
          tabIndex={-1}
        ></TooltipTrigger>
        <TooltipContent className="bg-gray-400 border-gray-400 flex flex-col gap-2" side="bottom">
          {information.map((dataDirection, index) => (
            <div key={index}>
              <div className="block font-bold mr-1">{directions[dataDirection.direction]}</div>
              <div className="font-medium">{dataDirection.text}</div>
            </div>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
