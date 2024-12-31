import {
  HelpCircle,
  Circle,
  Timer,
  CheckCircle,
  CircleOff,
  Hourglass,
  ListChecks,
  LucideProps,
} from "lucide-react";

export interface Status {
  value: string;
  label: string;
  icon: React.FC<LucideProps>;
  tooltip: string;
}

export const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
    tooltip:
      "A collection of tasks and features that are planned for future work but not yet prioritized.",
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
    tooltip:
      "Tasks that have been prioritized and are ready to be worked on in the current cycle.",
  },
  {
    value: "planning",
    label: "Planning",
    icon: Hourglass,
    tooltip:
      "Tasks that are being discussed and refined before moving to the active work phase.",
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
    tooltip: "Tasks that are currently being worked on.",
  },
  {
    value: "in review",
    label: "In Review",
    icon: ListChecks,
    tooltip:
      "Tasks that have been completed and are awaiting review or approval.",
  },
  {
    value: "completed",
    label: "Completed",
    icon: CheckCircle,
    tooltip:
      "Tasks that have been finished and approved, marking them as done.",
  },
  {
    value: "on hold",
    label: "On Hold",
    icon: CircleOff,
    tooltip:
      "Tasks that are temporarily paused and not currently being worked on.",
  },
];
