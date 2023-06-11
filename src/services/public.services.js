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
  const catImgResp = await fetch(
    `${CAT_IMAGE_URL}/${firstThreeFactWord}?size=${IMAGE_SIZE}`
  )
  const resp = await catImgResp.blob()
  const url = URL.createObjectURL(resp)
  return url
}
