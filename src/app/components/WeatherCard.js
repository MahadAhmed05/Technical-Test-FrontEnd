"use client";

export default function WeatherCard({ data }) {
  if (!data) return null;

  // Handle error from API
  if (data.error) {
    return (
      <div className="mt-6 bg-red-50 p-6 rounded-lg shadow-lg w-full max-w-md border-2 border-red-200">
        <h2 className="text-2xl font-bold mb-3 text-red-700">Error</h2>
        <p className="text-red-800 text-base">{data.message}</p>
      </div>
    );
  }

  const { weatherCondition, temperature, threshold, decision } = data;

  const decisionColor = decision === "good" ? "text-green-700" : "text-red-700";
  const decisionBgColor =
    decision === "good"
      ? "bg-green-50 border-green-200"
      : "bg-red-50 border-red-200";

  return (
    <div
      className={`mt-6 p-6 rounded-lg shadow-lg w-full max-w-md border-2 ${decisionBgColor}`}
    >
      <h2 className="text-2xl font-bold mb-5 text-gray-800">Weather Details</h2>
      <div className="space-y-3">
        <p className="text-gray-700">
          <span className="font-semibold text-gray-800">Condition:</span>{" "}
          <span className="text-gray-900">{weatherCondition}</span>
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-800">Temperature:</span>{" "}
          <span className="text-gray-900 font-medium">{temperature}°C</span>
        </p>
        {threshold !== undefined && (
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">
              Monthly Threshold:
            </span>{" "}
            <span className="text-gray-900 font-medium">{threshold}°C</span>
          </p>
        )}
      </div>
      <div
        className={`mt-5 pt-4 border-t-2 ${
          decision === "good" ? "border-green-300" : "border-red-300"
        }`}
      >
        <p className={`${decisionColor} font-bold text-xl`}>
          Decision: {decision.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
