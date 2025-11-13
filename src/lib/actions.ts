"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createEvent, updateEvent, deleteEvent } from "./events";
import { getDb } from "./mongodb";

export async function adminLogin(formData: FormData) {
  const pass = formData.get("passcode")?.toString() || "";
  const expected = process.env.ADMIN_PASSCODE || "";
  if (!expected) {
    console.error("ADMIN_PASSCODE not set");
    return;
  }
  if (pass !== expected) {
    console.error("Invalid passcode");
    return;
  }
  const cookieStore = await cookies();
  cookieStore.set("admin", "true", { httpOnly: true, path: "/" });
  revalidatePath("/admin");
}

export async function addEvent(formData: FormData) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";
  if (!isAdmin) {
    console.error("Unauthorized");
    return;
  }

  const name = formData.get("name")?.toString() || "";
  const image = formData.get("image")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const link = formData.get("link")?.toString() || undefined;

  if (!name || !image || !date) {
    console.error("Name, image and date are required");
    return;
  }

  await createEvent({ name, image, date, link });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function editEvent(formData: FormData) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";
  if (!isAdmin) {
    console.error("Unauthorized");
    return;
  }

  const id = formData.get("id")?.toString() || "";
  const name = formData.get("name")?.toString() || "";
  const image = formData.get("image")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const link = formData.get("link")?.toString() || undefined;

  if (!id || !name || !image || !date) {
    console.error("ID, name, image and date are required");
    return;
  }

  await updateEvent(id, { name, image, date, link });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function removeEvent(formData: FormData) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";
  if (!isAdmin) {
    console.error("Unauthorized");
    return;
  }

  const id = formData.get("id")?.toString() || "";
  if (!id) {
    console.error("ID is required");
    return;
  }

  await deleteEvent(id);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function subscribeNewsletter(formData: FormData) {
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const consent = formData.get("consent") ? true : false;

  if (!firstName || !lastName || !email || !consent) {
    console.error("Please complete required fields and consent.");
    return;
  }

  try {
    const db = await getDb();
    await db.collection("subscriptions").insertOne({
      firstName,
      lastName,
      phone,
      email,
      consent,
      createdAt: new Date().toISOString(),
    });
  } catch (e) {
    console.error("Error subscribing to newsletter:", e);
  }
  revalidatePath("/");
}