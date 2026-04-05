// Sanity client
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'ix45pdgt',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Query helper
export async function getDocuments(type) {
  return sanityClient.fetch(`*[_type == "${type}"] | order(_createdAt desc)`);
}

export async function getDocument(type, id) {
  return sanityClient.fetch(`*[_type == "${type}" && _id == $id][0]`, { id });
}