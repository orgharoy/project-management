import React from "react";
import BoardStatus from "@/components/board-components/board-status";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { statuses } from "@/lib/progress-status";
const KanbanBoard = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap flex h-full">
      <div className="flex w-max gap-5 pt-2 pb-5 h-full">
        {statuses.map((status, index) => (
          <BoardStatus key={index} status={status} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default KanbanBoard;
