import { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';

interface WeatherData {
  temperature: number;
  weathercode: number;
}

const weatherDescriptions: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with heavy hail'
};

const getIcon = (code: number) => {
  if ([61, 63, 65, 80, 81, 82].includes(code)) return <CloudRain className="h-6 w-6" />;
  if ([71, 73, 75, 85, 86].includes(code)) return <Snowflake className="h-6 w-6" />;
  if ([0, 1].includes(code)) return <Sun className="h-6 w-6" />;
  return <Cloud className="h-6 w-6" />;
};

const Weather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not available.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const json = await res.json();
          setData(json.current_weather as WeatherData);
        } catch (e) {
          setError('Failed to fetch weather data.');
        }
      },
      () => {
        setError('Unable to retrieve your location.');
      }
    );
  }, []);

  return (
    <section id="weather" className="py-20 bg-white">
      <div className="section-container text-center">
        <h2 className="section-title">Weather</h2>
        <p className="section-subtitle">Current Conditions</p>
        {!data && !error && <p className="text-muted-foreground">Loading...</p>}
        {error && <p className="text-muted-foreground">{error}</p>}
        {data && (
          <div className="mt-6 flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center space-x-2 text-2xl font-semibold">
              {getIcon(data.weathercode)}
              <span>{Math.round(data.temperature)}&deg;C</span>
            </div>
            <p className="text-muted-foreground">
              {weatherDescriptions[data.weathercode] || 'Unknown'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
