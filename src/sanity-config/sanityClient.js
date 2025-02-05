import { createClient } from "@sanity/client";


const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Replace with your Sanity project ID
  dataset: import.meta.env.VITE_SANITY_DATASET,       // Replace with your dataset (e.g., "production")
  apiVersion: "2024-12-18",    // Use the latest API version
  useCdn: true,                // Set to false to ensure fresh data during development
});

export default client;
