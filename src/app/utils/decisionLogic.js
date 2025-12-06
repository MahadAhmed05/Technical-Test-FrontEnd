/**
 * Determines weather decision based on the decision table requirements
 * @param {string} condition - Simplified weather condition (e.g., "cloudy", "sunny")
 * @param {number} temperature - Current temperature in Celsius
 * @param {number} threshold - Monthly temperature threshold
 * @param {number} month - Current month (1-12)
 * @returns {string} - "good" or "bad"
 */
export function determineDecision(condition, temperature, threshold, month) {
  // Normalize condition to lowercase for comparison
  const normalizedCondition = condition?.toLowerCase().trim();

  // Helper to check if it's winter (December, January, February)
  const isWinter = month === 12 || month === 1 || month === 2;

  // Sunny / Clear conditions
  if (
    normalizedCondition === "sunny" ||
    normalizedCondition === "clear" ||
    normalizedCondition === "sunny / clear"
  ) {
    return temperature >= threshold ? "good" : "bad";
  }

  // Partly Cloudy
  if (normalizedCondition === "partly cloudy") {
    return temperature >= threshold + 10 ? "good" : "bad";
  }

  // Cloudy / Overcast / Mostly Cloudy
  if (
    normalizedCondition === "cloudy" ||
    normalizedCondition === "overcast" ||
    normalizedCondition === "mostly cloudy" ||
    normalizedCondition === "cloudy / overcast"
  ) {
    // Check if temperature >= 15°C
    if (temperature >= 15) {
      return "good";
    }
    // Check additional conditions
    if (normalizedCondition === "cloudy" && temperature >= threshold + 3) {
      return "good";
    }
    if (
      (normalizedCondition === "overcast" ||
        normalizedCondition === "mostly cloudy" ||
        normalizedCondition === "cloudy / overcast") &&
      temperature >= threshold + 15
    ) {
      return "good";
    }
    return "bad";
  }

  // Drizzle / Light Rain - always bad
  if (
    normalizedCondition === "drizzle" ||
    normalizedCondition === "light rain" ||
    normalizedCondition === "drizzle / light rain"
  ) {
    return "bad";
  }

  // Moderate Rain - always bad
  if (normalizedCondition === "moderate rain") {
    return "bad";
  }

  // Heavy Rain / Thunderstorm / Storm - always bad
  if (
    normalizedCondition === "heavy rain" ||
    normalizedCondition === "thunderstorm" ||
    normalizedCondition === "storm" ||
    normalizedCondition === "heavy rain / thunderstorm / storm"
  ) {
    return "bad";
  }

  // Snow (dry, clear) - good only in winter and T ≤ threshold
  if (
    normalizedCondition === "snow" ||
    normalizedCondition === "snow (dry, clear)"
  ) {
    return isWinter && temperature <= threshold ? "good" : "bad";
  }

  // Sleet / Wet Snow - always bad
  if (
    normalizedCondition === "sleet" ||
    normalizedCondition === "wet snow" ||
    normalizedCondition === "sleet / wet snow"
  ) {
    return "bad";
  }

  // Fog / Dense Moisture - always bad
  if (
    normalizedCondition === "fog" ||
    normalizedCondition === "dense moisture" ||
    normalizedCondition === "fog / dense moisture"
  ) {
    return "bad";
  }

  // Default to bad if condition doesn't match any rule
  return "bad";
}
