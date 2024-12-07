import dbConnect from '@/lib/dbConnect';
import govScheme from '@/model/gov-schemes';

export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch data from the 'gov-schemes' collection
    const schemes = await govScheme.find({});

    // Return the fetched data as JSON
    return Response.json(schemes, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors gracefully
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
