import Link from 'next/link'
import Image from 'next/image'
<<<<<<< HEAD

export default function RecipeCard({ recipe }) {
=======

export default function RecipeCard({ recipe }) {

>>>>>>> 9d30075eb44e3ae13b614ba68a45933563f9caea
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div  className="featured">
                <Image 
                    src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
<<<<<<< HEAD
            </div>    
=======
            </div>         
>>>>>>> 9d30075eb44e3ae13b614ba68a45933563f9caea
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Take approx {cookingTime} mins to make</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
        </div>
    )
}
