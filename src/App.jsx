import { useEffect, useState } from 'react'
import './App.css'

const CAT_RANDOM_FACT_URL = 'https://catfact.ninja'
const CAT_IMAGE_URL = 'https://cataas.com/cat/says'
const IMAGE_SIZE = 50

function App() {
  const [fact, setFact] = useState()
  const [catImg, setCatImg] = useState('')

  const getFact = async () => {
    const resp = await fetch(`${CAT_RANDOM_FACT_URL}/fact`)
    const data = await resp.json()
    setFact(data.fact)
  }

  useEffect(getFact, [])

  useEffect(() => {
    if (!fact) return
    const { 0: firstFactWord } = fact.split(' ')
    const getCatImageByTag = async () => {
      const catImgResp = await fetch(
        `${CAT_IMAGE_URL}/${firstFactWord}?size=${IMAGE_SIZE}`
      )
      const resp = await catImgResp.blob()
      const url = URL.createObjectURL(resp)
      setCatImg(url)
    }
    getCatImageByTag()
  }, [fact])

  const handleClick = () => {
    getFact()
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
