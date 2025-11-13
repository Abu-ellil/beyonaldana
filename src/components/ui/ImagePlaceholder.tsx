import React from "react";

type Props = {
  className?: string;
  label?: string;
};

export default function ImagePlaceholder({ className = "", label = "Image Placeholder" }: Props) {
  return (
    <div className={`bg-gray-300 text-gray-700 flex items-center justify-center ${className}`}>
      <span className="text-sm">{label}</span>
    </div>
  );
}