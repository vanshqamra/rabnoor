import { createContext } from 'react';

interface AccessibilityContextProps {
  fontScale: number;
  setFontScale: (value: number) => void;
  highContrast: boolean;
  setHighContrast: (value: boolean) => void;
  dyslexiaFriendly: boolean;
  setDyslexiaFriendly: (value: boolean) => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (value: boolean) => void;
}

export const AccessibilityContext = createContext<AccessibilityContextProps>({
  fontScale: 1,
  setFontScale: () => undefined,
  highContrast: false,
  setHighContrast: () => undefined,
  dyslexiaFriendly: false,
  setDyslexiaFriendly: () => undefined,
  isPanelOpen: false,
  setIsPanelOpen: () => undefined,
});
