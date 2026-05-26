import Card from './Card'
import useFetch from '../hooks/useFetch'

function NewsCard() {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TechCrunch'
  const { data, loading, error } = useFetch(url)

  if (loading) return <Card title="📰 Tech News"><p className="text-gray-400 animate-pulse">Chargement...</p></Card>
  if (error) return <Card title="📰 Tech News"><p className="text-red-400 text-sm">{error}</p></Card>

  return (
    <Card title="📰 Tech News">
      <div className="space-y-3">
        {data?.items?.slice(0, 5).map((article, i) => (
          <a key={i} href={article.link} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
            <p className="text-sm font-medium text-gray-800 line-clamp-2">{article.title}</p>
            <p className="text-xs text-gray-400 mt-1">{new Date(article.pubDate).toLocaleDateString('fr-FR')}</p>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default NewsCard