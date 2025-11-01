import { ReactNode, useEffect, useMemo, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityPanel from './accessibility/AccessibilityPanel';
import Chatbot from './chatbot/Chatbot';
import { AccessibilityContext } from './accessibility/AccessibilityContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);

  useEffect(() => {
    document.body.dataset.fontscale = fontScale.toString();
    document.documentElement.style.setProperty('--base-font-size', `${16 * fontScale}px`);
  }, [fontScale]);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle('dyslexia-friendly', dyslexiaFriendly);
  }, [dyslexiaFriendly]);

  const accessibilityValue = useMemo(
    () => ({
      fontScale,
      setFontScale,
      highContrast,
      setHighContrast,
      dyslexiaFriendly,
      setDyslexiaFriendly,
      isPanelOpen,
      setIsPanelOpen,
    }),
    [fontScale, highContrast, dyslexiaFriendly, isPanelOpen]
  );

  return (
    <AccessibilityContext.Provider value={accessibilityValue}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AccessibilityPanel />
      <Chatbot />
    </AccessibilityContext.Provider>
  );
};

export default Layout;
