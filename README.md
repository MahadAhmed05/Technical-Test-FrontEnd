# Weather Decision App

A full-stack Next.js application that fetches weather data and determines whether conditions are "good" or "bad" based on a predefined decision table.

## Features

- 📍 Input latitude and longitude coordinates
- 🌤️ Fetch real-time weather data from backend API
- ✅ Display weather condition, temperature, and monthly threshold
- 🎯 Determine "GOOD" or "BAD" decision based on comprehensive decision logic
- 🎨 Modern, responsive UI with clear visual feedback

## Tech Stack

- **Framework:** Next.js 14.2.15
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4.1
- **Language:** JavaScript

## Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun
- Backend API running on `http://localhost:4000`

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd technical-test
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Make sure your backend API is running on `http://localhost:4000`

## Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── WeatherCard.js      # Displays weather data and decision
│   │   ├── WeatherForm.js      # Form for latitude/longitude input
│   │   └── Loader.js           # Loading component
│   ├── utils/
│   │   ├── api.js              # API client for backend communication
│   │   └── decisionLogic.js    # Decision table implementation
│   ├── page.js                 # Main page component
│   └── globals.css             # Global styles
```

## API Integration

The frontend communicates with the backend API endpoint:

```
GET http://localhost:4000/api/v1/weather/get-weather?lat={latitude}&lon={longitude}
```

### Expected Response Format:

```json
{
  "temperature": 7,
  "rawCondition": "Stark bewölkt",
  "simplifiedCondition": "cloudy",
  "month": 12,
  "threshold": 16,
  "decision": "bad"
}
```

## Decision Logic

The application implements a comprehensive decision table that evaluates weather conditions based on:

- **Weather Condition:** Sunny, Cloudy, Rain, Snow, Fog, etc.
- **Temperature:** Current temperature in Celsius
- **Monthly Threshold:** Temperature threshold for the current month
- **Season:** Winter months (December, January, February) have special rules for snow

The decision logic is implemented in `src/app/utils/decisionLogic.js` and handles various combinations of conditions and temperature thresholds to determine if weather is "good" or "bad".

### Example Decision Rules:

- **Sunny/Clear:** Good if temperature ≥ monthly threshold
- **Partly Cloudy:** Good if temperature ≥ threshold + 10°C
- **Cloudy:** Good if temperature ≥ 15°C or temperature ≥ threshold + 3°C
- **Rain:** Always bad
- **Snow:** Good only in winter when temperature ≤ threshold

## Usage

1. Enter latitude and longitude coordinates in the form
2. Click "Check Weather"
3. View the weather details and decision result
   - **Green** indicates "GOOD" weather
   - **Red** indicates "BAD" weather

## Error Handling

The application gracefully handles:

- Network errors
- Invalid API responses
- Missing data fields
- Backend server errors

Errors are displayed in a user-friendly format with clear messaging.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project for technical assessment.
