import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Search, Sparkles, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { AIResponseEngine } from '../utils/aiResponseEngine';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m R00tBot, your advanced space technology assistant. I can help you with information about ISRO missions, rockets, satellites, and achievements. I use both my knowledge base and real-time search capabilities to provide you with the most accurate information. What would you like to explore today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchSuggestions] = useState([
    'Tell me about Chandrayaan-3',
    'What is Gaganyaan mission?',
    'ISRO Mars mission details',
    'Latest ISRO achievements',
    'Who is the current ISRO chairman?',
    'Future space missions'
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiEngine = new AIResponseEngine();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      // Simulate realistic AI processing time
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000));

      // Generate AI response
      const botResponseText = await aiEngine.generateResponse(inputValue);

      // Remove typing indicator and add actual response
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== 'typing');
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date()
        };
        return [...filtered, botResponse];
      });
    } catch (error) {
      // Handle error case
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== 'typing');
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: 'I apologize, but I encountered an error while processing your request. Please try again or rephrase your question.',
          sender: 'bot',
          timestamp: new Date()
        };
        return [...filtered, errorResponse];
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatMessage = (text: string) => {
    // Convert markdown-like formatting to HTML
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-slate-700 px-1 rounded">$1</code>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-4">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-indigo-300">AI-Powered Knowledge Engine</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Chat with R00tBot</h2>
        <p className="text-slate-300">Advanced AI assistant with knowledge graph and real-time search capabilities</p>
      </div>

      {/* Search Suggestions */}
      {messages.length === 1 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Try asking about:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-left p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl transition-all duration-200 text-slate-300 hover:text-white"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  {suggestion}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
        <div className="h-[500px] overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl rounded-br-md'
                    : 'bg-slate-700/50 text-slate-100 border border-slate-600/50 rounded-2xl rounded-bl-md'
                } shadow-lg`}
              >
                <div className="px-4 py-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {message.sender === 'user' ? (
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      {message.isTyping ? (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin text-slate-300" />
                          <span className="text-sm text-slate-300">R00tBot is analyzing and searching...</span>
                        </div>
                      ) : (
                        <>
                          <div 
                            className="text-sm leading-relaxed prose prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                          />
                          <div className="flex items-center justify-between mt-3">
                            <p className="text-xs opacity-70">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                            {message.sender === 'bot' && (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => copyMessage(message.text)}
                                  className="p-1 hover:bg-slate-600/50 rounded transition-colors"
                                  title="Copy message"
                                >
                                  <Copy className="w-3 h-3" />
                                </button>
                                <button
                                  className="p-1 hover:bg-slate-600/50 rounded transition-colors"
                                  title="Helpful"
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                </button>
                                <button
                                  className="p-1 hover:bg-slate-600/50 rounded transition-colors"
                                  title="Not helpful"
                                >
                                  <ThumbsDown className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-slate-700/50 p-4 bg-slate-800/30">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about ISRO missions, rockets, satellites, achievements..."
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                disabled={isTyping}
              />
              {inputValue && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-3 flex items-center justify-center text-xs text-slate-400">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Knowledge Base Active
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                Web Search Enabled
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                AI Reasoning Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;