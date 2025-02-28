import fetch from "node-fetch";

export async function handler() {
  const categories = ["general", "business", "sports", "technology"];
  const API_KEY = process.env.NEWS_API_KEY; // Use Netlify env variables

  try {
    console.log("Fetching news...");

    const results = await Promise.all(
      categories.map(async (cat) => {
        const API = `https://newsapi.org/v2/everything?q=${cat}&apiKey=${API_KEY}`;
        const res = await fetch(API);

        // Log response details for debugging
        console.log(`Response for ${cat}:`, res.status, res.statusText);

        if (!res.ok) {
          throw new Error(
            `Failed to fetch ${cat}: ${res.status} - ${res.statusText}`
          );
        }

        const data = await res.json();

        return {
          category: cat,
          articles: data.articles.map((art, index) => ({
            ...art,
            id: `${cat}-${index + 1}`,
          })),
        };
      })
    );

    const categorizedData = results.reduce((acc, item) => {
      acc[item.category] = item.articles;
      return acc;
    }, {});

    console.log("Successfully fetched news:", categorizedData);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json", // Ensure JSON response
      },
      body: JSON.stringify(categorizedData),
    };
  } catch (error) {
    console.error("News API Fetch Error:", error.message);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Failed to fetch news",
        details: error.message,
      }),
    };
  }
}
