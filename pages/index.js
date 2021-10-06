// import Head from "next/head";
//import Layout from "../components/layout";
// import utilStyles from "../styles/utils.module.css";
// import Link from "next/link";
//  import Date from "../components/date";
// import { getSortedPostsData } from "../lib/posts";
import { createClient } from "contentful";
import BLogCard from "../components/BlogCard";

// export function getStaticProps() {
//   const allPostsData = getSortedPostsData();

//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Recipes({ blogs }) {
  return (
    <>
      <div className="recipe-list">
        {blogs.map((blog) => (
          <BLogCard key={blog.sys.id} recipe={blog} />
        ))}
      </div>
    </>
  )
}
