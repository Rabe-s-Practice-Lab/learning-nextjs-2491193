import Layout from "../../components/Layout";
import { handler } from "../api";

export default function News({ results }) {
  return (
    <Layout>
      <h1> Top Stories</h1>
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

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";
/* 
  export async function getStaticProps() {
    // The value of the `props` key will be
    //  passed to the `News` component

    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.results);

    return {
      props: {
        results: data.results,
      },
    };
  }
*/

export async function getStaticProps() {
  const result = await handler(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  );
  return {
    props: {
      results: result,
    },
  };
}
