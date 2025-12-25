import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

export default async function ListingPage({ params }: any) {
  const ref = doc(db, "listings", params.id)
  const snap = await getDoc(ref)
  const item: any = snap.data()

  return (
    <div>
      <img src={item.image} className="image" />
      <h1>{item.title}</h1>
      <p>{item.price} ₽</p>
      <p>{item.city}</p>
    </div>
  )
}