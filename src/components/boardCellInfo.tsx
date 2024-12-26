import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { CellInformation } from "@custom_types/boardTypes"
import { directions } from "src/translations/directions"
import CellDirectionIcon from "./cellDirectionIcon"

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
        <TooltipContent className="py-0 bg-gray-300 border-gray-700 gap-3 divide-y divide-gray-100" side="bottom">
          {information.map((dataDirection, index) => (
            <article className="relative py-2" key={index}>
              <div className="flex flex-row items-center gap-1.5 w-full">
                <div>
                  <CellDirectionIcon direction={dataDirection.direction} />
                </div>
                <div className="font-bold">{directions[dataDirection.direction]}</div>
              </div>
              <div className="font-medium">{dataDirection.text}</div>
            </article>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
