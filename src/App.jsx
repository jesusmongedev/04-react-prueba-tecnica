import './App.css'
import { useCatImageUrl, useRandomCatFact } from './hooks'
function App() {
  const { fact, fetchFact } = useRandomCatFact()
  const { imgUrl } = useCatImageUrl({ fact })

  const handleClick = () => {
    fetchFact()
  }

  return (
    <main>
      <h1>Prueba tecnica Reactjs </h1>
      <div className="cat-card">
        <div className="cat-card__header">
          <h2>Gatito' fact:</h2>
          <button onClick={handleClick}>Get new Fact</button>
        </div>
        <p>{fact}</p>
        <img
          src={imgUrl}
          alt={`Image from cataas.com using first word from catfact.ninja: ${fact}`}
        />
      </div>
    </main>
  )
}

export default App
