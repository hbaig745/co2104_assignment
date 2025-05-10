import { useState } from "react";
import manchesterMap from "../assets/manchester-map.jpg";
import landingImg from "../assets/landingpage.jpg";

const burgerPlaces = [
  {
    id: 1,
    name: "Miami Crispy",
    address: "Wimslow Road, M17 6GH",
    open: true,
    health: 5,
    budget: true,
    spicy: "Medium",
    x: "30%",
    y: "40%",
  },
  {
    id: 2,
    name: "Flame Burger",
    address: "Oxford Rd, M1 7ED",
    open: false,
    health: 3,
    budget: false,
    spicy: "Mild",
    x: "60%",
    y: "50%",
  },
  {
    id: 3,
    name: "Burger Yard",
    address: "Didsbury, M20 3JP",
    open: true,
    health: 5,
    budget: true,
    spicy: "Hot",
    x: "45%",
    y: "70%",
  },
  {
    id: 4,
    name: "Archie's",
    address: "Oxford Rd, M1 6JA",
    open: true,
    health: 4,
    budget: false,
    spicy: "Medium",
    x: "65%",
    y: "60%",
  },
  {
    id: 5,
    name: "Yard & Coop",
    address: "Edge Street, M4 1HE",
    open: true,
    health: 5,
    budget: false,
    spicy: "Hot",
    x: "52%",
    y: "48%",
  },
  {
    id: 6,
    name: "Red's True BBQ",
    address: "Albert Square, M2 5PF",
    open: true,
    health: 4,
    budget: false,
    spicy: "Medium",
    x: "43%",
    y: "38%",
  },
  {
    id: 7,
    name: "Mother Clucker",
    address: "Oxford Rd, M1 6EG",
    open: true,
    health: 5,
    budget: true,
    spicy: "Hot",
    x: "55%",
    y: "52%",
  },
  {
    id: 8,
    name: "Jerk Junction",
    address: "Chorlton, M21 0AZ",
    open: true,
    health: 3,
    budget: true,
    spicy: "Hot",
    x: "25%",
    y: "75%",
  },
  {
    id: 9,
    name: "Bird of Prey",
    address: "Great Northern, M3 4EN",
    open: true,
    health: 4,
    budget: true,
    spicy: "Medium",
    x: "50%",
    y: "46%",
  },
  {
    id: 10,
    name: "Fat Hippo",
    address: "Deansgate, M3 4EN",
    open: true,
    health: 5,
    budget: false,
    spicy: "Hot",
    x: "57%",
    y: "42%",
  },
  {
    id: 11,
    name: "Slap & Pickle",
    address: "First Street, M15 4FN",
    open: true,
    health: 4,
    budget: true,
    spicy: "Medium",
    x: "38%",
    y: "63%",
  },
];

export default function BurgerLocator() {
  const [search, setSearch] = useState("Hotel Riverside, M19 5FG");
  const [hovered, setHovered] = useState(null);
  const [filters, setFilters] = useState({
    budgetOnly: false,
    openNow: false,
    health5: false,
    spice: "Any",
  });
  const [sortBy, setSortBy] = useState("Distance");

  const filtered = burgerPlaces.filter((place) => {
    if (filters.budgetOnly && !place.budget) return false;
    if (filters.openNow && !place.open) return false;
    if (filters.health5 && place.health !== 5) return false;
    if (filters.spice !== "Any" && place.spicy !== filters.spice) return false;
    return true;
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 pt-40 pb-12 relative"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl w-full md:w-64 space-y-4">
            <h2 className="text-lg font-bold text-white">Preferences</h2>

            <input
              type="text"
              placeholder="Enter Address, Hotel, Place of Residence"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
            />

            <div className="text-sm text-gray-300">
              <p className="mt-4 mb-2">Sort by</p>
              <div className="space-y-1">
                {["Distance", "Price", "Allergies"].map((label) => (
                  <label key={label} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sortBy"
                      value={label}
                      checked={sortBy === label}
                      onChange={() => setSortBy(label)}
                      className="accent-white"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 text-sm">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filters.budgetOnly}
                  onChange={() =>
                    setFilters((f) => ({ ...f, budgetOnly: !f.budgetOnly }))
                  }
                  className="accent-white"
                />
                Only show budget options
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filters.openNow}
                  onChange={() =>
                    setFilters((f) => ({ ...f, openNow: !f.openNow }))
                  }
                  className="accent-white"
                />
                Open now
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filters.health5}
                  onChange={() =>
                    setFilters((f) => ({ ...f, health5: !f.health5 }))
                  }
                  className="accent-white"
                />
                Only show 5★ health ratings
              </label>
            </div>

            <div className="text-sm">
              <label className="block text-gray-300 mb-1">Spice Tolerance</label>
              <select
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600"
                value={filters.spice}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, spice: e.target.value }))
                }
              >
                <option>Any</option>
                <option>Mild</option>
                <option>Medium</option>
                <option>Hot</option>
              </select>
            </div>

            <button
              onClick={() => {
                setSearch("Hotel Riverside, M19 5FG");
                setFilters({
                  budgetOnly: false,
                  openNow: false,
                  health5: false,
                  spice: "Any",
                });
                setSortBy("Distance");
              }}
              className="w-full bg-white text-black font-semibold py-2 rounded-lg mt-3 hover:bg-gray-200 transition"
            >
              Reset
            </button>
          </div>

          <div
            className="relative flex-1 bg-gray-700 border border-gray-600 rounded-xl overflow-hidden h-[500px]"
            style={{
              backgroundImage: `url(${manchesterMap})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0">
              {filtered.map((place) => (
                <div
                  key={place.id}
                  onMouseEnter={() => setHovered(place)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute w-5 h-5 rounded-full bg-red-500 border-2 border-white cursor-pointer hover:bg-gray-500 transition"
                  style={{
                    left: place.x,
                    top: place.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  title={place.name}
                />
              ))}

              {hovered && (
                <div
                  className="absolute bg-gray-800 text-xs text-white p-3 rounded-lg border border-gray-600 shadow-md z-10"
                  style={{
                    left: hovered.x,
                    top: `calc(${hovered.y} + 30px)`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <p className="font-semibold">{hovered.name}</p>
                  <p>{hovered.address}</p>
                  <p>{hovered.open ? "Open now" : "Closed"}</p>
                  <p>{hovered.health}★ Health Rating</p>
                  <p>Spice: {hovered.spicy}</p>
                </div>
              )}
            </div>

            <p className="absolute bottom-4 left-4 text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-lg">
              Burger map
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
