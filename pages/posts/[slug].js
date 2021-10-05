import Image from "next/image";
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
  return (
    <>
      <h1>{blogPost.fields.title}</h1>
      <Image
        src={`https:${blogPost.fields.image.fields.file.url}`}
        width={blogPost.fields.image.fields.file.details.image.width}
        height={blogPost.fields.image.fields.file.details.image.height}
        alt="test"
      />
    </>
  );
}
