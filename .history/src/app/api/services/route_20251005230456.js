import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

// GET /api/services
export const GET = async (req) => {
  try {
    const servicesCollection = dbConnect(collectionNamesobj.servicesCollection);
    const services = await servicesCollection.find({}).toArray();

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
};


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