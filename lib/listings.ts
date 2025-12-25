import { db } from "./firebase"
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore"

export async function getListings(category?: string) {
  let q = query(collection(db, "listings"), orderBy("createdAt", "desc"))

  if (category) {
    q = query(
      collection(db, "listings"),
      where("category", "==", category),
      orderBy("createdAt", "desc")
    )
  }

  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function addListing(data: any) {
  await addDoc(collection(db, "listings"), {
    ...data,
    createdAt: Timestamp.now(),
    vip: false,
  })
}