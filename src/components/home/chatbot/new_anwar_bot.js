import React, { useState } from "react";

function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    // Add user's message to the chat history
    setChatHistory([...chatHistory, { sender: "user", message: userMessage }]);
    
    // Send the user's message to the Python backend (Flask)
    const response = await fetch("http://localhost:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });
    const data = await response.json();
    
    // Add the chatbot's response to the chat history
    setChatHistory([
      ...chatHistory,
      { sender: "bot", message: data.response },
    ]);

    // Clear the input field
    setUserMessage("");
  };

  return (
    <div>
      <div>
        <h2>Chatbot</h2>
        <div>
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <strong>{chat.sender}: </strong>
              <p>{chat.message}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
