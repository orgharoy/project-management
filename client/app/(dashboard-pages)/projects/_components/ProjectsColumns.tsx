import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import {
  HelpCircle,
  Circle,
  Timer,
  CheckCircle,
  CircleOff,
  ArrowDown,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { statuses } from "@/lib/progress-status";

interface Project {
  id: number;
  title: string;
  client: string;
  billing: "fixed" | "hourly";
  fee: number;
  deadline: string;
  status: "backlog" | "todo" | "in progress" | "completed" | "on hold";
  priority: "high" | "medium" | "low";
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

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: () => <div className="px-3">Title</div>,
    size: 250,
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
    accessorKey: "client",
    header: () => <div className="px-3">Client</div>,
    size: 100,
    cell: ({ row }) => (
      <div className="px-3 flex">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-ellipsis truncate">
                {row.getValue("client")}
              </div>
            </TooltipTrigger>
            <TooltipContent>{row.getValue("client")}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "billing",
    header: () => <div className="px-3 text-center">Billing</div>,
    size: 100,
    cell: ({ row }) => (
      <div className="px-3 whitespace-nowrap truncate text-center capitalize">
        {row.getValue("billing")}
      </div>
    ),
  },
  {
    accessorKey: "fee",
    header: () => <div className="text-right pr-3 md:pr-10">Fee</div>,
    size: 120,
    cell: ({ row }) => {
      const fee = parseFloat(row.getValue("fee"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(fee);

      return (
        <div className="text-right font-medium pr-3 md:pr-10 truncate">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "deadline",
    header: () => <div className="px-3">Deadline</div>,
    size: 115,
    cell: ({ row }) => (
      <div className="px-3 truncate">{row.getValue("deadline")}</div>
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
    id: "actions",
    enableHiding: false,
    size: 50,
    cell: ({ row }) => {
      const project = row.original;

      return (
        <div className="px-3 flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(project.id.toString())
                }
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
