import type { Metadata } from "next";
import TaskManagementContent from "@/components/sections/platform/TaskManagementContent";

export const metadata: Metadata = {
  title: "Task Management System | Formezy",
  description:
    "Build a Task Management system that matches how your sales, success and marketing teams actually work.",
};

export default function TaskManagementPage() {
  return <TaskManagementContent />;
}
