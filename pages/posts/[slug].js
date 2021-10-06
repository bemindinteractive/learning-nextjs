import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  return {
    props: { blogPost: items[0] },
  };
}

export default function Blogdetails({ blogPost }) {
  console.log(blogPost);
  console.log(blogPost.fields.image);
  const { thumbnail, title } = blogPost.fields;
  return (
    <div>
      <div className="blog">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="test"
        />
        <h2 style={{ color: "#0070f3" }}>{title}</h2>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <style jsx>{`
        .blog {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
