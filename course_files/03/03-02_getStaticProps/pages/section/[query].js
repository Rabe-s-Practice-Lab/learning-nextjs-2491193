import Link from "next/link";
import { handler } from "../api";

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";

export default function Section({ results, query }) {
  return (
    <div>
      <h1> Section: {query} </h1>
      <ul>
        {results?.map((post) => (
          <a href={`section/${post.url}`} target="_blank">
            <li>{post.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log("query", params.query);
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${params.query}.json?api-key=${API_KEY}`
  );

  return {
    props: {
      results,
      query: params.query,
    },
  };
}
