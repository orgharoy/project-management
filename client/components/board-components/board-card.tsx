import { ArrowUp } from "lucide-react";
import React from "react";

const BoardCard = () => {
  return (
    <div className="rounded-sm p-2 mx-3 border-l-[5px] border-l-rose-600 border-y border-r space-y-3 hover:shadow-md cursor-pointer tarnsition-all">
      <h1 className="whitespace-normal">
        Task Titlad sfas dfasdf asdfa sdfa sdfas dfas de
      </h1>

      <div className="space-y-1 text-xs ">
        <h1 className="text-muted-foreground">Project Name</h1>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Due: 20th Jan, 2025</p>
          <div className="flex items-center gap-1 text-muted-foreground text-rose-600">
            <ArrowUp className="h-[14px] w-[14px] flex-shrink-0 flex-grow-0" />
            <p className="flex-shrink-0 flex-grow-0">High Priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
