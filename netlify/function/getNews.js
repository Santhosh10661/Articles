const fetch = require("node-fetch");

exports.handler = async (event) => {
  const categories = ["general", "business", "sports", "technology"];
  const API_KEY = "2d5475b1c03e42418d72eaa35aca9372"; // Keep this secret in env variables

  try {
    const results = await Promise.all(
      categories.map(async (cat) => {
        const API = `https://newsapi.org/v2/everything?q=${cat}&apiKey=${API_KEY}`;
        const res = await fetch(API);
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

    return {
      statusCode: 200,
      body: JSON.stringify(categorizedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch news",
        details: error.message,
      }),
    };
  }
};
