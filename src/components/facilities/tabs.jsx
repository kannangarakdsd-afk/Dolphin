import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "./utils";

function Tabs(props) {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...rest}
    />
  );
}

function TabsList(props) {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted inline-flex h-10 items-center justify-center rounded-full p-1",
        className
      )}
      {...rest}
    />
  );
}

function TabsTrigger(props) {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "flex-1 rounded-full px-6 py-2 text-sm font-medium text-muted-foreground transition-all",
        "data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow",
        className
      )}
      {...rest}
    />
  );
}

function TabsContent(props) {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("outline-none", className)}
      {...rest}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };