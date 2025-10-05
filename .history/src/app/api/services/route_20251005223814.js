
export const GET = async (req) => {
    const session = await getServerSession(authOptions)
    if (session) {
        const email = session?.user?.email
        const bookingCollection = dbConnect(collectionNamesobj.bookingCollection)
        const result = await bookingCollection.find({ email }).toArray()

        return NextResponse.json(result)
    }
    return NextResponse.json({})
}