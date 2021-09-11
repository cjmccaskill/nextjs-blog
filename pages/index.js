import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <strong>Who Am I?</strong>
        </p>
        <p>
          That's hard to describe. First and foremost, I'm a maker. I love
          building things with naivety, blissfully unaware of the real world. I
          dream of a life where everyone can do that with no repercussions.
        </p>
        <p>
          However, I'm also a realist. My current work focuses on building apps
          that will forever change the way people see the world, and use the
          internet. I strive to make a difference in this world, by shaking
          things up and leaving my mark on the world.
        </p>
        <p>
          You can reach out to me on{" "}
          <a href="https://twitter.com/cjmccaskill">Twitter</a>
        </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
