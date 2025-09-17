import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dispatch(
      sendMessageThunk({
        recieverId: selectedUser?._id,
        message,
      })
    );
    setMessage("");
  };

  return (
    <div className="w-full p-3 flex gap-2">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); 
            handleSendMessage();
          }
        }}
      />

      {/* <label className="cursor-pointer">
      <input
        className="input input-bordered input-primary w-23 hidden"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <span className="btn btn-primary">📷 Send Image</span>
    </label> */}

      <button
        onClick={handleSendMessage}
        className="btn btn-square btn-outline btn-primary"
      >
        <IoIosSend />
      </button>
    </div>
  );
};

export default SendMessage;
