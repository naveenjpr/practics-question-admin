import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../Context";
import Header from "../../Common/Header";
import Sidebar from "../../Common/Sidebar";
import LoadingSpinner from "../../Common/LoadingSpinner";
import axios from "axios";
import { javascriptbaseurl } from "../../Common/MenuData";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

function ViewJavascript() {
  let { changemenu } = useContext(mainContext);

  const [javascriptview, setjavascriptview] = useState([]);
  const [deleteororstatus, setdeleteororstatus] = useState(false);
  const [loading, setLoading] = useState(true);

  let Api = javascriptbaseurl;
  let showdata = () => {
    setLoading(true);
    axios
      .post(`${Api}/view`)
      .then((result) => {
        if (result.data.status === true) {
          setjavascriptview(result.data.data);
        } else {
          setjavascriptview([]);
        }
      })
      .catch((error) => {
        setjavascriptview([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    showdata();
  }, [deleteororstatus, Api]);

  let deletecoure = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmed) return;
    axios
      .delete(`${Api}/delete/${id}`)
      .then((result) => {
        toast.success(result.data.message);

        showdata();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
  };

  let statuschange = (id, staus) => {
    const data = {
      id: id,
      status: !staus,
    };
    axios
      .put(`${Api}/change-status`, data)
      .then((result) => {
        if (result.data.status === true) {
          setdeleteororstatus(!deleteororstatus);
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
  };
  return (
    <div>
      <Header />

      <div className="flex  bg-[#F5F7FF]">
        <Sidebar />
        <ToastContainer
          position="top-right"
          autoClose={500} // 1 सेकंड (1000 मिलीसेकंड) में बंद हो
        />
        <div
          className={` ${
            changemenu === true ? "w-[95%]" : "w-[100%]"
          } relative px-[10px] py-[10px] overflow-auto h-screen bg-[#F5F7FF]`}
        >
          <div className="">
            <div className="bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]">
              {loading ? (
                <LoadingSpinner message="Loading JavaScript questions..." />
              ) : javascriptview.length > 0 ? (
                javascriptview.map((v, i) => {
                    return (
                      <div className="p-4 border-[2px]  text-white" key={i}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded tag-react text-[red]">
                                javascript
                              </span>
                              <span className="text-xs text-left text-red-700">
                                <span>Date</span>{" "}
                                {v.created_at
                                  .slice(0, 10)
                                  .split("-")
                                  .reverse()
                                  .join("-")}
                              </span>
                            </div>
                            <button className="text-lg font-medium text-left w-full flex items-center bg-[blue]  ">
                              <span className="mx-[5px]">{i + 1} </span>
                              {v.Question}
                            </button>
                          </div>
                        </div>
                        <div className="p-2 mt-1 text-white bg-black">
                          <pre className="whitespace-pre-wrap break-words">
                            {v.Answers}
                          </pre>

                          <div className="flex justify-end mt-4 space-x-2">
                            <div className="flex gap-2 justify-center items-center">
                              <span>status type</span>
                              {v.status === 1 ? (
                                <button
                                  className="gap-2 px-3 h-9 text-sm font-medium text-green-700 whitespace-nowrap bg-green-100 rounded-md border border-green-300 hover:bg-green-200"
                                  onClick={() => statuschange(v._id, v.status)}
                                >
                                  Active
                                </button>
                              ) : (
                                <button
                                  className="flex items-center justify-center gap-2 px-4 py-1.5 text-sm font-semibold text-red-600 bg-red-100 border border-red-300 rounded-md hover:bg-red-200 transition duration-150"
                                  onClick={() => statuschange(v._id, v.status)}
                                >
                                  Deactive
                                </button>
                              )}
                            </div>

                            <button className="flex gap-2 justify-center items-center px-3 h-9 text-sm font-medium whitespace-nowrap rounded-md border border-input bg-background hover:bg-accent">
                              <Link to={`/add-Javascript/${v._id}`}>Edit</Link>
                            </button>
                            <button
                              className="flex gap-2 justify-center items-center px-3 h-9 text-sm font-medium whitespace-nowrap rounded-md border border-input bg-background text-destructive hover:bg-destructive/10"
                              onClick={() => deletecoure(v._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
                    <p className="text-gray-600 text-lg font-medium">No JavaScript questions found</p>
                  </div>
                )}
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default ViewJavascript;
