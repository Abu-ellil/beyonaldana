import { adminLogin, addEvent, editEvent, removeEvent } from "@/lib/actions";
import { getEvents } from "@/lib/events";
import { cookies } from "next/headers";
import type { EventItem } from "@/lib/types";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";
  const events = isAdmin ? await getEvents() : [];

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <form action={adminLogin} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
          <h1 className="text-lg font-bold text-slate-900">Admin Login</h1>
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
          <p className="text-xs text-slate-900">Set ADMIN_PASSCODE in .env.local</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4 sm:py-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900">Event Management</h1>

        {/* Add Event Form */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900">Add New Event</h2>
          <form action={addEvent} className="bg-white p-4 sm:p-6 rounded shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-900">Name</label>
              <input name="name" className="w-full border rounded px-3 py-2 text-slate-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Image URL</label>
              <input name="image" className="w-full border rounded px-3 py-2 text-slate-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Date</label>
              <input type="date" name="date" className="w-full border rounded px-3 py-2 text-slate-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Ticket Link (optional)</label>
              <input name="link" className="w-full border rounded px-3 py-2 text-slate-900" />
            </div>
            <button type="submit" className="w-full sm:w-auto rounded bg-blue-600 text-white px-4 py-2">Save Event</button>
          </form>
        </div>

        {/* Events List */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900">Existing Events</h2>
          {events.length === 0 ? (
            <p className="text-slate-600">No events found.</p>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event._id} className="bg-white p-4 rounded shadow border">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div className="flex-1 mb-4 sm:mb-0">
                      <h3 className="font-semibold text-slate-900">{event.name}</h3>
                      <p className="text-sm text-slate-600">Date: {new Date(event.date).toLocaleDateString()}</p>
                      <p className="text-sm text-slate-600">Image: {event.image}</p>
                      {event.link && <p className="text-sm text-slate-600">Link: {event.link}</p>}
                    </div>
                    <div className="w-full sm:w-auto">
                      <form action={editEvent} className="space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-2 mb-2">
                        <input type="hidden" name="id" value={event._id} />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <input name="name" defaultValue={event.name} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" placeholder="Name" required />
                          <input name="image" defaultValue={event.image} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" placeholder="Image URL" required />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <input type="date" name="date" defaultValue={event.date.split('T')[0]} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" required />
                          <input name="link" defaultValue={event.link || ''} className="border rounded px-2 py-1 text-sm flex-1 text-slate-900" placeholder="Ticket Link" />
                        </div>
                        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded text-sm w-full sm:w-auto">Update</button>
                      </form>
                      <form action={removeEvent}>
                        <input type="hidden" name="id" value={event._id} />
                        <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded text-sm w-full sm:w-auto">Delete</button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}