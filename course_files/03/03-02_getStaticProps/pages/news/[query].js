import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { search } from "../api";

export default function News({ results, query }) {
  return (
    <Layout>
      <h1>Searh Value: {query}</h1>
      <ul>
        {results.map((post) => (
          <li key={post.url}>
            <a href={post.url} target="_blank" style={{ color: "blue" }}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// to register for a new New York Times API KEY, visit :
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";

export async function getServerSideProps({ params }) {
  // The value of the `props` key will be
  // passed to the `News` component
  // Url params is an object containing the query params
  const results = await search(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`
  );
  return {
    props: {
      results,
      query: params.query,
    },
  };
}
