import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2",
//   params: { url: "https://time.com/6266679/musk-ai-open-letter", length: "3" },

//   headers: {
//     "x-RapidAPI-host": "article-extractor-and-summarizer.p.rapidapi.com",
//     "x-RapidAPI-key": "9b6c573013mshd0a95407ca58d96p1a1fb2jsna2784c3be30f",
//   },
// };
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-RapidAPI-key", rapidApiKey);
      headers.set(
        "x-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }), // <-- you need this
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
