import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { statuses } from "@/lib/progress-status";

interface Tasks {
  id: number;
  title: string;
  project: string;
  description: string;
  status: "backlog" | "todo" | "in progress" | "completed" | "on hold";
  priority: "high" | "medium" | "low";
  dueDate: string;
  createdDate: string;
  updatedDate: string;
}

const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];

export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "title",
    header: () => <div className="px-3">Title</div>,
    size: 150,
    cell: ({ row }) => (
      <div className="px-3 flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-ellipsis truncate">
                {row.getValue("title")}
              </div>
            </TooltipTrigger>
            <TooltipContent>{row.getValue("title")}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "project",
    header: () => <div className="px-3">Project</div>,
    size: 100,
    cell: ({ row }) => (
      <div className="px-3 flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-ellipsis truncate">
                {row.getValue("project")}
              </div>
            </TooltipTrigger>
            <TooltipContent>{row.getValue("project")}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <div className="px-3 ">Description</div>,
    size: 300,
    cell: ({ row }) => (
      <div className="px-3 whitespace-nowrap truncate">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="px-3">Status</div>,
    size: 136,
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center px-3">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
          )}
          <span className="truncate">{status.label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: () => <div className="px-3">Priority</div>,
    size: 120,
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center px-3">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
          )}
          <span className="truncate">{priority.label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: () => <div className="px-3">Due date</div>,
    size: 100,
    cell: ({ row }) => (
      <div className="px-3 truncate">{row.getValue("dueDate")}</div>
    ),
  },
];
