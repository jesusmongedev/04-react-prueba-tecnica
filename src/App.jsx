import { useEffect, useState } from 'react'
import './App.css'

const CAT_RANDOM_FACT_URL = 'https://catfact.ninja'
const CAT_IMAGE_URL = 'https://cataas.com/cat/says'
const IMAGE_SIZE = 50

function App() {
  const [fact, setFact] = useState('')
  const [catImg, setCatImg] = useState('')

  const { 0: firstFactWord } = fact?.split(' ')

  useEffect(() => {
    const getFact = async () => {
      const resp = await fetch(`${CAT_RANDOM_FACT_URL}/fact`)
      const data = await resp.json()
      setFact(data.fact)
    }
    getFact()
  }, [])

  useEffect(() => {
    if (firstFactWord) {
      const getCatImageByTag = async () => {
        const catImgResp = await fetch(
          `${CAT_IMAGE_URL}/${firstFactWord}?size=${IMAGE_SIZE}`
        )
        const resp = await catImgResp.blob()
        const url = URL.createObjectURL(resp)
        setCatImg(url)
      }
      getCatImageByTag()
    }
  }, [firstFactWord])

  return (
    <main>
      <h1>Prueba tecnica React js</h1>
      <h2>Gatito' fact:</h2>
      <div>
        <p>{fact}</p>
        <img src={catImg} alt={firstFactWord} />
      </div>
    </main>
  )
}

export default App
