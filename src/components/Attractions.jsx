import { useState, useEffect } from "react";
import landingImg from "../assets/landingpage.jpg";

const defaultEvents = [
  { id: 1, title: "Manchester Derby", date: 2, time: "8pm", location: "Etihad Stadium" },
  { id: 2, title: "Lego Land", date: 8, time: "10am", location: "Trafford Centre" },
  { id: 3, title: "Ice Skating", date: 14, time: "5pm", location: "Ice Rink" },
  { id: 4, title: "Northern Quarter Tour", date: 20, time: "2pm", location: "Northern Quarter" },
  { id: 5, title: "Chinatown Dinner", date: 27, time: "7pm", location: "Chinatown" },
];

export default function Attractions() {
  const [step, setStep] = useState(1);
  const [interests, setInterests] = useState({
    foodie: false,
    football: false,
    adventurous: false,
    history: false,
    landmarks: false,
    busyLevel: 50,
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleReset = () => {
    setInterests({
      foodie: false,
      football: false,
      adventurous: false,
      history: false,
      landmarks: false,
      busyLevel: 50,
    });
    setStep(1);
    setShowCalendar(false);
    setLoading(false);
  };

  const handleCreateSchedule = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setShowCalendar(true);
    }, 3500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 pt-40 pb-24 relative"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto text-white space-y-12 transition-opacity duration-700">
        {step === 1 && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-10 space-y-6">
            <h1 className="text-3xl font-bold text-center">Plan Your Visit</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Arrival Date</label>
                <input type="date" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Departure Date</label>
                <input type="date" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { id: "foodie", label: "Foodie?" },
                { id: "football", label: "Football Fan?" },
                { id: "adventurous", label: "Adventurous?" },
                { id: "history", label: "Like History?" },
                { id: "landmarks", label: "Enjoy Visiting Landmarks?" },
              ].map(({ id, label }) => (
                <label key={id} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={interests[id]}
                    onChange={() => setInterests({ ...interests, [id]: !interests[id] })}
                    className="accent-white"
                  />
                  {label}
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">How busy do you want your schedule?</label>
              <input
                type="range"
                min={0}
                max={100}
                value={interests.busyLevel}
                onChange={(e) => setInterests({ ...interests, busyLevel: Number(e.target.value) })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>Very Chilled</span>
                <span>Very Busy</span>
              </div>
            </div>
            {loading && (
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold mb-2">Generating your schedule...</h2>
                <div className="w-full h-3 bg-gray-700 rounded overflow-hidden">
                  <div className="h-full bg-green-600 animate-pulse w-full" style={{ animationDuration: '3.5s' }}></div>
                </div>
              </div>
            )}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleReset}
                className="w-1/2 bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200"
              >
                Reset
              </button>
              <button
                onClick={handleCreateSchedule}
                className="w-1/2 bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-500"
              >
                Create Schedule
              </button>
            </div>
          </div>
        )}

        {step === 2 && showCalendar && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 space-y-6 transition-opacity duration-1000">
            <h2 className="text-2xl font-bold text-center">October Schedule</h2>
            <div className="grid grid-cols-7 gap-1 text-sm text-center">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="py-1 font-semibold bg-gray-700 border border-gray-600 rounded">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => (
                <div
                  key={i}
                  className="h-24 bg-gray-700 border border-gray-600 rounded overflow-y-auto p-1 text-left"
                >
                  {defaultEvents
                    .filter((e) => e.date === i)
                    .map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className="text-xs mb-1 p-1 rounded bg-gray-300 text-black cursor-pointer hover:bg-white"
                      >
                        {event.title}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-white">{selectedEvent.title}</h3>
              <p className="text-gray-300 mb-2">Time: {selectedEvent.time}</p>
              <p className="text-gray-300 mb-4">Location: {selectedEvent.location}</p>
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
