import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export default async function handler(req, res) {
  try {
    const collection = dbConnect(collectionNamesobj.servicesCollection);
    const services = await collection.find({}).toArray();
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database connection failed" });
  }
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