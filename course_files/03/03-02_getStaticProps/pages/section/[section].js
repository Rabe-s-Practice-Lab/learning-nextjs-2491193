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
            <li stlyle={{ color: "blue" }}>{post.title}</li>
            <p>{post.abstract}</p>
          </a>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log("query", params.section);
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`
  );

  return {
    props: {
      results,
      query: params.section,
    },
  };
}
