import WeatherCard from './components/WeatherCard'
import NewsCard from './components/NewsCard'
import CryptoCard from './components/CryptoCard'
import JokeCard from './components/JokeCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-600">📊 Mon Dashboard</h1>
          <p className="text-sm text-gray-400">
            {new Date().toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <WeatherCard />
          <CryptoCard />
          <NewsCard />
          <JokeCard />
        </div>
      </main>
    </div>
  )
}

export default App