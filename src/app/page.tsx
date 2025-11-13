import { getEvents } from "@/lib/events";
import SlideshowCarousel from "@/components/SlideshowCarousel";
import FooterSidebar from "@/components/FooterSidebar";
import SubscriptionForm from "@/components/forms/SubscriptionForm";

export default async function Home() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className=" text-white">
        <div className="relative h-screen w-full overflow-hidden -top-16">
          <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            src="https://player.vimeo.com/progressive_redirect/playback/879802046/rendition/720p/file.mp4?loc=external&signature=c94bd26886c6e1b160ec0221497451e673813ee07c3fb42882affd07304a5f2b"
            autoPlay
            loop
            muted
            playsInline
          />
          
          
          
        </div>
        
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-2xl font-bold mb-24 text-black">Upcoming Events</h2>
        {events.length === 0 ? (
          <p className="text-gray-600">No events yet. Add some from the admin page.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 shadow-2xl" >
            {events.map((e) => (
              <div key={e._id} className="bg-white h-42 rounded-lg shadow-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.image} alt={e.name} className="h-44 w-28 object-cover hover:scale-105 transition-transform duration-300" />
                <div className="w-full gap-4 p-4 flex flex-col items-center justify-center ">
                  <h3 className="text-gray-800">{e.name}</h3>
                  <p className="text-md font-semibold text-slate-900">
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
                      className="inline-block rounded-full bg-[#8ad4e7] hover:bg-[#7ac4d7] transition-colors duration-300 border-3 border-black font-bold text-black  px-11"
                    >
                      Buy Now
                    </a>
                  ) : (
                    <span className="">
                      
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <SlideshowCarousel />
      <SubscriptionForm/>
      <FooterSidebar/>
    </div>
  );
}
