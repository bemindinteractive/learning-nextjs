import Image from "next/image";
import Link from 'next/link'
export default function BLogCard({ recipe }) {
   const { title, slug, thumbnail } = recipe.fields;

  console.log(recipe.fields.image.fields.file);
  //  console.log(recipe);
  return (
    <div>
      <div className='recipe-list'>
        <Image
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            alt="test"
          />
      </div>
      <Link href={`/posts/${slug}`}><a>{title}</a></Link>

    </div>
  );
}
