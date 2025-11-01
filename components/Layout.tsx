'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityPanel from './accessibility/AccessibilityPanel';
import { AccessibilityContext } from './accessibility/AccessibilityContext';

const Chatbot = dynamic(() => import('./chatbot/Chatbot'), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.dataset.fontscale = fontScale.toString();
    document.documentElement.style.setProperty('--base-font-size', `${16 * fontScale}px`);
  }, [fontScale]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

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
