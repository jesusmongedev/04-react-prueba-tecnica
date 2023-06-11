import { useEffect, useState } from 'react'
import { getFact } from '../services/public.services'

export default function useRandomCatFact() {
  const [fact, setFact] = useState()

  const fetchFact = async () => {
    const factResp = await getFact()
    setFact(factResp)
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return { fact, fetchFact }
}
