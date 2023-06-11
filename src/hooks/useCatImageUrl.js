import { useEffect, useState } from 'react'
import { getCatImageByTag } from '../services/public.services'

export default function useCatImageUrl({ fact }) {
  const [catImg, setCatImg] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstThreeFactWord = fact.split(' ', 3).join(' ')
    const fetchCatImageByTag = async () => {
      const catImgResp = await getCatImageByTag({ firstThreeFactWord })
      setCatImg(catImgResp)
    }
    fetchCatImageByTag()
  }, [fact])

  return { catImg }
}
