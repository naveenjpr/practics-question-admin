import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../Context";
import Header from "../../Common/Header";
import Sidebar from "../../Common/Sidebar";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Loading, reactbaseurl } from "../../Common/MenuData";

function ViewReact() {
  let { changemenu } = useContext(mainContext);
  const [javascriptview, setjavascriptview] = useState([]);
  const [deleteororstatus, setdeleteororstatus] = useState(false);
  let Api = reactbaseurl;
  let showdata = () => {
    axios
      .post(`${Api}/view`)
      .then((result) => {
        console.log(result.data.imagePath);
        if (result.data.status == true) {
          setjavascriptview(result.data.data);
        } else {
          setjavascriptview([]);
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    showdata();
  }, [deleteororstatus]);

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
    console.log(id, staus);
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
            changemenu == true ? "w-[95%]" : "w-[100%]"
          } relative px-[10px] py-[10px] overflow-auto h-screen bg-[#F5F7FF]`}
        >
          <h1 className="text-[25px] font-[500] mb-[10px]">
            <u>react</u> 
          </h1>
          <div className="">
            <div className="bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]">
              {javascriptview.length > 0
                ? javascriptview.map((v, i) => {
                    return (
                      <div className="p-4 border-[2px]  text-white" key={i}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded tag-react text-[red]">
                                React
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
                            <div className="flex items-center justify-center gap-2">
                              <span>status type</span>
                              {v.status == 1 ? (
                                <button
                                  className="gap-2 px-3 text-sm font-medium text-green-700 bg-green-100 border border-green-300 rounded-md whitespace-nowrap h-9 hover:bg-green-200"
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

                            <button className="flex items-center justify-center gap-2 px-3 text-sm font-medium border rounded-md whitespace-nowrap h-9 border-input bg-background hover:bg-accent">
                              <Link to={`/addReact/${v._id}`}>Edit</Link>
                            </button>
                            <button
                              className="flex items-center justify-center gap-2 px-3 text-sm font-medium border rounded-md whitespace-nowrap h-9 border-input bg-background text-destructive hover:bg-destructive/10"
                              onClick={() => deletecoure(v._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default ViewReact;
