import React, { useContext } from "react";
import { mainContext } from "../../Context";
import Header from "../../Common/Header";
import Sidebar from "../../Common/Sidebar";
import Footer from "../../Common/Footer";
import prev from "../../img/generic-image-file-icon-hi.png";

function Addteam() {
  let { changemenu } = useContext(mainContext);
  return (
    <div>
      <Header />

      <div className="flex  bg-[#F5F7FF]">
        <Sidebar />

        <div
          className={` ${
            changemenu == true ? "w-[95%]" : "w-[84%]"
          } relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}
        >
          <h1 className="text-[25px] font-[500] mb-[10px]">Team</h1>
          <div class="w-full">
            <div class="bg-white w-full mb-12 p-6 rounded-2xl shadow-sm">
              <form class="space-y-4">
                <div>
                  <label class="block text-gray-700 mb-1">Question</label>
                  <input
                    type="text"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
                    placeholder="Enter your question"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 mb-1">Answer</label>
                  <textarea
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    placeholder="Enter the answer"
                    rows="4"
                  ></textarea>
                </div>

                <div class="flex items-stretch">
                  <div class="flex-grow">
                    <label class="block text-gray-700 mb-1">Upload File</label>
                    <div class="flex">
                      <input
                        type="file"
                        class="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none h-12"
                      />
                      <button
                        type="button"
                        class="bg-gray-200 px-4 rounded-r-lg border border-l-0 border-gray-300 h-12 flex items-center"
                      >
                        Browse
                      </button>
                    </div>
                  </div>
                  <div class="ml-4 flex items-end">
                    <img src={prev} alt="Preview" class="h-12 object-contain" />
                  </div>
                </div>

                <div>
                  <label class="block text-gray-700 mb-2">Course Status</label>
                  <div class="flex items-center space-x-6">
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        name="status"
                        class="h-5 w-5 text-blue-600 focus:ring-blue-500"
                        checked
                      />
                      <span class="ml-2">Active</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        name="status"
                        class="h-5 w-5 text-blue-600 focus:ring-blue-500"
                      />
                      <span class="ml-2">Deactive</span>
                    </label>
                  </div>
                </div>

                <div class="flex space-x-4 pt-2">
                  <button
                    type="submit"
                    class="bg-[#4B49AC] hover:bg-[#3a3899] text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg text-lg font-medium transition-colors"
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

export default Addteam;
