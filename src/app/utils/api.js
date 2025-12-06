import { determineDecision } from "./decisionLogic";

export async function fetchWeatherDecision(lat, lon) {
  try {
    const res = await fetch(
      `http://localhost:4000/api/v1/weather/get-weather?lat=${lat}&lon=${lon}`
    );

    if (!res.ok) {
      const errorMsg = await res.text();
      throw new Error(errorMsg || "Failed to fetch weather data from server");
    }

    const data = await res.json();

    // Apply frontend decision logic based on the decision table
    // Backend returns: temperature, rawCondition, simplifiedCondition, month, threshold, decision
    const frontendDecision = determineDecision(
      data.simplifiedCondition,
      data.temperature,
      data.threshold,
      data.month
    );

    // Return formatted data for the frontend components
    return {
      temperature: data.temperature,
      weatherCondition: data.rawCondition || data.simplifiedCondition,
      simplifiedCondition: data.simplifiedCondition,
      month: data.month,
      threshold: data.threshold,
      decision: frontendDecision,
    };
  } catch (error) {
    console.error("Frontend fetch error:", error.message);
    // Return an error object instead of default BAD
    return {
      error: true,
      message: "Unable to fetch weather data. Please try again later.",
    };
  }
}
