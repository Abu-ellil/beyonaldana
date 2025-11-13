'use client';

import { editEvent, uploadImage } from "@/lib/actions";
import { useState, useTransition } from "react";
import type { EventItem } from "@/lib/types";

export default function EditEventForm({ event }: { event: EventItem }) {
  const [imageUrl, setImageUrl] = useState(event.image);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, startUpload] = useTransition();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("image", selectedFile);
    startUpload(async () => {
      try {
        const url = await uploadImage(formData);
        setImageUrl(url);
        setSelectedFile(null);
      } catch {
        alert("Upload failed");
      }
    });
  };

  return (
    <form action={editEvent} className="space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-2 mb-2">
      <input type="hidden" name="id" value={event._id} />
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <input name="name" defaultValue={event.name} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" placeholder="Name" required />
        <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" placeholder="Image URL" required />
        <input type="file" accept="image/*" onChange={handleFileChange} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" />
        <button type="button" onClick={handleUpload} disabled={!selectedFile || isUploading} className="bg-blue-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50">
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <input type="date" name="date" defaultValue={event.date.split('T')[0]} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" required />
        <input name="link" defaultValue={event.link || ''} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" placeholder="Ticket Link" />
      </div>
      <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded text-sm w-full sm:w-auto">Update</button>
    </form>
  );
}