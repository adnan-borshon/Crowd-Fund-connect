import React, { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacy = async () => {
      try {
        setLoading(true);
        const response = await fetch("/API/privacyPolicy.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPrivacyData(data);
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrivacy();
  }, []);

  if (loading) return <p className="p-4 bg-black text-white w-screen h-screen flex justify-center items-center">Loading privacy policy...</p>;
  if (!privacyData) return <p className="p-4 bg-black text-white w-screen h-screen flex justify-center items-center">Failed to load privacy policy.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{privacyData.title}</h1>
      <p className="text-sm text-gray-400 mb-6 ">
        Last updated: {privacyData.lastUpdated}
      </p>
      {privacyData.sections.map((sec) => (
        <section key={sec.id} className="mb-4">
          <h2 className="text-xl font-semibold">{sec.title}</h2>
          <p className="text-gray-700 dark:text-[#348cff]">{sec.content}</p>
        </section>
      ))}
    </div>
  );
}
