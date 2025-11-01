import { useMemo } from 'react';

import { chatbotFaq, type ChatbotFaq } from '../../data/faq';

export function useChatbotFaq() {
  // use object instead of Map to avoid TS complaining about iterable entries from JSON
  const faqByQuestion = useMemo<Record<string, string>>(() => {
    const result: Record<string, string> = {};
    for (const item of chatbotFaq as ChatbotFaq[]) {
      if (!item?.question || !item?.answer) continue;
      result[item.question.toLowerCase()] = item.answer;
    }
    return result;
  }, []);

  return faqByQuestion;
}
