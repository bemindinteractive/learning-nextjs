import Image from 'next/image'

export default function BLogCard({ blog }) {
    const { title, slug, thumbnail } = blog.fields

    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </div>
        </div>
    )
}