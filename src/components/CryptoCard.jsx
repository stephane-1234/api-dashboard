import Card from './Card'
import useFetch from '../hooks/useFetch'

function CryptoCard() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc'
  const { data, loading, error } = useFetch(url)

  if (loading) return (
    <Card title="💰 Crypto">
      <p className="text-gray-400 animate-pulse">Chargement...</p>
    </Card>
  )

  if (error) return (
    <Card title="💰 Crypto">
      <p className="text-red-400 text-sm">{error}</p>
    </Card>
  )

  return (
    <Card title="💰 Crypto">
      <div className="space-y-3">
        {data?.map(coin => (
          <div key={coin.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={coin.image} alt={coin.name} className="w-8 h-8" />
              <div>
                <p className="font-semibold text-gray-800">{coin.name}</p>
                <p className="text-xs text-gray-400">{coin.symbol.toUpperCase()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">${coin.current_price.toLocaleString()}</p>
              <p className={`text-xs font-medium ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.price_change_percentage_24h > 0 ? '▲' : '▼'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default CryptoCard