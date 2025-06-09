
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

const AskAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm MedAI, your AI medical assistant. I can help answer health questions, provide general medical information, and guide you to appropriate care. How can I assist you today?",
      isAI: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your question. While I can provide general medical information, please remember that I'm not a substitute for professional medical advice. For specific health concerns, please consult with a healthcare provider. How else can I help you today?",
        isAI: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 text-primary">Chat History</h3>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-muted cursor-pointer hover:bg-muted/80 transition-colors">
                    <p className="text-sm font-medium">General Health Query</p>
                    <p className="text-xs text-muted-foreground">Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="flex-1 flex flex-col">
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                          message.isAI
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-primary text-primary-foreground px-4 py-3 rounded-lg">
                        <p className="text-sm">MedAI is typing...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="border-t border-border p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything about health..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                      Send
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    ℹ️ Upload prescription for personalized context
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAI;
