type Props = {
  listing: {
    id: string
    title: string
    price: number
    city: string
    image: string
  }
}

export default function ListingCard({ listing }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-zinc-900 text-white">
      <img
        src={listing.image}
        alt={listing.title}
        className="rounded mb-2"
      />
      <h3 className="font-semibold">{listing.title}</h3>
      <p>{listing.price.toLocaleString()} ₽</p>
      <span className="text-sm text-zinc-400">{listing.city}</span>
    </div>
  )
}