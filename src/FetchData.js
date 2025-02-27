import { setData } from "./redux/app/slices/dataReducer";

export const FetchData = async (dispatch) => {
  const categories = ["general", "business", "sports", "technology"];

  try {
    // Fetch all categories in parallel using Promise.all
    const results = await Promise.all(
      categories.map(async (cat) => {
        const API = `https://newsapi.org/v2/everything?q=${cat}&apiKey=2d5475b1c03e42418d72eaa35aca9372`;

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

    // Convert the results array into an object with category keys
    const categorizedData = results.reduce((acc, item) => {
      acc[item.category] = item.articles;
      return acc;
    }, {});

    dispatch(setData(categorizedData));
    sessionStorage.setItem("data", JSON.stringify(categorizedData));
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
