import React, { useEffect, useState } from "react";
import {
  EnglishUrl,
  HTML_CSSUrl,
  javascriptbaseurl,
  nodebaseurl,
  reactbaseurl,
  WordPressUrl,
} from "./MenuData";
import axios from "axios";

function DashboardItems() {
  const [javascripttotalrecord, setjavascripttotalrecord] = useState(null);
  const [nodebaseurltotalrecord, setnodebaseurltotalrecord] = useState(null);
  const [reactApitotalrecord, setreactApitotalrecord] = useState(null);
  const [wordpresstotalrecord, setwordpresstotalrecord] = useState(null);
  const [HTML_CSS, setHTML_CSS] = useState(null);
  const [English, setEnglish] = useState(null);

  useEffect(() => {
    // Fetch all data concurrently using Promise.all for better performance
    const fetchAllData = async () => {
      try {
        const [
          javascriptResult,
          nodeResult,
          reactResult,
          wordpressResult,
          htmlCssResult,
          englishResult
        ] = await Promise.all([
          axios.post(`${javascriptbaseurl}/view`),
          axios.post(`${nodebaseurl}/view`),
          axios.post(`${reactbaseurl}/view`),
          axios.post(`${WordPressUrl}/view`),
          axios.post(`${HTML_CSSUrl}/view`),
          axios.post(`${EnglishUrl}/view`)
        ]);

        setjavascripttotalrecord(javascriptResult.data.totalRecords);
        setnodebaseurltotalrecord(nodeResult.data.totalRecords);
        setreactApitotalrecord(reactResult.data.totalRecords);
        setwordpresstotalrecord(wordpressResult.data.totalRecords);
        setHTML_CSS(htmlCssResult.data.totalRecords);
        setEnglish(englishResult.data.totalRecords);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // You could set error states here for better user experience
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* JavaScript */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-400 border-2 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-yellow-700 mb-2">
          JavaScript Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-yellow-900">
          {javascripttotalrecord ?? "Loading..."}
        </h1>
      </div>

      {/* Node.js */}
      <div className="bg-gradient-to-r from-green-100 to-green-200 border-green-400 border-2 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          Node.js Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-green-900">
          {nodebaseurltotalrecord ?? "Loading..."}
        </h1>
      </div>

      {/* React */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-blue-400 border-2 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          React Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-blue-900">
          {reactApitotalrecord ?? "Loading..."}
        </h1>
      </div>

      {/* WordPress */}
      <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-purple-400 border-2 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          WordPress Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-purple-900">
          {wordpresstotalrecord ?? "Loading..."}
        </h1>
      </div>
      <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-purple-400 border-2 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          html or css Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-purple-900">
          {HTML_CSS ?? "Loading..."}
        </h1>
      </div>
      {/* English */}
      <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-purple-400 border-2 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          English Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-purple-900">
          {English ?? "Loading..."}
        </h1>
      </div>
  
    </div>
  );
}

export default DashboardItems;
