// components/ExportCoursesButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getCoursesAsFile } from "@/lib/api/api";

async function getCourses() {
  const response = await getCoursesAsFile();
  const blob = await response.blob()

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "courses.xlsx";
  document.body.appendChild(a);
  a.click();

  a.remove();
  window.URL.revokeObjectURL(url);


}

export default function ExportCoursesButton() {
  return (
    <Button size="sm" variant="outline" onClick={getCourses}>
      <Download className="h-4 w-4 mr-2" />
      Export
    </Button>
  );
}
