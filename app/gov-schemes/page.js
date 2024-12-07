"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchGovSchemes() {
  const [schemes, setSchemes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/get-schemes");
        console.log("Response Data:", response.data);
        setSchemes(response.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Government Schemes</h1>
      {schemes.length === 0 ? (
        <p>No schemes found</p>
      ) : (
        <ul className="space-y-4">
          {schemes.map((scheme) => (
            <li 
              key={scheme._id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {scheme.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {scheme.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Eligibility</h3>
                  <p className="text-gray-600">{scheme.eligibility}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Benefits</h3>
                  <p className="text-gray-600">{scheme.benefits}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
