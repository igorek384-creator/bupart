import { getListings } from "@/lib/listings"
import ListingCard from "@/components/ListingCards"

export default async function Home() {
  const listings = await getListings()

  return (
    <div className="grid">
      {listings.map((item: any) => (
        <ListingCard key={item.id} item={item} />
      ))}
    </div>
  )
}