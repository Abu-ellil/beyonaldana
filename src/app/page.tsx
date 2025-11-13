import { getEvents } from "@/lib/events";

export default async function Home() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">Al Dana Amphitheatre — Clone</h1>
          <a href="/admin" className="text-sm underline">Admin</a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-black">Upcoming Events</h2>
        {events.length === 0 ? (
          <p className="text-gray-600">No events yet. Add some from the admin page.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e._id} className="bg-white rounded-lg shadow overflow-hidden flex ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.image} alt={e.name} className="h-44 w-32 object-cover" />
                <div className="w-full gap-4 p-4 flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-lg text-black">{e.name}</h3>
                  <p className="text-sm text-slate-900">
                    {new Date(e.date).toLocaleDateString(undefined, {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  {e.link ? (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block rounded bg-blue-600 text-white px-4 py-2 text-sm"
                    >
                      Buy Tickets
                    </a>
                  ) : (
                    <span className="inline-block rounded bg-gray-200 text-slate-900 px-3 py-2 text-sm">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
