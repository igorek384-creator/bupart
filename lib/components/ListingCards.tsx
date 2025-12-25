import Link from "next/link"

export default function ListingCard({ item }: any) {
  return (
    <Link href={`/listing/${item.id}`} className="card">
      <img src={item.image} />
      <h3>{item.title}</h3>
      <p>{item.price} ₽</p>
    </Link>
  )
}