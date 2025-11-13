import { adminLogin, addEvent } from "@/lib/actions";
import { cookies } from "next/headers";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <form action={adminLogin} className="bg-white p-6 rounded shadow w-80 space-y-4">
          <h1 className="text-lg font-bold text-black">Admin Login</h1>
          <input
            type="password"
            name="passcode"
            placeholder="Passcode"
            className="w-full border rounded px-3 py-2 text-slate-900"
            required
          />
          <button type="submit" className="w-full rounded bg-slate-900 text-white py-2">
            Login
          </button>
          <p className="text-xs text-gray-600">Set ADMIN_PASSCODE in .env.local</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-bold mb-4 text-black">Add Event</h1>
        <form action={addEvent} className="bg-white p-6 rounded shadow space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input name="name" className="w-full border rounded px-3 py-2 text-slate-900" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Image URL</label>
            <input name="image" className="w-full border rounded px-3 py-2 text-slate-900" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Date</label>
            <input type="date" name="date" className="w-full border rounded px-3 py-2 text-slate-900" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Ticket Link (optional)</label>
            <input name="link" className="w-full border rounded px-3 py-2 text-slate-900" />
          </div>
          <button type="submit" className="rounded bg-blue-600 text-white px-4 py-2">Save Event</button>
        </form>
      </div>
    </div>
  );
}