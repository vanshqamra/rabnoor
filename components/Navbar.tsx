import Link from 'next/link';
import { useContext } from 'react';
import { AccessibilityContext } from './accessibility/AccessibilityContext';
import { textContent } from '../data/strings';

const Navbar = () => {
  const { setIsPanelOpen, highContrast } = useContext(AccessibilityContext);

  return (
    <nav className={highContrast ? 'high-contrast' : ''}>
      <div className="nav-inner" role="navigation" aria-label={textContent.navigation.ariaLabel}>
        <Link href="/">
          <span style={{ fontWeight: 700 }}>{textContent.brand.name}</span>
        </Link>
        <div className="nav-links">
          <Link href="/about">{textContent.navigation.about}</Link>
          <Link href="/conditions">{textContent.navigation.conditions}</Link>
          <Link href="/services">{textContent.navigation.services}</Link>
          <Link href="/appointment">{textContent.navigation.appointment}</Link>
          <Link href="/contact">{textContent.navigation.contact}</Link>
          <Link href="/blog">{textContent.navigation.blog}</Link>
          <button className="accessibility-toggle" onClick={() => setIsPanelOpen(true)}>
            {textContent.accessibility.button}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
