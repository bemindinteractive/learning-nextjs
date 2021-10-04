import Image from "next/image";

export default function BLogCard({ recipe }) {
  // const { title, slug, thumbnail } = recipe.fields;

  console.log(recipe.fields.image.fields.file);

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + recipe.fields.image.fields.file.url}
            width={recipe.fields.image.width}
            height={recipe.fields.image.height}
          layout="fill"
          alt="test"
        />
        <style jsx>{`
          .card {
            
        `}</style>

      </div>
    </div>
  );
}
