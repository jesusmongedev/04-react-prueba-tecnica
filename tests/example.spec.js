// @ts-check
import { test, expect } from '@playwright/test'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const PAGE_TO_VISIT = 'http://localhost:5173/'
const PAGE_TO_VISIT2 = 'https://playwright.dev/'

//TODO: TRY CYPRESS E2E TESTING
test('has title', async ({ page }) => {
  await page.goto(PAGE_TO_VISIT)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CatApp/)
})

test('has cat fact', async ({ page }) => {
  await page.goto(PAGE_TO_VISIT)

  const paragraph = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await paragraph?.textContent()
  const imageSrc = await image?.getAttribute('src')

  console.log({ textContent, imageSrc })

  // Expect a title "to contain" a substring.
  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeGreaterThan(0)
})

test('has title playwright', async ({ page }) => {
  await page.goto(PAGE_TO_VISIT2)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Play/)
})
