import { useState, useEffect } from 'react'
import axios from 'axios'

export default function InTheNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async (query = 'occupational medicine') => {
    try {
      setLoading(true)
      const response = await axios.post('/.netlify/functions/news', { query })
      setNews(response.data.articles || [])
      setError(null)
    } catch (err) {
      setError('Unable to fetch news at this time. Please try again later.')
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      fetchNews(searchQuery)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-brand-darkblue mb-8">In the News</h1>

      <form onSubmit={handleSearch} className="mb-12">
        <div className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search occupational medicine news..."
            className="input-teal flex-1"
          />
          <button
            type="submit"
            className="btn-primary"
          >
            Search
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal"></div>
          </div>
          <p className="text-brand-teal mt-4 font-semibold">Loading latest news...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-2 border-red-300 text-red-800 px-4 py-4 rounded-lg mb-8">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && news.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No articles found. Try a different search.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23f0f9ff" width="400" height="200"/%3E%3C/svg%3E'
                }}
              />
            )}
            <div className="p-6">
              <p className="text-sm text-brand-teal font-semibold mb-2">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
              <h3 className="text-lg font-bold text-brand-darkblue mb-2 group-hover:text-brand-teal transition">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-2">
                {article.description}
              </p>
              <p className="text-sm text-gray-600">
                {article.source.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
