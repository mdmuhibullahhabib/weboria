import clientPromise from "@/lib/dbconnect";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("weboria");
  const services = await db.collection("services").find({}).toArray();
  res.status(200).json(services);
}

// export const GET = async (req) => {
//     const session = await getServerSession(authOptions)
//     if (session) {
//         const email = session?.user?.email
//         const bookingCollection = dbConnect(collectionNamesobj.bookingCollection)
//         const result = await bookingCollection.find({ email }).toArray()

//         return NextResponse.json(result)
//     }
//     return NextResponse.json({})
// }