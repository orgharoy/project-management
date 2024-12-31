import React from "react";
import { Status } from "@/lib/progress-status";
import { Plus, LucideProps, CircleHelp } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import BoardCard from "./board-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BoardStatusProps {
  status: Status;
}

const BoardStatus: React.FC<BoardStatusProps> = ({ status }) => {
  return (
    <div className="flex flex-col flex-grow relative w-80 border flex-shrink-0 rounded-md pt-2 pb-3 shadow-sm h-[calc(100vh-270px)]">
      <div className="flex justify-between items-center mb-3 mx-3">
        <div className="flex items-center gap-3">
          <status.icon className="h-5 w-5" />
          <div className="flex gap-2">
            <span className="font-semibold">{status.label}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircleHelp className="h-[14px] w-[14px] text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{status.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <Button size="icon" variant="ghost" className={cn("px-0 py-0")}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-grow">
        <div className="space-y-4">
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </ScrollArea>
    </div>
  );
};

export default BoardStatus;
