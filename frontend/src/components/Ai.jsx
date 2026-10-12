import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, X } from "lucide-react";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const Ai = () => {
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "ai",
            text: "Hello! I am LifeDrop AI. I can help you with blood donation, blood groups, finding donors, emergency blood requests, and other blood-related questions.",
        },
    ]);


    const isBloodRelated = (text) => {
        const bloodKeywords = [
            "blood",
            "donor",
            "donors",
            "donation",
            "donate",
            "donating",
            "blood group",
            "blood type",
            "a+",
            "a-",
            "b+",
            "b-",
            "ab+",
            "ab-",
            "o+",
            "o-",
            "hemoglobin",
            "hemoglobin",
            "transfusion",
            "platelets",
            "plasma",
            "red blood cells",
            "rbc",
            "blood bank",
            "blood request",
            "emergency blood",
            "need blood",
            "need a blood donor",
            "find donor",
            "blood donor",
            "donor registration",
            "lifeDrop",
            "life drop",
            "patient blood",
            "blood emergency",
            "donor eligibility",
            "donate blood",
            "blood donation",
            "blood donation camp",
            "blood donation center",
            "blood compatibility",
            "blood match",
        ];

        const lowerText = text.toLowerCase();

        return bloodKeywords.some((keyword) =>
            lowerText.includes(keyword.toLowerCase())
        );
    };

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {

            if (!isBloodRelated(userMessage)) {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "ai",
                        text: "Sorry, I can only help with blood donation and blood-related questions.",
                    },
                ]);

                setLoading(false);
                return;
            }


            const models = [
                "gemini-3.8-flash",
                "gemini-3.7-flash",
                "gemini-3.6-flash",
                "gemini-3.5-flash",
                "gemini-3.8-pro",
                "gemini-3.7-pro",
                "gemini-3.6-pro",
                "gemini-3.5-pro",
            ];

            let response = null;


            const systemInstruction = `
You are LifeDrop AI, a blood donation assistant for the LifeDrop blood donation platform.

YOUR ONLY PURPOSE:
You can ONLY answer questions related to:

- Blood donation
- Blood donors
- Finding blood donors
- Blood groups
- A+, A-, B+, B-, AB+, AB-, O+, O-
- Blood donation eligibility
- General blood donation information
- Blood donation process
- Blood banks
- Blood requests
- Emergency blood requests
- Donor registration
- Donor availability
- Blood transfusion general information
- Blood compatibility general information
- Platelets and plasma in the context of blood donation
- General information about blood components
- LifeDrop blood donation platform
- Finding donors by city or blood group
- Creating an emergency blood request
- Donor profiles
- Blood donation history
- Blood donation safety in general

IMPORTANT:
You must NOT answer questions about unrelated topics.

Examples of unrelated topics:
- Programming
- React
- JavaScript
- HTML
- CSS
- Tailwind
- Python
- Mathematics
- Physics
- Chemistry unrelated to blood
- Politics
- News
- Sports
- Movies
- Games
- Weather
- General technology
- Coding errors
- School homework unrelated to blood
- Personal entertainment
- General conversation
- Other unrelated subjects

If the user's question is unrelated to blood donation, respond ONLY with:

"Sorry, I can only help with blood donation and blood-related questions."

Do not explain anything else for unrelated questions.

MEDICAL SAFETY:
You are an informational assistant, not a doctor.
Do not diagnose diseases.
Do not decide whether a specific person is medically eligible to donate.
Do not guarantee blood compatibility or medical suitability.
For important medical decisions, tell the user to consult a qualified healthcare professional or authorized blood bank.

Keep answers:
- Clear
- Short
- Helpful
- Easy to understand
- Professional

When appropriate, mention that eligibility and compatibility should be confirmed by qualified healthcare professionals or authorized blood banks.
`;

            for (const model of models) {
                try {
                    response = await ai.models.generateContent({
                        model: model,

                        contents: userMessage,

                        config: {
                            systemInstruction: systemInstruction,
                        },
                    });

                    console.log(`Success with: ${model}`);
                    break;
                } catch (error) {
                    console.log(`${model} failed`, error);
                }
            }


            if (!response) {
                throw new Error("All Gemini models failed.");
            }


            const aiText =
                response.text ||
                "Sorry, I could not generate a response right now.";

            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: aiText,
                },
            ]);
        } catch (error) {
            console.log("Gemini Error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: "Sorry, AI response nahi aa saka. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };


    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* CHAT WINDOW */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[560px] bg-white rounded-3xl border border-red-100  shadow-red-100 overflow-hidden flex flex-col">

                    {/* HEADER */}
                    <div className="px-5 py-4 bg-white border-b border-red-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-sm">
                                <Bot size={21} />
                            </div>

                            <div>
                                <h1 className="text-sm font-bold text-gray-900">
                                    LifeDrop AI
                                </h1>

                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>

                                    <p className="text-xs text-gray-500">
                                        Blood Donation Assistant
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="h-9 w-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-600 transition"
                        >
                            <X size={19} />
                        </button>
                    </div>

                    {/* CHAT AREA */}
                    <div className="flex-1 overflow-y-auto p-4 bg-red-50/30">
                        {messages.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-end gap-2 mb-4 ${item.role === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >
                                {/* AI ICON */}
                                {item.role === "ai" && (
                                    <div className="h-8 w-8 shrink-0 rounded-xl bg-white border border-red-100 text-red-600 flex items-center justify-center shadow-sm">

                                        <Bot size={16} />
                                    </div>
                                )}

                                {/* MESSAGE */}
                                <div
                                    className={`max-w-[75%] px-4 py-3 text-sm leading-5 ${item.role === "user"
                                        ? "bg-red-600 text-white rounded-2xl rounded-br-md shadow-md shadow-red-100"
                                        : "bg-white text-gray-700 rounded-2xl rounded-bl-md border border-red-100 shadow-sm"
                                        }`}
                                >
                                    <p>{item.text}</p>
                                </div>

                                {/* USER ICON */}
                                {item.role === "user" && (
                                    <div className="h-8 w-8 shrink-0 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                                        <User size={16} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* LOADING */}
                        {loading && (
                            <div className="flex items-end gap-2">
                                <div className="h-8 w-8 rounded-xl bg-white border border-red-100 text-red-600 flex items-center justify-center">
                                    <Bot size={16} />

                                </div>

                                <div className="bg-white border border-red-100 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-red-400 animate-bounce"></span>

                                        <span className="h-2 w-2 rounded-full bg-red-400 animate-bounce [animation-delay:150ms]"></span>

                                        <span className="h-2 w-2 rounded-full bg-red-400 animate-bounce [animation-delay:300ms]"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* INPUT */}
                    <div className="p-3 bg-white border-t border-red-100">
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl p-1.5 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-50 transition">

                            <input
                                type="text"
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about blood donation..."
                                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none"
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading || !message.trim()}
                                className="h-10 w-10 shrink-0 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </div>

                        <p className="text-center text-[10px] text-gray-400 mt-2">
                            LifeDrop AI • Blood Donation Assistant
                        </p>
                    </div>
                </div>
            )}

            {/* FLOATING CHAT BUTTON */}
            
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
        fixed bottom-6 right-6 z-50
        h-14 px-5
        bg-gradient-to-r from-red-600 to-red-500
        text-white
        rounded-full
        flex items-center justify-center gap-2
        shadow-lg shadow-gray-700
        border border-red-400/30
        hover:from-red-700 hover:to-red-600
        hover:shadow-xl hover:shadow-red-400/40
        hover:-translate-y-1
        active:scale-95
        transition-all duration-300 ease-out
        group
    "
            >
                <span className="relative flex items-center justify-center">
                    {!isOpen && (
                        <span className="absolute inline-flex h-9 w-9 rounded-full bg-white/20 animate-ping"></span>
                    )}

                    {isOpen ? (
                        <X
                            size={23}
                            className="relative transition-transform duration-300 group-hover:rotate-90"
                        />
                    ) : (
                        <Bot
                            size={24}
                            className="relative transition-transform duration-300 group-hover:scale-110"
                        />
                    )}
                </span>

                <span className="font-semibold text-sm tracking-wide">
                    {isOpen ? "Close" : "Ask me"}
                </span>
            </button>
            

        </>
    );
};