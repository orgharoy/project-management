import * as React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "@/app/(dashboard-pages)/projects/[id]/_components/TaskColumns";

import { DataTableToolbar } from "@/components/data-table-components/DataTableToolbar";
import NewTaskModal from "@/app/(dashboard-pages)/projects/[id]/_components/NewTaskModal";
import { DataTablePagination } from "@/components/data-table-components/DataTablePagination";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    title: "Design Homepage",
    project: "Project 1",
    description: "Create a mockup for the new homepage layout.",
    status: "todo",
    priority: "high",
    dueDate: "2023-10-15",
    createdDate: "2023-10-01",
    updatedDate: "2023-10-05",
  },
  {
    id: "2",
    title: "Implement User Authentication",
    project: "Project 2",
    description: "Set up user registration and login functionality.",
    status: "in progress",
    priority: "high",
    dueDate: "2023-10-10",
    createdDate: "2023-09-28",
    updatedDate: "2023-10-04",
  },
  {
    id: "3",
    title: "Write API Documentation",
    project: "Project 1",
    description: "Document the endpoints and usage of the API.",
    status: "backlog",
    priority: "medium",
    dueDate: "2023-10-20",
    createdDate: "2023-10-02",
    updatedDate: "2023-10-02",
  },
  {
    id: "4",
    title: "Fix Bug in Payment Module",
    project: "Project 1",
    description: "Resolve the issue with payment processing.",
    status: "todo",
    priority: "high",
    dueDate: "2023-10-12",
    createdDate: "2023-10-03",
    updatedDate: "2023-10-06",
  },
  {
    id: "5",
    title: "Conduct User Testing",
    project: "Project 1",
    description: "Gather feedback from users on the new features.",
    status: "in review",
    priority: "medium",
    dueDate: "2023-10-18",
    createdDate: "2023-10-01",
    updatedDate: "2023-10-07",
  },
  {
    id: "6",
    title: "Update Privacy Policy",
    project: "Project 1",
    description: "Revise the privacy policy to comply with new regulations.",
    status: "completed",
    priority: "low",
    dueDate: "2023-10-05",
    createdDate: "2023-09-25",
    updatedDate: "2023-10-05",
  },
  {
    id: "7",
    title: "Create Marketing Plan",
    project: "Project 1",
    description:
      "Develop a marketing strategy for the upcoming product launch.",
    status: "backlog",
    priority: "medium",
    dueDate: "2023-10-30",
    createdDate: "2023-10-02",
    updatedDate: "2023-10-02",
  },
  {
    id: "8",
    title: "Set Up CI/CD Pipeline",
    project: "Project 1",
    description:
      "Implement continuous integration and deployment for the project.",
    status: "in progress",
    priority: "high",
    dueDate: "2023-10-15",
    createdDate: "2023-10-01",
    updatedDate: "2023-10-08",
  },
  {
    id: "9",
    title: "Prepare Release Notes",
    project: "Project 1",
    description:
      "Document the changes and new features for the upcoming release.",
    status: "todo",
    priority: "medium",
    dueDate: "2023-10-25",
    createdDate: "2023-10-03",
    updatedDate: "2023-10-03",
  },
  {
    id: "10",
    title: "Review Code for Feature X",
    project: "Project 1",
    description: "Conduct a code review for the implementation of Feature X.",
    status: "in review",
    priority: "high",
    dueDate: "2023-10-14",
    createdDate: "2023-10-05",
    updatedDate: "2023-10-09",
  },
];

const ProjectTaskList = () => {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
  });

  return (
    <div className="pt-2 w-full space-y-4 relative">
      <div className="w-full flex flex-wrap-reverse justify-between items-center gap-4">
        <DataTableToolbar table={table} />
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2 h-8 ">
            <Download className="w-4 h-4" />
            <span className="hidden sm:block">Export</span>
          </Button>
          <NewTaskModal />
        </div>
      </div>

      <div className="rounded-md border">
        <Table className={cn("relative")}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        minWidth: header.column.columnDef.size,
                        maxWidth: header.column.columnDef.size,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        minWidth: cell.column.columnDef.size,
                        maxWidth: cell.column.columnDef.size,
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
};

export default ProjectTaskList;
