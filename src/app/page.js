"use client";

import { useState } from "react";
import WeatherForm from "./components/WeatherForm.js";
import WeatherCard from "./components/WeatherCard.js";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Weather Decision App
      </h1>

      <WeatherForm setWeatherData={setWeatherData} setLoading={setLoading} />

      {loading && (
        <p className="mt-6 text-lg text-gray-600 font-medium">Loading...</p>
      )}

      {weatherData && !loading && <WeatherCard data={weatherData} />}
    </div>
  );
}
