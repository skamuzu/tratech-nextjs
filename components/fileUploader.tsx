"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SetStateAction, useState } from "react";
import { Download, Upload, FileImage, X } from "lucide-react";
import z from "zod";

type UploadStatus = "idle" | "uploading" | "success" | "error";

type FileUploaderProps = {
  file: File | null;
  setFile: React.Dispatch<SetStateAction<File | null>>;
  disabled?: boolean;
};

export default function FileUploader({ file, setFile, disabled }: FileUploaderProps) {
  const [status, setStatus] = useState<UploadStatus>("idle");
  
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus("success");
    }
  }

  function handleRemoveFile() {
    setFile(null);
    setStatus("idle");
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={disabled}
            className="cursor-pointer"
          />
          <Download className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>
      {file && (
        <div className="flex items-center justify-between bg-muted p-2 rounded-md">
          <div className="flex items-center gap-2 text-sm">
            <FileImage className="h-4 w-4 text-blue-500" />
            <span className="truncate max-w-[200px]">{file.name}</span>
            <span className="text-muted-foreground">
              ({(file.size / 1024).toFixed(2)} KB)
            </span>
          </div>
          {!disabled && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
