import dbConnect from '@/lib/dbConnect';
import govScheme from '@/model/gov-schemes';

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const data = await req.json();

    // Insert the provided data into the 'gov-schemes' collection
    const result = await govScheme.insertMany(data);

    // Return the inserted data as JSON
    return new Response(
      JSON.stringify({ message: 'Data inserted successfully', inserted: result }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // Handle errors gracefully
    console.log("failed to insert data",error.message)
    return new Response(
      JSON.stringify({ error: 'Failed to insert data', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
