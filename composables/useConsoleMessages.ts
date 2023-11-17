import { ref } from 'vue';

interface ConsoleMessage {
  type: 'error' | 'success' | 'warning' | 'info' | 'message';
  content: string;
}

const messages = ref<ConsoleMessage[]>([]);

const addMessage = (
  message: ConsoleMessage,
  isSystemMessage: boolean = true
) => {
  const formattedContent = isSystemMessage
    ? `arasaka.net: ${message.content}`
    : message.content;
  messages.value.push({ ...message, content: formattedContent });
};

const clearMessages = () => {
  messages.value = [];
};

const initializeConsole = () => {
  addMessage({ type: 'info', content: 'connecting...' });
  setTimeout(() => {
    addMessage({ type: 'success', content: 'Connection established' });
  }, 1000);
};

export default function useConsoleMessages() {
  return { messages, addMessage, clearMessages, initializeConsole };
}
