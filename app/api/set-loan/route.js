import dbConnect from '@/lib/dbConnect';
import Loan from '@/model/loan';

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const data = await req.json();

    // Check if data is an array (for multiple loans) or single object
    const isArray = Array.isArray(data.loans);
    
    let result;
    if (isArray) {
      // Insert multiple loans
      result = await Loan.insertMany(data.loans);
    } else {
      // Insert single loan
      result = await Loan.create(data);
    }

    // Return the inserted data as JSON
    return new Response(
      JSON.stringify({ message: 'Loans inserted successfully', inserted: result }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // Handle errors gracefully
    console.log("Failed to insert loans:", error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to insert loans', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
