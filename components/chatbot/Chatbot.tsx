import { useEffect, useMemo, useState } from 'react';
import { chatbotFaq } from '../../data/faq';
import { textContent } from '../../data/strings';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: textContent.chatbot.greeting },
  ]);
  const [input, setInput] = useState('');

  // Precompute a case-insensitive FAQ lookup so we can match user queries quickly.
  const faqLookup = useMemo<Record<string, string>>(() => {
    const entries: Record<string, string> = {};
    for (const item of chatbotFaq) {
      entries[item.question.toLowerCase()] = item.answer;
    }
    return entries;
  }, []);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    const eventListener = (event: Event) => handler();
    window.addEventListener('open-chatbot', eventListener);
    return () => window.removeEventListener('open-chatbot', eventListener);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: 'user', text: input.trim() };
    const normalized = input.trim().toLowerCase();

    const matchedEntry = Object.entries(faqLookup).find(([question]) => normalized.includes(question));
    const botResponse = matchedEntry ? matchedEntry[1] : textContent.chatbot.fallback;

    setMessages((prev) => [...prev, userMessage, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  return (
    <>
      {isOpen && (
        <section className="chatbot-window" aria-label={textContent.chatbot.windowAriaLabel}>
          <div className="chatbot-header">{textContent.chatbot.title}</div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={textContent.chatbot.placeholder}
              aria-label={textContent.chatbot.placeholder}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleSend();
                }
              }}
            />
            <button className="button" onClick={handleSend}>
              {textContent.chatbot.send}
            </button>
          </div>
        </section>
      )}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="chatbot"
      >
        {isOpen ? textContent.chatbot.close : textContent.chatbot.cta}
      </button>
    </>
  );
};

export default Chatbot;
