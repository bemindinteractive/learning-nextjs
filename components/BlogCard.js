// import Image from "next/image";
import Link from 'next/link'
export default function BLogCard({ recipe }) {
   const { title, slug, thumbnail } = recipe.fields;

  console.log(recipe.fields.image.fields.file);
  //  console.log(recipe);
  return (
    <>
      <div className="featured">
        {/* <Image
            src={"https:" + recipe.fields.image.fields.file.url}
            width={recipe.fields.image.fields.file.details.image.width}
            height={recipe.fields.image.fields.file.details.image.height}
            alt="test"
          /> */}
        <img className="profile-pics" src={"https:" + recipe.fields.image.fields.file.url} alt="test" />
      </div>
      <Link href={`/posts/${slug}`}><a>{title}</a></Link>
    </>
  );
}
