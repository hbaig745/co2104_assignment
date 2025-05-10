import { useState } from "react";
import landingImg from "../assets/landingpage.jpg";

const matches = [
  {
    id: 1,
    title: "Man City vs Leeds",
    date: "01/04/2025",
    time: "8pm Kick off time",
    stadium: "Etihad Stadium",
    soldOut: true,
  },
  {
    id: 2,
    title: "Man Utd vs Chelsea",
    date: "05/04/2025",
    time: "7:45pm Kick off time",
    stadium: "Old Trafford",
    soldOut: false,
  },
  {
    id: 3,
    title: "Man City vs Liverpool",
    date: "10/04/2025",
    time: "6:30pm Kick off time",
    stadium: "Etihad Stadium",
    soldOut: true,
  },
  {
    id: 4,
    title: "Salford vs Wigan",
    date: "15/05/2025",
    time: "7:30pm Kick off time",
    stadium: "Old Trafford",
    soldOut: false,
  },
  {
    id: 5,
    title: "Man Utd vs Arsenal",
    date: "23/12/2035",
    time: "1:00pm Kick off time",
    stadium: "Old Trafford",
    soldOut: false,
  },
  {
    id: 6,
    title: "Rochdale A.F.C vs Gillingham F.C",
    date: "15/04/2025",
    time: "5:00pm Kick off time",
    stadium: "Villa Park",
    soldOut: false,
  },
  {
    id: 7,
    title: "Man City vs Soccer Aid",
    date: "11/01/2026",
    time: "8:00pm Kick off time",
    stadium: "Selhurst Park",
    soldOut: false,
  },
  {
    id: 8,
    title: "England vs Denmark",
    date: "16/08/2027",
    time: "5:00pm Kick off time",
    stadium: "Wembley Stadium",
    soldOut: true,
  },
];

export default function MatchRecommender() {
  const [step, setStep] = useState(1);
  const [selectedMatch, setSelectedMatch] = useState(matches[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => setStep(3), 2000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12 relative"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 w-full max-w-7xl bg-gray-800 rounded-2xl shadow-2xl p-10 border border-gray-700 text-white flex flex-col gap-8 mt-12">
        <div className="flex flex-col md:flex-row gap-8">
          <form onSubmit={handleSubmit} className="w-full md:w-1/3 space-y-5">
            <h2 className="text-2xl font-bold mb-2">Choose your preferences</h2>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Which team?
              </label>
              <select className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600">
                <option>Man United</option>
                <option>Man City</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                How big of a fan are you?
              </label>
              <input
                type="range"
                min="0"
                max="10"
                className="w-full appearance-none h-2 bg-gray-600 rounded-lg outline-none"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Just curious</span>
                <span>Die-hard</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Budget</label>
              <select className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600">
                <option>£0–£50</option>
                <option>£51–£150</option>
                <option>£151+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Other Interests
              </label>
              <input
                type="text"
                placeholder="e.g. museums, nightlife"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Recommend a Match
            </button>
          </form>

          <div className="w-full md:w-2/3 flex items-center justify-center text-center">
            {step === 1 && (
              <p className="text-xl text-gray-300">
                Please choose from the form to the left...
              </p>
            )}
            {step === 2 && (
              <p className="text-xl text-gray-300 animate-pulse">
                Please wait whilst we pick the best match for you...
              </p>
            )}
            {step === 3 && (
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  MAN UTD <span className="text-gray-400">vs</span> MAN CITY
                </h2>
                <p className="text-gray-300">
                  Based on your preferences, this is the most exciting match for
                  you to attend in Manchester!
                </p>
                <p className="text-red-600">
                  Big Manchester Derby and Top 6 clash!
                </p>
              </div>
            )}
          </div>
        </div>

        {step === 3 && (
          <div className="w-full bg-gray-900 rounded-lg border border-gray-700 mt-4 px-4 py-2 flex items-center gap-4 overflow-x-auto">
            <div className="bg-gray-800 text-xs text-white px-4 py-2 rounded-lg whitespace-nowrap flex-shrink-0">
              <p className="font-semibold">{selectedMatch.title}</p>
              <p>Date: {selectedMatch.date}</p>
              <p>Time: {selectedMatch.time}</p>
              {selectedMatch.soldOut && (
                <p className="text-red-600 font-medium mt-1">Sold out!</p>
              )}
            </div>

            {matches.map((match) => (
              <div
                key={match.id}
                onClick={() => setSelectedMatch(match)}
                className={`text-xs px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap flex-shrink-0 border border-gray-600 hover:bg-gray-300 hover:text-black hover:font-bold transition ${
                  selectedMatch.id === match.id
                    ? "bg-gray-300 text-black font-bold"
                    : "bg-gray-700 text-white"
                }`}
              >
                {match.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
