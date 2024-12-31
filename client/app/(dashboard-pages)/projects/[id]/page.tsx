"use client";

import React from "react";
import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectSummary from "@/app/(dashboard-pages)/projects/[id]/_components/ProjectSummary";
import ProjectBoard from "@/app/(dashboard-pages)/projects/[id]/_components/ProjectBoard";
import ProjectTaskList from "@/app/(dashboard-pages)/projects/[id]/_components/ProjectTaskList";
import TimeTrackingSheet from "@/app/(dashboard-pages)/projects/[id]/_components/TimeTrackingSheet";

const page = () => {
  const { id } = useParams();
  return (
    <div className="w-full space-y-10">
      <div className="flex justify-between">
        <PageHeader>Project Name</PageHeader>
        <TimeTrackingSheet />
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="board">Board</TabsTrigger>
          <TabsTrigger value="list">Task List</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <ProjectSummary />
        </TabsContent>
        <TabsContent value="board">
          <ProjectBoard />
        </TabsContent>
        <TabsContent value="list">
          <ProjectTaskList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
