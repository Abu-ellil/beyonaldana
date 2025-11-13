import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type { EventItem } from "./types";

export async function getEvents(): Promise<EventItem[]> {
  try {
    const db = await getDb();
    const items = await db
      .collection<EventItem>("events")
      .find({})
      .sort({ date: 1 })
      .toArray();
    return items.map((e) => ({ ...e, _id: e._id?.toString() }));
  } catch (e) {
    // If DB is not configured, return empty list to allow UI preview
    return [];
  }
}

export async function createEvent(data: EventItem) {
  const db = await getDb();
  const safe: EventItem = {
    name: data.name.trim(),
    image: data.image.trim(),
    date: new Date(data.date).toISOString(),
    link: data.link?.trim() || undefined,
  };
  const res = await db.collection<EventItem>("events").insertOne(safe);
  return res.insertedId.toString();
}

export async function updateEvent(id: string, data: Partial<EventItem>) {
  const db = await getDb();
  const updateData: Record<string, string | undefined> = {};
  if (data.name) updateData.name = data.name.trim();
  if (data.image) updateData.image = data.image.trim();
  if (data.date) updateData.date = new Date(data.date).toISOString();
  if (data.link !== undefined) updateData.link = data.link?.trim() || undefined;

  const res = await db.collection("events").updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  return res.modifiedCount > 0;
}

export async function deleteEvent(id: string) {
  const db = await getDb();
  const res = await db.collection("events").deleteOne({ _id: new ObjectId(id) });
  return res.deletedCount > 0;
}