import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../Context";
import Header from "../../Common/Header";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { PostgreSQLUrl } from "../../Common/MenuData";

function AddPostgreSQL() {
    let { changemenu } = useContext(mainContext);
    let params = useParams();

    const [formsubmit, setformsubmit] = useState(false);
    let [input, setinput] = useState({ Question: "", Answers: "", status: 1 });

    let submitHandler = (event) => {
        event.preventDefault();
        let Api = PostgreSQLUrl;
        let form = new FormData(event.target);

        if (params.id == undefined) {
            axios
                .post(`${Api}/add`, form)
                .then((resutl) => {
                    if (resutl.data.status == true) {
                        setformsubmit(true);
                        toast.success("Form submitted successfully!");
                        setinput({ Question: "", Answers: "", status: "" }); // clear state
                    } else {
                        toast.error(resutl.data.message);
                    }
                })
                .catch((error) => {
                    toast.error("something went wrong");
                });
        } else {
            axios
                .put(`${Api}/update/${params.id}`, form)
                .then((resutl) => {
                    if (resutl.data.status == true) {
                        setformsubmit(true);
                        toast.success("Form submitted successfully!");
                        setinput({ Question: "", Answers: "", status: "" }); // clear state
                    } else {
                        toast.error(resutl.data.message);
                    }
                })
                .catch((error) => {
                    toast.error("something went wrong");
                });
        }
    };

    let inputHnader = (event) => {
        let data = { ...input };
        data[event.target.name] = event.target.value;
        setinput(data);
    };

    useEffect(() => {
        let Api = PostgreSQLUrl;
        if (params.id != undefined) {
            axios
                .post(`${Api}/details/${params.id}`)
                .then((result) => {
                    setinput({
                        Question: result.data.data.Question,
                        Answers: result.data.data.Answers,
                        status: result.data.data.status,
                    });
                })
                .catch((error) => {
                    toast.error("something want wrong");
                });
        }
    }, []);

    let navigate = useNavigate();

    useEffect(() => {
        if (formsubmit == true) {
            navigate("/ViewPostgreSQL");
        }
    }, [formsubmit]);

    return (
        <div>
            <Header />

            <div className="flex  bg-[#F5F7FF]">
                <ToastContainer />

                <Sidebar />

                <div
                    className={` ${changemenu == true ? "w-[95%]" : "w-[84%]"
                        } relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}
                >
                    <h1 className="text-[25px] font-[500] mb-[10px]">
                        PostgreSQL question add
                    </h1>
                    <div className="w-full">
                        <div className="w-full p-6 mb-12 bg-white shadow-sm rounded-2xl">
                            <form onSubmit={submitHandler} className="space-y-4">
                                <div>
                                    <label className="block mb-1 text-gray-700">Question</label>
                                    <input
                                        type="text"
                                        name="Question"
                                        value={input.Question}
                                        onChange={inputHnader}
                                        className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your question"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-gray-700">Answer</label>
                                    <textarea
                                        name="Answers"
                                        value={input.Answers}
                                        onChange={inputHnader}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                                        placeholder="Enter the answer"
                                        rows="9"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block mb-2 text-gray-700">
                                        Course Status
                                    </label>
                                    <div className="flex items-center space-x-6">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                onChange={inputHnader}
                                                value="1"
                                                checked={input.status == 1 ? "checked" : ""}
                                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="ml-2">Active</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="0"
                                                onChange={inputHnader}
                                                checked={input.status == 0 ? "checked" : ""}
                                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="ml-2">Deactive</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex pt-2 space-x-4">
                                    {params.id == undefined ? (
                                        <button
                                            type="submit"
                                            className="bg-[#4B49AC] hover:bg-[#3a3899] text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors"
                                        >
                                            submit
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="bg-[#4B49AC] hover:bg-[#3a3899] text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors"
                                        >
                                            update
                                        </button>
                                    )}

                                    <button
                                        type="reset"
                                        className="px-6 py-2 text-lg font-medium text-gray-800 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default AddPostgreSQL;
