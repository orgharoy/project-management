"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const NewProjectForm = () => {};

const NewProjectModal = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>New Task</DrawerTitle>
            <DrawerDescription>Create a new Task</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-full max-h-[calc(100vh/3*2)] w-full px-3 pb-5"></ScrollArea>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-2 h-8">
          <Plus className="w-4 h-4" />
          <span>New Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("max-w-4xl")}>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription>Create a new task</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectModal;
