import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesobj = {
    servicesCollection : "services",
    userCollection : "users",
    bookingCollection : "bookings"
}

export default function dbConnect(collectionName){

    const uri = process.env.MONGODB_URI

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    return client.db(process.env.DB_Name).collection(collectionName)
}