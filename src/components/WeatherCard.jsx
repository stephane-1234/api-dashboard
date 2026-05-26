import Card from './Card'
import useFetch from '../hooks/useFetch'

function Stat({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-center">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-semibold text-gray-700">{value}</p>
    </div>
  )
}

function WeatherCard() {
  const city = 'Montreal'
  const key = import.meta.env.VITE_OPENWEATHER_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=fr`
  const { data, loading, error } = useFetch(url)

  if (loading) return (
    <Card title="🌤️ Météo — Montréal">
      <p className="text-gray-400 animate-pulse">Chargement...</p>
    </Card>
  )

  if (error) return (
    <Card title="🌤️ Météo — Montréal">
      <p className="text-red-400 text-sm">{error}</p>
    </Card>
  )

  return (
    <Card title="🌤️ Météo — Montréal">
      <div className="flex items-center gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-16 h-16"
        />
        <div>
          <p className="text-4xl font-bold text-gray-800">{Math.round(data.main.temp)}°C</p>
          <p className="text-gray-500 capitalize">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        <Stat label="Ressenti" value={`${Math.round(data.main.feels_like)}°C`} />
        <Stat label="Humidité" value={`${data.main.humidity}%`} />
        <Stat label="Vent" value={`${Math.round(data.wind.speed)} m/s`} />
      </div>
    </Card>
  )
}

export default WeatherCard