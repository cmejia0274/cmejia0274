import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import Logo from './Logo';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Altitude. I'm your AI strategist. How can I help you bring operational integrity to your scaling organization?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const systemInstruction = `You are the Altitude Executive Operating System AI Assistant. 
Your purpose is to explain the Altitude framework to leaders who have "outgrown winging it". 

Key talking points:
- Altitude is a modern executive operating system that governs the Rhythm of Business.
- It ensures strategy, decisions, and execution drive intended outcomes.
- It consists of 4 layers: 1. Strategic Direction (True North), 2. Priorities & Bets (3-5 focus areas), 3. Execution Rhythm & Signals (Cadence), 4. Decisions & Consequences (Closure).
- It is installed as a live operating system built on Airtable, not just a PDF or deck.
- It reduces leadership meeting time by up to 60% and speeds up decisions 3x.
- It's built for CEOs and Operators in scaling companies who face strategic drift and decision latency.

Maintain a professional, high-level, executive tone. Be concise and structured.`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction,
          temperature: 0.7,
        },
        // We initialize history with previous messages except the welcome one which we keep separate in UI logic usually
        // but here we'll just pass everything after the first one to keep it simple
        history: messages.slice(1).map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });

      let modelResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const result = await chat.sendMessageStream({ message: userMessage });
      
      for await (const chunk of result) {
        const chunkText = chunk.text || "";
        modelResponse += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = modelResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I encountered an error connecting to the Altitude brain. Please try again or contact our consultants." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#003456] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <Logo className="h-6" showText={false} />
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-widest">Altitude AI</h3>
                <p className="text-[10px] text-[#7edb44] font-bold">Executive Strategist</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#f8f9fa] scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-[#003456] text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text || (isLoading && i === messages.length - 1 ? <div className="flex gap-1 py-1"><div className="w-1.5 h-1.5 bg-[#7edb44] rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-[#7edb44] rounded-full animate-bounce delay-75"></div><div className="w-1.5 h-1.5 bg-[#7edb44] rounded-full animate-bounce delay-150"></div></div> : null)}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about the Altitude framework..."
                className="w-full pl-4 pr-12 py-3 bg-[#f8f9fa] border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#7edb44] transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-[#003456] text-white rounded-full disabled:opacity-30 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center font-medium">
              Powered by Gemini-3-Pro-Preview
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#003456] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group border-4 border-white"
      >
        {isOpen ? (
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7edb44] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7edb44]"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;