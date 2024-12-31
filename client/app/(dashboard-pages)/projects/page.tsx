"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageHeader from "@/components/PageHeader";
import { columns } from "@/app/(dashboard-pages)/projects/_components/ProjectsColumns";
import { DataTablePagination } from "@/components/data-table-components/DataTablePagination";
import { DataTableToolbar } from "@/components/data-table-components/DataTableToolbar";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import NewProjectModal from "@/app/(dashboard-pages)/projects/_components/NewProjectModal";

const data = [
  {
    id: 1,
    title: "Website Redesign",
    client: "Acme Corp",
    billing: "fixed",
    fee: "3000",
    deadline: "2023-12-01",
    status: "in progress",
    priority: "high",
  },
  {
    id: 2,
    title: "Mobile App Development",
    client: "Tech Innovations",
    billing: "hourly",
    fee: "50",
    deadline: "2024-01-15",
    status: "backlog",
    priority: "medium",
  },
  {
    id: 3,
    title: "SEO Optimization",
    client: "Green Solutions",
    billing: "fixed",
    fee: "1200",
    deadline: "2023-11-20",
    status: "todo",
    priority: "high",
  },
  {
    id: 4,
    title: "Social Media Management",
    client: "Fashion Hub",
    billing: "hourly",
    fee: "40",
    deadline: "2024-02-10",
    status: "in progress",
    priority: "low",
  },
  {
    id: 5,
    title: "E-commerce Platform Setup",
    client: "ShopSmart",
    billing: "fixed",
    fee: "5000",
    deadline: "2024-03-01",
    status: "on hold",
    priority: "medium",
  },
  {
    id: 6,
    title: "Content Writing",
    client: "HealthPlus",
    billing: "hourly",
    fee: "30",
    deadline: "2023-10-30",
    status: "completed",
    priority: "medium",
  },
  {
    id: 7,
    title: "Brand Strategy Development",
    client: "Creative Minds",
    billing: "fixed",
    fee: "2500",
    deadline: "2024-01-05",
    status: "in progress",
    priority: "medium",
  },
  {
    id: 8,
    title: "Database Migration",
    client: "DataCorp",
    billing: "hourly",
    fee: "70",
    deadline: "2024-02-15",
    status: "backlog",
    priority: "high",
  },
  {
    id: 9,
    title: "Graphic Design",
    client: "Artistry Co",
    billing: "fixed",
    fee: "1500",
    deadline: "2023-11-10",
    status: "completed",
    priority: "high",
  },
  {
    id: 10,
    title: "Email Marketing Campaign",
    client: "Retail World",
    billing: "hourly",
    fee: "25",
    deadline: "2023-12-15",
    status: "in progress",
    priority: "low",
  },
  {
    id: 11,
    title: "API Development",
    client: "FinTech Solutions",
    billing: "fixed",
    fee: "4000",
    deadline: "2024-03-20",
    status: "backlog",
    priority: "low",
  },
  {
    id: 12,
    title: "User Experience Research",
    client: "UX Experts",
    billing: "hourly",
    fee: "60",
    deadline: "2024-01-25",
    status: "completed",
    priority: "low",
  },
  {
    id: 13,
    title: "Video Production",
    client: "Media House",
    billing: "fixed",
    fee: "3500",
    deadline: "2024-02-28",
    status: "in progress",
    priority: "low",
  },
  {
    id: 14,
    title: "Cloud Infrastructure Setup",
    client: "Cloudify",
    billing: "hourly",
    fee: "80",
    deadline: "2024-03-10",
    status: "backlog",
    priority: "medium",
  },
  {
    id: 15,
    title: "Market Research",
    client: "Insight Analytics",
    billing: "fixed",
    fee: "2000",
    deadline: "2023-11-30",
    status: "completed",
    priority: "medium",
  },
  {
    id: 16,
    title: "Mobile Game Development",
    client: "GameOn",
    billing: "hourly",
    fee: "55",
    deadline: "2024-04-01",
    status: "in progress",
    priority: "low",
  },
  {
    id: 17,
    title: "IT Support Services",
    client: "TechHelp",
    billing: "fixed",
    fee: "1800",
    deadline: "2024-01-12",
    status: "backlog",
    priority: "high",
  },
  {
    id: 18,
    title: "Website Maintenance",
    client: "WebCare",
    billing: "hourly",
    fee: "45",
    deadline: "2023-12-05",
    status: "completed",
    priority: "low",
  },
  {
    id: 19,
    title: "Digital Marketing Strategy",
    client: "MarketMakers",
    billing: "fixed",
    fee: "2200",
    deadline: "2024-02-20",
    status: "in progress",
    priority: "low",
  },
  {
    id: 20,
    title: "Software Testing",
    client: "Quality Assurance",
    billing: "hourly",
    fee: "65",
    deadline: "2024-01-30",
    status: "backlog",
    priority: "medium",
  },
  {
    id: 21,
    title: "Virtual Reality Experience",
    client: "VR Innovations",
    billing: "fixed",
    fee: "6000",
    deadline: "2024-03-15",
    status: "in progress",
    priority: "medium",
  },
];

const page = () => {
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
    <div className="space-y-10 w-full">
      <PageHeader>Project List</PageHeader>
      <div className="w-full space-y-4 relative">
        <div className="w-full flex flex-wrap-reverse justify-between items-center gap-4">
          <DataTableToolbar table={table} />
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2 h-8 ">
              <Download className="w-4 h-4" />
              <span className="hidden sm:block">Export</span>
            </Button>
            <NewProjectModal />
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
    </div>
  );
};
export default page;
