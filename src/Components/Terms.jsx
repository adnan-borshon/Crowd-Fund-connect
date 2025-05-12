
import React, { useState, useEffect } from 'react';

export default function TermsPage() {
  const [termsData, setTermsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
const fetchTerms = async()=> {
  try {
   setLoading(true);
    const response = await fetch("/API/terms.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setTermsData(data);
  } catch (error) {
    console.error("Error fetching terms:", error);
  }finally {
    setLoading(false);
  }
}
    fetchTerms();
  }, []);

  if (loading) return <p>Loading terms...</p>;
  if (!termsData) return <p>Failed to load.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{termsData.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: {termsData.lastUpdated}</p>
      {termsData.sections.map((sec) => (
        <section key={sec.id} className="mb-4">
          <h2 className="text-xl font-semibold">{sec.title}</h2>
          <p className="text-gray-700">{sec.content}</p>
        </section>
      ))}
    </div>
  );
}
