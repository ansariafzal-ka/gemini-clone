import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import axios from "axios";
import { useState } from "react";

const InputField = ({ onResponse, onLoading }) => {
  const [message, setMessage] = useState("");

  const getResponse = async () => {
    console.log("Loading...");
    onLoading(true);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse =
        response["data"]["candidates"][0]["content"]["parts"][0]["text"];

      console.log("AI response : ", aiResponse);
      setMessage("");

      onResponse(aiResponse, message);
    } catch (error) {
      console.log("An error occurred while getting response", error);
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="w-[330px] md:w-[700px] lg:w-[900px] flex flex-row justify-between items-center gap-3 absolute left-1/2 bottom-12 transform -translate-x-1/2">
      <Input
        placeholder="enter a prompt"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit" size="icon" onClick={getResponse}>
        <Send className="text-[--foreground]" strokeWidth={1.5} />
      </Button>
    </div>
  );
};

export default InputField;
