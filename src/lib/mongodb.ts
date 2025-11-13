import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "";

if (!uri) {
  console.warn(
    "MONGODB_URI is not set. Please add it to .env.local to enable database."
  );
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb() {
  if (cachedDb) return cachedDb;
  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
  }
  const client = await cachedClient.connect();
  cachedDb = client.db();
  return cachedDb;
}