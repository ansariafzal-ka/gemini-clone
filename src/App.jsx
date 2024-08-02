import { useState } from "react";
import GeminiMessageCard from "./components/custom/GeminiMessageCard";
import InputField from "./components/custom/InputField";
import UserMessageCard from "./components/custom/UserMessageCard";
import NavBar from "./components/NavBar";
import Loader from "./components/custom/Loader";

const App = () => {
  const [messages, setMessages] = useState([]); // Unified array for all messages
  const [loading, setLoading] = useState(false);

  const handleResponse = (response, message) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: message },
      { sender: "gemini", text: response },
    ]); // Append new user and AI messages
    setLoading(false); // Set loading to false when response is received
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <main className="w-full">
      <NavBar />
      <section className="w-full h-full p-4 flex flex-col justify-center items-center">
        <div
          className="w-[330px] md:w-[700px] lg:w-[900px] mb-4 flex flex-col justify-start items-center gap-y-3 absolute left-1/2 bottom-28 transform -translate-x-1/2 overflow-auto max-h-[calc(100vh-230px)]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Optional initial message */}
          <GeminiMessageCard message={"Hi, how can I help you today?"} />
          {messages.map((message, index) =>
            message.sender === "user" ? (
              <UserMessageCard key={`user-${index}`} message={message.text} />
            ) : (
              <GeminiMessageCard
                key={`gemini-${index}`}
                message={message.text}
              />
            )
          )}
        </div>
        {loading && (
          <div className="z-30 flex justify-center items-center gap-2 absolute left-1/2 bottom-[95px] transform -translate-x-1/2">
            <Loader />
            <p>Sending</p>
          </div>
        )}
        <InputField onResponse={handleResponse} onLoading={handleLoading} />
      </section>
    </main>
  );
};

export default App;
