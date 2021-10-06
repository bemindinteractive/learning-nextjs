import Image from "next/image";
import Link from "next/link";
export default function BLogCard({ blog }) {
  const { title, id, thumbnail } = blog.fields;

  console.log(blog.fields.image.fields.file);
  return (
    <>
      <div className="featured">
        <Image
          className="profile-pics"
          src={"https:" + blog.fields.thumbnail.fields.file.url}
          width={blog.fields.thumbnail.fields.file.details.image.width}
          height={blog.fields.thumbnail.fields.file.details.image.height}
          alt="test"
        />
      </div>
      <Link href={`/pages/${id}`}>
        <a>{title}</a>
      </Link>
    </>
  );
}
