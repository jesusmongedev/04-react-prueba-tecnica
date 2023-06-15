import {
  CAT_IMAGE_URL,
  CAT_RANDOM_FACT_URL,
  IMAGE_SIZE,
} from '../constants/general'

export const getFact = async () => {
  const resp = await fetch(`${CAT_RANDOM_FACT_URL}`)
  const { fact } = await resp.json()
  return fact
}

export const getCatImageByTag = async ({ firstThreeFactWord }) => {
  const resp = await fetch(
    `${CAT_IMAGE_URL}/${firstThreeFactWord}?size=${IMAGE_SIZE}&json=true`
  )
  const { url } = await resp.json()
  return url
}
