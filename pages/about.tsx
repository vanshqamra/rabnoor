import Head from 'next/head';
import { doctorProfile } from '../data/cv';
import { textContent } from '../data/strings';

const AboutPage = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: doctorProfile.name,
    jobTitle: doctorProfile.title,
    worksFor: {
      '@type': 'MedicalClinic',
      name: textContent.brand.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thessaloniki',
        addressCountry: 'GR',
      },
    },
    alumniOf: doctorProfile.education,
  };

  return (
    <>
      <Head>
        <title>{textContent.seo.aboutTitle}</title>
        <meta name="description" content={doctorProfile.summary} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="section-title">{textContent.about.title}</h1>
          <p>{doctorProfile.summary}</p>
          <div className="card">
            <h2>{textContent.about.cvTitle}</h2>
            <p>
              <strong>{doctorProfile.name}</strong> – {doctorProfile.title}
            </p>
            <p>{doctorProfile.currentPosition}</p>
            <h3>{textContent.about.educationTitle}</h3>
            <ul>
              {doctorProfile.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{textContent.about.fellowshipsTitle}</h3>
            <ul>
              {doctorProfile.fellowships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{textContent.about.experienceTitle}</h3>
            <ul>
              {doctorProfile.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{textContent.about.membershipsTitle}</h3>
            <ul>
              {doctorProfile.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{textContent.about.publicationsTitle}</h3>
            <ul>
              {doctorProfile.publications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
