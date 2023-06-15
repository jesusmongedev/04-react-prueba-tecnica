import { useEffect, useState } from 'react'
import { getCatImageByTag } from '../services/public.services'
import { CAT_PREFIX_IMAGE_URL } from '../constants/general'

export default function useCatImageUrl({ fact }) {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstThreeFactWord = fact.split(' ', 3).join(' ')
    const fetchCatImageByTag = async () => {
      const imgUrlResp = await getCatImageByTag({ firstThreeFactWord })
      setImgUrl(imgUrlResp)
    }
    fetchCatImageByTag()
  }, [fact])

  return { imgUrl: `${CAT_PREFIX_IMAGE_URL}${imgUrl}` }
}
