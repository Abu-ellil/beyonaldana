"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createEvent, updateEvent, deleteEvent } from "./events";
import { getDb } from "./mongodb";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
  const imageFile = formData.get("image") as File | null;
  const date = formData.get("date")?.toString() || "";
  const link = formData.get("link")?.toString() || undefined;

  if (!name || !imageFile || !date) {
    console.error("Name, image and date are required");
    return;
  }

  let imageUrl = "";
  try {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'image' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
    imageUrl = (uploadResult as { secure_url: string }).secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    return;
  }

  await createEvent({ name, image: imageUrl, date, link });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function uploadImage(formData: FormData) {
  const imageFile = formData.get("image") as File | null;
  if (!imageFile || imageFile.size === 0) {
    throw new Error("No image file provided");
  }

  try {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'image' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
    return (uploadResult as { secure_url: string }).secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image");
  }
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
  const image = formData.get("imageUrl")?.toString() || "";
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