import React, { useState } from 'react';
import { X, Bot, MessageCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  const faqs: FAQ[] = [
    {
      question: "Who are you?",
      answer: "I'm Afifa, a software developer specializing in web & mobile apps."
    },
    {
      question: "What projects have you done?",
      answer: "I've built job portals, food delivery apps, and cloud restaurant systems."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach me via email: afifahusna02024@gmail.com or LinkedIn: https://www.linkedin.com/in/afifa-husna-6b5472345/"
    },
    {
      question: "What skills do you have?",
      answer: "JavaScript, CSS, HTML, React, React Native, PHP, MySQL, MongoDB, testing and AI integrations."
    },
    {
      question: "Where are you based?",
      answer: "Currently in Abu Dhabi, UAE."
    },
    {
      question: "Do you have mobile app development experience?",
      answer: "Yes! I've worked on React Native apps, including a food delivery app with cart, profile, and location features."
    },
    {
      question: "Have you worked with databases?",
      answer: "Yes, I've used MySQL for job portals and app backends, handling user accounts, job listings, and orders."
    },
    {
      question: "What kind of job are you looking for?",
      answer: "I'm looking for opportunities in software development, especially in web and mobile app projects where I can grow my skills."
    },
    {
      question: "Are you open for freelance work?",
      answer: "Yes, I'm open to freelance and collaboration opportunities."
    }
  ];

  const handleQuestionClick = (answer: string) => {
    setIsTyping(true);
    setSelectedAnswer('');
    
    setTimeout(() => {
      setIsTyping(false);
      setSelectedAnswer(answer);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedAnswer('');
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Robot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-robot-float animate-pulse-glow"
        >
          <Bot size={28} />
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
          <div className="w-80 h-96 bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                  <p className="text-purple-200 text-xs">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 h-full overflow-y-auto">
              {!selectedAnswer && !isTyping && (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-sm text-gray-300">
                      Hi! I'm here to help. Choose a question below:
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {faqs.map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(faq.answer)}
                        className="w-full text-left p-3 bg-gray-800/30 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-400/40 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        <div className="flex items-center gap-2">
                          <MessageCircle size={14} className="text-purple-400 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <span>Typing</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Answer Display */}
              {selectedAnswer && !isTyping && (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-lg p-3 text-sm text-white">
                      {selectedAnswer}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedAnswer('');
                      setIsTyping(false);
                    }}
                    className="w-full p-2 bg-gray-800/30 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-400/40 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Ask another question
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;


