"use client";

import { useState } from "react";
import { fetchWeatherDecision } from "../utils/api";

export default function WeatherForm({ setWeatherData, setLoading }) {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!lat || !lon) return alert("Please enter latitude and longitude");

    setLoading(true);
    const data = await fetchWeatherDecision(lat, lon);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-200"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="latitude"
          className="text-sm font-semibold text-gray-700"
        >
          Latitude
        </label>
        <input
          id="latitude"
          type="text"
          placeholder="e.g., 48.1663"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="longitude"
          className="text-sm font-semibold text-gray-700"
        >
          Longitude
        </label>
        <input
          id="longitude"
          type="text"
          placeholder="e.g., 11.5683"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 placeholder:text-gray-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg mt-2"
      >
        Check Weather
      </button>
    </form>
  );
}
