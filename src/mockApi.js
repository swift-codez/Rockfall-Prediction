
// This file contains mock data that simulates a backend API response.
// In a real application, you would fetch this data from a server.

export const mockApiResponse = {
  map: "/maps/mine123.png", // In a real app, this might be a full URL
  sites: {
    "ABC": { "x": "30%", "y": "40%", "history": [0.2, 0.3, 0.25, 0.28] },
    "DEF": { "x": "50%", "y": "60%", "history": [0.7, 0.75, 0.72, 0.78] },
    "GHI": { "x": "70%", "y": "20%", "history": [0.5, 0.55, 0.58, 0.62] },
    "JKL": { "x": "20%", "y": "75%", "history": [0.1, 0.15, 0.12, 0.14] },
    "MNO": { "x": "80%", "y": "50%", "history": [0.4, 0.35, 0.42, 0.38] },
  }
};

// We'll also need a mock map image. In a real app, this would be hosted on a server.
// For this example, we'll create a placeholder.
// In a real scenario, you would have a file at /public/maps/mine123.png
