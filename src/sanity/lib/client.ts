import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "tpu2uubw",
  dataset: "production",
  apiVersion: "2024-12-26",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
