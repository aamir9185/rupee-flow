import dbConnect from "@/lib/dbConnect";
import Loan from "@/model/loan";
export async function GET() {
    try {
      console.log("Attempting database connection...");
      await dbConnect();
      
      console.log("Connected to database, attempting to fetch loans...");
      const loans = await Loan.find({});
      
      console.log("Loans fetched successfully:", loans.length);
      return Response.json(loans, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error("Error details:", error);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch loans', details: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  
  