import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AddaccountCard from "./AddaccountCard";

const SettingsCard = () => {
  const [activeState, setActiveState] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="w-full my-6 flex flex-col justify-between items-center gap-4 pt-2">
        {[
          { id: "changepassword", label: "Change Password" },
          { id: "addaccount", label: "Account/Crypto Wallet" },
          { id: "feedback", label: "Send Feedback" },
          { id: "setlimit", label: "Set Limit" },
        ].map(({ id, label }) => (
          <div
            key={id}
            onClick={() => setActiveState(id)}
            className={`w-[60%] h-14 flex  items-center cursor-pointer border border-gray-400 rounded-md px-4 transition ${
              activeState === id ? "bg-gray-100" : ""
            }`}
          >
            <p className="text-sm font-normal text-gray-700 flex items-center">
              {label} <FaArrowRight className="ml-2" />
            </p>
          </div>
        ))}
      </div>

      {/* Change Password Form */}
      {activeState === "changepassword" && (
        <div className="shadow p-4 rounded-md border border-gray-300 w-[60%]">
          <form className="space-y-4">
            {["Old Password", "New Password", "Confirm New Password"].map((placeholder, index) => (
              <input
                key={index}
                type="password"
                className="border border-gray-300 p-3 w-full rounded-md outline-none"
                placeholder={placeholder}
              />
            ))}
            <button className="bg-black border border-[#fa9e1f] py-2 px-6 rounded-md text-white font-semibold ">
              Update
            </button>
          </form>
        </div>
      )}

      {/* Add Account */}
      {activeState === "addaccount" && (
        <div className="shadow p-4 rounded-md border border-gray-300">
          <AddaccountCard />
        </div>
      )}

      {/* Feedback */}
      {activeState === "feedback" && (
        <div className="mt-5 w-3/5">
          <select
            className="border border-gray-300 p-3 w-full rounded-md outline-none"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
          >
            <option value="">Select Feedback Type</option>
            <option value="paypal">Bank Account</option>
            <option value="crypto">Crypto Wallet</option>
          </select>

          {feedbackType && (
            <form className="mt-4">
              <textarea
                className="border border-gray-300 w-full p-3 rounded-md"
                placeholder="Enter message..."
              ></textarea>
              <button className="bg-black border border-[#fa9e1f] py-2 px-6 rounded-md text-white font-semibold  mt-2">
                Send Message
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingsCard;
