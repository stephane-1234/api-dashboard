# API Dashboard

Dashboard React affichant des données en temps réel depuis plusieurs APIs externes.

## Technologies

- **React** — bibliothèque UI
- **Vite** — outil de build
- **Tailwind CSS** — styles
- **Hook useFetch** — gestion des appels API réutilisable

## Widgets

| Widget | API | Description |
|--------|-----|-------------|
| 🌤️ Météo | OpenWeatherMap | Météo en temps réel à Montréal |
| 💰 Crypto | CoinGecko | Prix Bitcoin, Ethereum, Solana |
| 📰 Tech News | RSS2JSON + TechCrunch | Actualités tech en temps réel |
| 😄 Blague | JokeAPI | Blague aléatoire avec bouton refresh |

## Installation

```bash
git clone https://github.com/stephane-1234/api-dashboard.git
cd api-dashboard
npm install
```

Crée un fichier `.env` à partir de `.env.example` :

```env
VITE_OPENWEATHER_KEY=ta_clé_openweather
VITE_NEWS_KEY=ta_clé_newsapi
```

Lance le projet :

```bash
npm run dev
```

Ouvre `http://localhost:5173`

## Notes

- CoinGecko et JokeAPI ne nécessitent pas de clé API
- NewsAPI est remplacé par RSS2JSON pour éviter les restrictions CORS en développement
