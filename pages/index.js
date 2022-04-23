import Head from "next/head";
import Article from "../components/Article";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>TechCrunch News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <Article articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEXT_PUBLIC_DEMO_VARIABLE}`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
