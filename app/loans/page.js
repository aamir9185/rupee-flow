"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FetchLoans() {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/api/get-loan");
        console.log("Response Data:", response.data);
        setLoans(response.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Loans</h1>
      {loans.length === 0 ? (
        <p>No loans found</p>
      ) : (
        <ul className="space-y-4">
          {loans.map((loan) => (
            <motion.li
              key={loan._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {loan.loan_name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Interest Rate</h3>
                  <p className="text-gray-600">{loan.interest_rate}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Maximum Amount</h3>
                  <p className="text-gray-600">{loan.max_amount}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Loan Tenure</h3>
                  <p className="text-gray-600">{loan.loan_tenure}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Eligibility</h3>
                  <ul className="text-gray-600 list-disc pl-4">
                    <li>Age: {loan.eligibility.age}</li>
                    <li>Income: {loan.eligibility.income}</li>
                    <li>Experience: {loan.eligibility.work_experience}</li>
                    <li>Credit Score: {loan.eligibility.credit_score}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Documents Required</h3>
                  <ul className="text-gray-600 list-disc pl-4">
                    {loan.documents_required.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Special Features</h3>
                  <ul className="text-gray-600 list-disc pl-4">
                    {loan.special_features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
