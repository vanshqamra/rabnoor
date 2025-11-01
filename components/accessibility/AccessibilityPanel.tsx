import { useContext } from 'react';
import { AccessibilityContext } from './AccessibilityContext';
import { textContent } from '../../data/strings';

const AccessibilityPanel = () => {
  const {
    fontScale,
    setFontScale,
    highContrast,
    setHighContrast,
    dyslexiaFriendly,
    setDyslexiaFriendly,
    isPanelOpen,
    setIsPanelOpen,
  } = useContext(AccessibilityContext);

  const increaseFont = () => setFontScale(Math.min(1.6, parseFloat((fontScale + 0.1).toFixed(2))));
  const decreaseFont = () => setFontScale(Math.max(0.8, parseFloat((fontScale - 0.1).toFixed(2))));

  if (!isPanelOpen) {
    return null;
  }

  return (
    <aside className={`accessibility-panel ${highContrast ? 'high-contrast' : ''}`} aria-label={textContent.accessibility.panelLabel}>
      <h2>{textContent.accessibility.title}</h2>
      <p>{textContent.accessibility.description}</p>
      <div>
        <button className="button" onClick={increaseFont} aria-label={textContent.accessibility.increaseFont}>
          {textContent.accessibility.increaseFont}
        </button>
        <button className="button" onClick={decreaseFont} aria-label={textContent.accessibility.decreaseFont}>
          {textContent.accessibility.decreaseFont}
        </button>
      </div>
      <button
        className="button"
        onClick={() => setHighContrast(!highContrast)}
        aria-pressed={highContrast}
        aria-label={textContent.accessibility.highContrast}
      >
        {highContrast ? textContent.accessibility.highContrastDisable : textContent.accessibility.highContrast}
      </button>
      <button
        className="button"
        onClick={() => setDyslexiaFriendly(!dyslexiaFriendly)}
        aria-pressed={dyslexiaFriendly}
        aria-label={textContent.accessibility.dyslexiaFriendly}
      >
        {dyslexiaFriendly ? textContent.accessibility.dyslexiaDisable : textContent.accessibility.dyslexiaFriendly}
      </button>
      <p className="badge" role="note">
        {textContent.accessibility.screenReaderNote}
      </p>
      <button className="button secondary" onClick={() => setIsPanelOpen(false)}>
        {textContent.common.close}
      </button>
    </aside>
  );
};

export default AccessibilityPanel;
