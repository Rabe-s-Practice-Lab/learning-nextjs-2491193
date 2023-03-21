import Link from "next/link";
import { handler } from "../api";

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";

export default function Section({ results }) {
  return (
    <div>
      <h1> About {results.length} results </h1>
      <ul>
        {results?.map((post) => (
          <Link href={`section/${post.section}`}>
            <li>{post.display_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
  );
  return {
    props: {
      results,
    },
  };
}
