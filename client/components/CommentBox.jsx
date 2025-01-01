import React from "react";
import { PenIcon, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CommentBox = () => {
  return (
    <div className="flex gap-3">
      <div className="w-7 h-7 bg-primary rounded-full flex-shrink-0 flex-groow-0 my-1" />
      <div className="space-y-1">
        <div className="bg-muted px-3 py-2 rounded-md space-y-1">
          <h6 className="font-semibold text-muted-foreground">
            User Name
          </h6>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            inventore facere fuga neque sit at aut distinctio?
          </p>
        </div>
        <div className="text-xs text-muted-foreground px-1 flex items-center justify-between">
          <p>4 Dec, 2024 at 5:45 PM</p>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              className={cn("h-auto w-auto p-2")}
            >
              <PenIcon className="w-[13px] h-[13px]" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn("h-auto w-auto p-2")}
            >
              <Trash className="w-[13px] h-[13px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
