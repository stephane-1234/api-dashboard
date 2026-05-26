import Card from './Card'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'

function JokeCard() {
  const [refresh, setRefresh] = useState(0)
  const url = `https://v2.jokeapi.dev/joke/Programming?type=single&r=${refresh}`
  const { data, loading } = useFetch(url)

  return (
    <Card title="😄 Blague du jour">
      <div className="flex flex-col items-center text-center gap-4">
        {loading
          ? <p className="text-gray-400 animate-pulse">Chargement...</p>
          : <p className="text-gray-700 text-lg italic">"{data?.joke || 'Aucune blague trouvée'}"</p>
        }
        <button
          onClick={() => setRefresh(r => r + 1)}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
        >
          Nouvelle blague
        </button>
      </div>
    </Card>
  )
}

export default JokeCard