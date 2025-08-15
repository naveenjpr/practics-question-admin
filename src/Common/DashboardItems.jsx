import React, { useEffect, useState } from "react";
import {
  AWSUrl,
  EnglishUrl,
  HTML_CSSUrl,
  javascriptbaseurl,
  livewebsiteUrl,
  MenkaUrl,
  NextjsUrl,
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
  const [livewebsite, setlivewebsite] = useState(null);
  const [menkawebsite, setmenkawebsite] = useState(null);
  const [Nextjswebsite, setNextjswebsite] = useState(null);
  const [AWSwebsite, setAWSwebsite] = useState(null);

  let Api = javascriptbaseurl;
  useEffect(() => {
    axios
      .post(`${Api}/view`)
      .then((result) => {
        setjavascripttotalrecord(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);

  let nodeApi = nodebaseurl;
  useEffect(() => {
    axios
      .post(`${nodeApi}/view`)
      .then((result) => {
        setnodebaseurltotalrecord(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);
  //react
  let reactApi = reactbaseurl;
  useEffect(() => {
    axios
      .post(`${reactApi}/view`)
      .then((result) => {
        setreactApitotalrecord(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);
  // wordpress

  let wordpressApi = WordPressUrl;
  useEffect(() => {
    axios
      .post(`${wordpressApi}/view`)
      .then((result) => {
        setwordpresstotalrecord(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);
  // html or css
  let HTML_CSSApi = HTML_CSSUrl;
  useEffect(() => {
    axios
      .post(`${HTML_CSSApi}/view`)
      .then((result) => {
        setHTML_CSS(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);
  // english
  let EnglishApi = EnglishUrl;
  useEffect(() => {
    axios
      .post(`${EnglishApi}/view`)
      .then((result) => {
        setEnglish(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);
  // livewebsite
  let livewebsiteApi = livewebsiteUrl;
  useEffect(() => {
    axios
      .post(`${livewebsiteApi}/view`)
      .then((result) => {
        setlivewebsite(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);

  //MENKA
  let menkawebsiteApi = MenkaUrl;
  console.log("menkawebsiteApi",menkawebsiteApi);
  useEffect(() => {
    axios
      .post(`${menkawebsiteApi}/view`)
      .then((result) => {
        setmenkawebsite(result.data.totalRecords);
      })
      .catch((error) => {
      });
  }, []);
  //Nextjs
  let NextjswebsiteApi = NextjsUrl;
  useEffect(() => {
    axios
      .post(`${NextjswebsiteApi}/view`)
      .then((result) => {
        setNextjswebsite(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);
  //AWSjs
  let AWSwebsiteApi = AWSUrl;
  useEffect(() => {
    axios
      .post(`${AWSwebsiteApi}/view`)
      .then((result) => {
        setAWSwebsite(result.data.totalRecords);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* JavaScript */}
      <div className="p-6 text-center bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl border-2 border-yellow-400 shadow-md transition hover:shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-yellow-700">
          JavaScript Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-yellow-900">
          {javascripttotalrecord ?? "Loading..."}
        </h1>
      </div>

      {/* Node.js */}
      <div className="p-6 text-center bg-gradient-to-r from-green-100 to-green-200 rounded-2xl border-2 border-green-400 shadow-md transition hover:shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-green-700">
          Node.js Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-green-900">
          {nodebaseurltotalrecord ?? "Loading..."}
        </h1>
      </div>

      {/* React */}
      <div className="p-6 text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl border-2 border-blue-400 shadow-md transition hover:shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-blue-700">
          React Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-blue-900">
          {reactApitotalrecord ?? "Loading..."}
        </h1>
      </div>

      {/* WordPress */}
      <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-purple-700">
          WordPress Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-purple-900">
          {wordpresstotalrecord ?? "Loading..."}
        </h1>
      </div>
      <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-purple-700">
          html or css Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-purple-900">
          {HTML_CSS ?? "Loading..."}
        </h1>
      </div>
      {/* English */}
      <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-purple-700">
          English Total Questions
        </h3>
        <h1 className="text-4xl font-bold text-purple-900">
          {English ?? "Loading..."}
        </h1>
      </div>
        {/* livewebsite */}
        <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-lg font-semibold text-purple-700">
            live website Total Questions
          </h3>
          <h1 className="text-4xl font-bold text-purple-900">
            {livewebsite ?? "Loading..."}
          </h1>
        </div>
        {/* menkawebsite */}
        <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
          <h3 className="mb-2 text-lg font-semibold text-purple-700">
          menka website Total Questions
          </h3>
          <h1 className="text-4xl font-bold text-purple-900">
            {menkawebsite ?? "Loading..."}
          </h1>
        </div>
          {/* Nextjs */}
          <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-purple-700">
            Nextjs Total Questions
            </h3>
            <h1 className="text-4xl font-bold text-purple-900">
              {Nextjswebsite ?? "Loading..."}
            </h1>
          </div>
          {/* AWS */}
          <div className="p-6 text-center bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-400 shadow-md transition hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-purple-700">
            AWS Total Questions
            </h3>
            <h1 className="text-4xl font-bold text-purple-900">
              {AWSwebsite ?? "Loading..."}
            </h1>
          </div>
    </div>
  );
}

export default DashboardItems;
