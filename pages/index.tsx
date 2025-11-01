import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ConditionCard from '../components/ConditionCard';
import { conditions } from '../data/conditions';
import { textContent } from '../data/strings';

const HomePage = () => {
  const featuredConditions = conditions.slice(0, 4);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: textContent.brand.name,
    medicalSpecialty: 'Gastroenterology',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thessaloniki',
      addressCountry: 'GR',
    },
    areaServed: 'Thessaloniki, Greece',
    availableLanguage: ['English', 'Greek'],
    telephone: '+30 XXX XXX XXXX',
    url: 'https://example.com',
  };

  const openChatbot = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-chatbot'));
    }
  };

  return (
    <>
      <Head>
        <title>{textContent.seo.homeTitle}</title>
        <meta name="description" content={textContent.seo.homeDescription} />
        <meta property="og:title" content={textContent.seo.homeTitle} />
        <meta property="og:description" content={textContent.seo.homeDescription} />
        <meta property="og:site_name" content={textContent.openGraph.siteName} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <div className="container">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            <h1 id="hero-heading">{textContent.hero.heading}</h1>
            <p>{textContent.hero.description}</p>
            <div className="hero-buttons">
              <Link href="/appointment" className="button">
                {textContent.hero.bookAppointment}
              </Link>
              <a href="tel:+300000000000" className="button secondary">
                {textContent.hero.callClinic}
              </a>
              <button type="button" className="button secondary" onClick={openChatbot}>
                {textContent.hero.askChatbot}
              </button>
            </div>
            <div className="tag-list" aria-label={textContent.hero.highlightsTitle}>
              {textContent.hero.highlights.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/doctor-placeholder.svg"
              alt="Portrait placeholder of Dr. Stavros Papadopoulos"
              width={400}
              height={400}
              priority
            />
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="section-title">{textContent.homeSections.expertiseTitle}</h2>
          <p>{textContent.homeSections.expertiseDescription}</p>
          <div className="highlight-section">
            {featuredConditions.map((condition) => (
              <ConditionCard key={condition.slug} condition={condition} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card">
            <h2>{textContent.homeSections.appointmentTitle}</h2>
            <p>{textContent.homeSections.appointmentDescription}</p>
            <Link href="/appointment" className="button">
              {textContent.hero.bookAppointment}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
