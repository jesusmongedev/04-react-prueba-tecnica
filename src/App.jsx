import { useEffect, useState } from 'react'
import './App.css'
import { getFact } from './services/public.services'
import useCatImageUrl from './hooks/useCatImageUrl'

function App() {
  const [fact, setFact] = useState()
  const { catImg } = useCatImageUrl({ fact })

  const fetchFact = async () => {
    const factResp = await getFact()
    setFact(factResp)
  }

  useEffect(() => {
    fetchFact()
  }, [])

  const handleClick = () => {
    fetchFact()
  }

  return (
    <main>
      <h1>Prueba tecnica Reactjs</h1>
      <div className="cat-card">
        <div className="cat-card__header">
          <h2>Gatito' fact:</h2>
          <button onClick={handleClick}>Get new Fact</button>
        </div>
        <p>{fact}</p>
        <img
          src={catImg}
          alt={`Image from cataas.com using first word from catfact.ninja: ${fact}`}
        />
      </div>
    </main>
  )
}

export default App
